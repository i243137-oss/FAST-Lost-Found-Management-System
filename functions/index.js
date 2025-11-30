// Firebase Cloud Functions for Resend Email Integration
// This file should be in a 'functions' directory at project root

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Resend } = require('resend');

// Load environment variables from .env file (for local development)
try {
  require('dotenv').config();
} catch (e) {
  // dotenv not available, continue without it
}

admin.initializeApp();

// Initialize Resend with API key
// Priority: 1. Environment variable, 2. Firebase config, 3. Hardcoded (for development)
const resendApiKey = process.env.RESEND_API_KEY || functions.config().resend?.api_key || 're_42M9zF28_4kqCituFyePofTQXhzEa98R3';

if (!resendApiKey) {
  console.error('RESEND_API_KEY not found. Please set it in environment variables.');
}

const resend = new Resend(resendApiKey);

/**
 * Cloud Function to send email notifications when items match
 * 
 * To deploy:
 * 1. cd functions
 * 2. npm install resend firebase-functions firebase-admin
 * 3. firebase functions:config:set resend.api_key="YOUR_API_KEY"
 * 4. firebase deploy --only functions:sendMatchEmail
 */
exports.sendMatchEmail = functions.https.onCall(async (data, context) => {
  // Verify user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  const { toEmail, toName, matchedItem, userItem } = data;

  try {
    const emailResult = await resend.emails.send({
      from: 'FAST Lost & Found <onboarding@resend.dev>', // Resend default email - works for testing. Update to verified domain for production.
      to: toEmail,
      subject: `🔔 Match Found: ${matchedItem.title}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .item-card { background: white; padding: 15px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #2563eb; }
              .button { display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin-top: 15px; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔔 Match Found!</h1>
              </div>
              <div class="content">
                <p>Hi ${toName},</p>
                <p>We found a potential match for your ${userItem.status === 'lost' ? 'lost' : 'found'} item!</p>
                
                <div class="item-card">
                  <h3>${matchedItem.title}</h3>
                  <p><strong>Category:</strong> ${matchedItem.category}</p>
                  <p><strong>Location:</strong> ${matchedItem.location}</p>
                  <p><strong>Status:</strong> ${matchedItem.status.toUpperCase()}</p>
                  <p><strong>Description:</strong> ${matchedItem.description}</p>
                  ${matchedItem.image ? `<img src="${matchedItem.image}" alt="${matchedItem.title}" style="max-width: 100%; margin-top: 10px; border-radius: 4px;" />` : ''}
                </div>
                
                <p><strong>Your Item:</strong> ${userItem.title}</p>
                
                <a href="${process.env.APP_URL || 'https://your-app-url.com'}/item/${matchedItem.id}" class="button">View Item Details</a>
                
                <p style="margin-top: 20px; font-size: 14px; color: #6b7280;">
                  This is an automated notification from FAST Lost & Found System.
                </p>
              </div>
              <div class="footer">
                <p>FAST University Islamabad - Lost & Found System</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true, messageId: emailResult.id };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new functions.https.HttpsError('internal', 'Failed to send email', error);
  }
});

