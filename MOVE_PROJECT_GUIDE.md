# Guide: Moving Project to Another Desktop

## ✅ What Will Work Automatically

The project is configured with hardcoded credentials, so these will work on any machine:
- ✅ Firebase configuration (already in `src/firebase.js`)
- ✅ Cloudinary configuration (already in `src/utils/cloudinary.js`)
- ✅ All source code and configuration files

## 📦 What to Do When Moving

### Step 1: Compress the Project (IMPORTANT - Exclude node_modules)

**DO NOT compress these folders** (they're large and can be reinstalled):
- `node_modules/` (main project)
- `functions/node_modules/` (Cloud Functions)
- `dist/` (build output - can be regenerated)

**What TO compress:**
- All source files (`src/`)
- Configuration files (`package.json`, `firebase.json`, `firestore.rules`, etc.)
- `functions/` folder (but exclude `functions/node_modules/`)

**Recommended approach:**
1. Create a `.zip` or `.rar` file
2. When compressing, make sure to **exclude** `node_modules` folders
3. Or manually select only the necessary files/folders

### Step 2: On the New Desktop

1. **Extract the compressed folder** to your desired location

2. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Install version 16 or higher
   - Verify: Open terminal and run `node --version`

3. **Open terminal in the project folder** and run:
   ```bash
   npm install
   ```

4. **Install Cloud Functions dependencies** (if you plan to use email notifications):
   ```bash
   cd functions
   npm install
   cd ..
   ```

5. **Deploy Firestore Rules** (if not already deployed):
   - Option A: Use Firebase Console
     - Go to https://console.firebase.google.com/
     - Select your project: `fast-lost-and-found`
     - Go to Firestore Database → Rules
     - Copy content from `firestore.rules` and paste
     - Click "Publish"
   
   - Option B: Use Firebase CLI
     ```bash
     npm install -g firebase-tools
     firebase login
     firebase deploy --only firestore:rules
     ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

7. **Open the URL** shown in terminal (usually `http://localhost:5173`)

## ✅ Verification Checklist

After setup, verify:
- [ ] App loads without errors
- [ ] Can register/login with FAST email
- [ ] Can create posts
- [ ] Images upload successfully
- [ ] Admin dashboard works (if you're an admin)
- [ ] Announcements work (if you're an admin)

## 🔧 Optional: Firebase CLI Setup (for deploying rules/functions)

If you want to deploy Firestore rules or Cloud Functions from the new machine:

```bash
npm install -g firebase-tools
firebase login
```

## 📝 Notes

- **Firebase project**: Connected to `fast-lost-and-found` project
- **Cloudinary**: Already configured with your credentials
- **Email notifications**: Require Resend API key setup in Firebase Functions config (see `RESEND_SETUP.md`)
- **All data**: Stored in Firebase, so it will be available on any machine

## 🚨 If Something Doesn't Work

1. **Check Node.js version**: `node --version` (should be 16+)
2. **Reinstall dependencies**: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Check Firebase connection**: Verify internet connection and Firebase project status
4. **Check browser console**: Open DevTools (F12) and check for errors

## 📁 Files/Folders You Can Safely Exclude When Compressing

- `node_modules/` (will be reinstalled)
- `functions/node_modules/` (will be reinstalled)
- `dist/` (build output, can be regenerated)
- `.git/` (if using git, you can exclude this)
- `*.log` files

## 📁 Essential Files to Include

- `src/` (all source code)
- `functions/` (but exclude `functions/node_modules/`)
- `package.json`
- `package-lock.json`
- `firebase.json`
- `firestore.rules`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- All `.md` files (documentation)

---

**TL;DR**: Compress everything EXCEPT `node_modules` folders. On new machine: install Node.js → run `npm install` → run `npm run dev` → done! 🎉

