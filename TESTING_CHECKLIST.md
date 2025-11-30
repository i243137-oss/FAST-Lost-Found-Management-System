# Testing Checklist - FAST Lost & Found

## 🎯 Priority Testing (New Features)

### ✅ Story 15: Edit/Delete Reports
- [ ] **Edit Item Functionality**
  - [ ] Login as a user and create a post
  - [ ] Click on your own item to view details
  - [ ] Click "Edit Item" button
  - [ ] Verify edit modal opens with pre-filled data
  - [ ] Change title, description, category, location, status
  - [ ] Add new images or remove existing ones
  - [ ] Save changes and verify item updates in the list
  - [ ] Verify edited items require re-approval (if previously approved)
  - [ ] Test cancel button closes modal without saving

- [ ] **Delete Item Functionality**
  - [ ] Click "Delete Item" on your own post
  - [ ] Confirm deletion in popup
  - [ ] Verify item is removed from the list
  - [ ] Try to delete someone else's item (should not show delete button)

### ✅ Story 17: Generate Category Reports
- [ ] **Category Statistics Display**
  - [ ] Login as admin
  - [ ] Open Admin Dashboard
  - [ ] Navigate to "Category Reports" section
  - [ ] Verify statistics cards show: Total, Lost, Found, Returned, Recovery Rate
  - [ ] Check "Most Common Categories" shows top 4 categories
  - [ ] Verify detailed category breakdown table displays all categories
  - [ ] Check table shows: Category, Total, Lost, Found, Returned, Recovery %

- [ ] **Download Category Report**
  - [ ] Click "Download Report" button
  - [ ] Verify CSV file downloads with correct filename
  - [ ] Open CSV file and verify:
    - [ ] Headers are correct
    - [ ] All categories are included
    - [ ] Numbers match the displayed statistics
    - [ ] Recovery rates are calculated correctly

### ✅ Story 18: Highlight Frequently Lost Items
- [ ] **Visual Highlighting**
  - [ ] Create multiple lost items in the same category (e.g., "ID Cards")
  - [ ] Create at least 3 lost items in one category
  - [ ] Verify items in frequently lost categories show:
    - [ ] Orange border around the card
    - [ ] "⚠️ Frequently Lost" badge on the image
    - [ ] Orange-colored category text
    - [ ] "⚠️ Take extra care!" warning message
  - [ ] Verify found items don't show the warning (even in frequently lost categories)
  - [ ] Test with different categories to see which ones get highlighted

### ✅ Story 21: Download User History Report
- [ ] **User History Download**
  - [ ] Login as admin
  - [ ] Go to Admin Dashboard → User Management
  - [ ] Find a user with reported items
  - [ ] Click "📥 Download" button next to user
  - [ ] Verify CSV file downloads with user email in filename
  - [ ] Open CSV and verify:
    - [ ] All user's items are included
    - [ ] Items are sorted by date (newest first)
    - [ ] All fields are present: Title, Description, Category, Location, Status, Date, Approval Status
  - [ ] Test with user who has no items (should show toast message)
  - [ ] Verify item count displays correctly next to each user

### ✅ Story 22: Archive Old Cases
- [ ] **Archive Management**
  - [ ] Login as admin
  - [ ] Go to Admin Dashboard
  - [ ] Find "Archive Management" section
  - [ ] Verify it shows count of items older than 90 days
  - [ ] Verify it shows count of archived items
  - [ ] Click "Archive Old Items (90+ days)" button
  - [ ] Confirm in popup dialog
  - [ ] Verify items are archived (check archived count increases)
  - [ ] Verify archived items disappear from regular user view
  - [ ] Verify admins can still see archived items (if implemented)

---

## 🔍 Core Features Testing

### Authentication & Profile
- [ ] **Registration**
  - [ ] Try registering with non-FAST email (should fail)
  - [ ] Register with valid @isb.nu.edu.pk email
  - [ ] Fill all required fields (name, school, department)
  - [ ] Verify account creation success

- [ ] **Login**
  - [ ] Login with registered credentials
  - [ ] Try wrong password (should show error)
  - [ ] Verify login redirects to main page

- [ ] **Profile Management**
  - [ ] Open profile modal
  - [ ] Switch between "Profile" and "History" tabs
  - [ ] Edit name and phone number
  - [ ] Verify changes save successfully
  - [ ] Verify email, school, department are disabled (immutable)

- [ ] **History Tab (Story 9)**
  - [ ] View "History" tab in profile
  - [ ] Verify all your posts are listed
  - [ ] Check items are sorted by date (newest first)
  - [ ] Click on history item to view details
  - [ ] Verify empty state when no items reported

### Item Management
- [ ] **Create Lost Item**
  - [ ] Click "Report Item" or "New Lost/Found Post"
  - [ ] Toggle to "Lost Item"
  - [ ] Fill title, description, category, location
  - [ ] Upload multiple images
  - [ ] Click "Preview Report"
  - [ ] Verify preview shows all details correctly
  - [ ] Click "Confirm & Post"
  - [ ] Verify item appears in list with "Pending Approval" badge

- [ ] **Create Found Item**
  - [ ] Toggle to "Found Item"
  - [ ] Fill all required fields
  - [ ] Upload images
  - [ ] Post and verify status shows as "FOUND"

- [ ] **Search & Filters**
  - [ ] Use search bar to find items by title
  - [ ] Filter by category
  - [ ] Filter by location
  - [ ] Use tabs: All, Lost, Found
  - [ ] Combine multiple filters
  - [ ] Test "My Posts Only" toggle
  - [ ] Test sorting: Newest, Oldest, Title, Category

- [ ] **Item Details**
  - [ ] Click on any item card
  - [ ] Verify modal shows all details
  - [ ] Check image gallery (if multiple images)
  - [ ] Verify owner information displays
  - [ ] Test "Contact Owner" button (opens email/tel)
  - [ ] Test "Mark as Claimed" button

### Admin Features
- [ ] **Admin Dashboard Access**
  - [ ] Login as admin user
  - [ ] Verify "Admin" button appears in header
  - [ ] Open Admin Dashboard

- [ ] **Statistics Dashboard (Story 19)**
  - [ ] Verify statistics cards display:
    - [ ] Total Items
    - [ ] Lost Items
    - [ ] Found Items
    - [ ] Recovery Rate
  - [ ] Check "Most Common Categories" section
  - [ ] Verify "Items This Month" count is correct

- [ ] **Approve/Reject Posts**
  - [ ] View "Pending Approvals" section
  - [ ] Click "Approve" on pending item
  - [ ] Verify item disappears from pending list
  - [ ] Verify item now visible to all users
  - [ ] Test "Reject" button

- [ ] **User Management**
  - [ ] View all users in User Management
  - [ ] Test "Suspend" button on a user
  - [ ] Verify suspended user cannot login (if implemented)
  - [ ] Test "Unsuspend" button

### UI/UX Features
- [ ] **Dark/Light Mode**
  - [ ] Toggle dark mode button
  - [ ] Verify all components adapt to theme
  - [ ] Check modals, cards, forms in both modes

- [ ] **Responsive Design**
  - [ ] Test on mobile viewport (< 640px)
  - [ ] Test on tablet viewport (640px - 1024px)
  - [ ] Test on desktop (> 1024px)
  - [ ] Verify filters sidebar stacks on mobile
  - [ ] Check item grid adapts to screen size

- [ ] **Toast Notifications**
  - [ ] Perform various actions (create, edit, delete)
  - [ ] Verify toast messages appear
  - [ ] Check toast auto-dismisses after 3 seconds
  - [ ] Test different toast types (success, error, info)

---

## 🐛 Edge Cases & Error Handling

- [ ] **Empty States**
  - [ ] Test with no items in database
  - [ ] Test search with no results
  - [ ] Test filters with no matches
  - [ ] Verify helpful empty state messages

- [ ] **Image Handling**
  - [ ] Upload very large image (test limits)
  - [ ] Upload multiple images (5+)
  - [ ] Remove images from preview
  - [ ] Test with no images (should use placeholder)
  - [ ] Test broken image URLs (should show placeholder)

- [ ] **Form Validation**
  - [ ] Try submitting empty forms
  - [ ] Test with very long text inputs
  - [ ] Test special characters in inputs
  - [ ] Verify password length validation (min 6 chars)

- [ ] **Network Issues**
  - [ ] Test with slow connection
  - [ ] Test offline behavior (if applicable)
  - [ ] Verify error messages on failed operations

- [ ] **Permissions**
  - [ ] Try editing someone else's item (should not work)
  - [ ] Try deleting someone else's item (should not work)
  - [ ] Regular user tries to access admin dashboard (should not work)
  - [ ] Verify suspended users cannot perform actions

---

## 📊 Data Integrity Testing

- [ ] **Item Status Flow**
  - [ ] Create lost item → Verify status is "lost"
  - [ ] Mark as claimed → Verify status changes to "returned"
  - [ ] Edit item status → Verify changes persist

- [ ] **Approval Workflow**
  - [ ] Create item → Status: "pending"
  - [ ] Admin approves → Status: "approved", visible to all
  - [ ] Edit approved item → Status: "pending" (requires re-approval)

- [ ] **Real-time Updates**
  - [ ] Open app in two browser windows
  - [ ] Create item in one window
  - [ ] Verify item appears in other window automatically
  - [ ] Edit item in one window
  - [ ] Verify changes reflect in other window

---

## 🔒 Security Testing

- [ ] **Email Validation**
  - [ ] Try registering with invalid email formats
  - [ ] Verify only @isb.nu.edu.pk emails accepted

- [ ] **Authentication**
  - [ ] Try accessing protected routes without login
  - [ ] Verify logout clears session
  - [ ] Test session persistence on page refresh

- [ ] **Data Access**
  - [ ] Verify users can only edit/delete their own items
  - [ ] Verify admin can edit/delete any item
  - [ ] Check Firestore security rules are working

---

## 📱 Browser Compatibility

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Verify all features work across browsers

---

## 🚀 Performance Testing

- [ ] **Load Time**
  - [ ] Test initial page load
  - [ ] Test with large number of items (100+)
  - [ ] Verify pagination or lazy loading works

- [ ] **Image Loading**
  - [ ] Test image upload speed
  - [ ] Verify images load efficiently
  - [ ] Check Cloudinary integration works

---

## ✅ Quick Smoke Test (5 minutes)

If you're short on time, test these critical paths:

1. ✅ Register new account
2. ✅ Create a lost item with image
3. ✅ Search and filter items
4. ✅ Edit your own item
5. ✅ View history in profile
6. ✅ Login as admin
7. ✅ Approve pending item
8. ✅ Download category report
9. ✅ Archive old items
10. ✅ Download user history

---

## 📝 Notes

- Document any bugs you find with:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Browser/device info

- Test with real data when possible
- Verify all CSV downloads work correctly
- Check that all modals close properly
- Ensure no console errors appear

