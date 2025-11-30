// Resend Email Utility
// Note: This should be called from Firebase Cloud Functions, not directly from frontend
// API key should be stored in Firebase Functions environment variables

/**
 * Send email notification when items match
 * This function should be called from Firebase Cloud Functions
 * 
 * @param {Object} params - Email parameters
 * @param {string} params.toEmail - Recipient email
 * @param {string} params.toName - Recipient name
 * @param {Object} params.matchedItem - The item that matches
 * @param {Object} params.userItem - The user's item that was matched
 */
export const sendMatchEmail = async (params) => {
  const { toEmail, toName, matchedItem, userItem } = params;

  // This will be implemented in Firebase Cloud Functions
  // For now, we'll create a callable function structure
  
  const emailData = {
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
              
              <a href="${window.location.origin}/item/${matchedItem.id}" class="button">View Item Details</a>
              
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
    text: `
      Match Found!
      
      Hi ${toName},
      
      We found a potential match for your ${userItem.status === 'lost' ? 'lost' : 'found'} item!
      
      Matched Item: ${matchedItem.title}
      Category: ${matchedItem.category}
      Location: ${matchedItem.location}
      Status: ${matchedItem.status.toUpperCase()}
      Description: ${matchedItem.description}
      
      Your Item: ${userItem.title}
      
      View item: ${window.location.origin}/item/${matchedItem.id}
      
      ---
      FAST University Islamabad - Lost & Found System
    `
  };

  // This will call Firebase Cloud Function
  // For now, return the email data structure
  return emailData;
};

/**
 * Check if two items match based on similarity
 * @param {Object} item1 - First item
 * @param {Object} item2 - Second item
 * @returns {boolean} - True if items match
 */
export const checkItemMatch = (item1, item2) => {
  // Items must be opposite status (one lost, one found)
  if (item1.status === item2.status) return false;
  
  // Items must be in same category
  if (item1.category !== item2.category) return false;
  
  // Check title similarity (simple keyword matching)
  const title1 = (item1.title || '').toLowerCase();
  const title2 = (item2.title || '').toLowerCase();
  const titleWords1 = title1.split(/\s+/);
  const titleWords2 = title2.split(/\s+/);
  
  // Check if at least 2 words match
  const matchingWords = titleWords1.filter(word => 
    word.length > 3 && titleWords2.includes(word)
  );
  
  if (matchingWords.length >= 2) return true;
  
  // Check description similarity
  const desc1 = (item1.description || '').toLowerCase();
  const desc2 = (item2.description || '').toLowerCase();
  
  // Check for common keywords in description
  const descWords1 = desc1.split(/\s+/).filter(w => w.length > 4);
  const descWords2 = desc2.split(/\s+/).filter(w => w.length > 4);
  const matchingDescWords = descWords1.filter(word => descWords2.includes(word));
  
  if (matchingDescWords.length >= 3) return true;
  
  return false;
};

