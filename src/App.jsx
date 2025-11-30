import React, { useState, useEffect } from 'react';

import { Search, Moon, Sun, MapPin, Tag, CheckCircle, Upload, X, User, UserCircle, Building, Phone, LogOut, Mail, Lock, Eye, MessageCircle, Calendar, ArrowUpDown, Filter, Trash2, Edit, Shield, PlusCircle } from 'lucide-react';
import { auth, db } from './firebase';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where, setDoc, onSnapshot } from 'firebase/firestore';
import { uploadToCloudinary } from './utils/cloudinary';
import { checkItemMatch, sendMatchEmail } from './utils/resend';

// --- Mock Data --- (Removed - using Firestore instead)

const categories = ["All", "Electronics", "Books", "Bags", "Clothing", "Personal Items", "ID Cards", "Keys"];

const locations = ["All", "Library", "Cafeteria", "Gym", "Hostel", "Science Block", "Admin Block"];

// Department structure for FAST

const departmentStructure = {

  "School of Computing": [

    "Software Engineering",

    "Computer Science",

    "Artificial Intelligence",

    "Data Science",

    "Cyber Security"

  ],

  "School of Engineering": [

    "Electrical Engineering",

    "Computer Engineering"

  ],

  "School of Management": [

    "Accounting and Finance",

    "Fintech",

    "Business Administration",

    "Business Analytics"

  ]

};

// Placeholder image URL for items without photos

const PLACEHOLDER_IMAGE = "https://placehold.co/400x300/a8b9c9/ffffff?text=No+Image";

export default function App() {

  // Story #1: Login/Register with persistent storage (using localStorage as mock DB)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(true);

  const [isRegistering, setIsRegistering] = useState(false);

  const [authForm, setAuthForm] = useState({

    email: "",

    password: "",

    name: "",

    school: "",

    department: "",

    phone: ""

  });

  const [authError, setAuthError] = useState("");

  const [users, setUsers] = useState([]); // Users will be fetched from Firestore if needed, or just rely on Auth



  // Story #10: Dark/Light Mode

  const [darkMode, setDarkMode] = useState(false);



  // Story #2: Profile Management with persistent storage

  const [showProfile, setShowProfile] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    school: "",
    department: "",
    phone: ""
  });

  const [profileTab, setProfileTab] = useState("profile"); // 'profile' or 'history'

  const [showAdminDashboard, setShowAdminDashboard] = useState(false); // Story 14: Admin Dashboard
  const [currentView, setCurrentView] = useState("home"); // 'home' or 'admin-login'

  // Story #20: Announcements/Reminders
  const [announcements, setAnnouncements] = useState([]);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [announcementForm, setAnnouncementForm] = useState({
    title: "",
    message: "",
    type: "info" // 'info', 'warning', 'reminder'
  });

  // Story #23: Audit Logs
  const [auditLogs, setAuditLogs] = useState([]);
  const [showAuditLogs, setShowAuditLogs] = useState(false);

  // Story #24: Real-Time Notifications
  const [notifications, setNotifications] = useState([]);



  // Story #13: Photo Upload & Preview (for creating posts)
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // Story 3 & 4: Preview feature
  const [showEditModal, setShowEditModal] = useState(false); // Story 15: Edit modal
  const [editingItem, setEditingItem] = useState(null); // Story 15: Item being edited

  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    category: "Electronics",
    location: "Library",
    status: "lost", // Default to lost, can be toggled to found
    images: [] // Storing image URLs/blobs here temporarily
  });



  // Story #5, #6, #7: Search and Filters

  // Story #5, #6, #7: Search and Filters
  const [items, setItems] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedLocation, setSelectedLocation] = useState("All");

  const [activeTab, setActiveTab] = useState("all");

  // New Features: Toast, Item Details, Sort, My Posts
  const [toasts, setToasts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [showMyPosts, setShowMyPosts] = useState(false);
  const [itemOwner, setItemOwner] = useState(null);



  // Save items and user data to localStorage whenever they change

  // Fetch items from Firestore (Real-time)
  useEffect(() => {
    if (!db) return;
    const unsubscribe = onSnapshot(collection(db, "items"), (snapshot) => {
      const itemsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(itemsList);
    }, (error) => {
      console.error("Error fetching items: ", error);
      showToast("Failed to load items", "error");
    });

    return () => unsubscribe();
  }, []);

  // Fetch all users (Real-time for Admin Dashboard)
  useEffect(() => {
    if (!db || !isLoggedIn) return;

    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersList);
    }, (error) => {
      console.error("Error fetching users:", error);
    });

    return () => unsubscribe();
  }, [isLoggedIn]);

  // No longer syncing users to localStorage
  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  // Story #20: Fetch Announcements (Real-time)
  useEffect(() => {
    if (!db || !isLoggedIn) return; // Only fetch if logged in

    const unsubscribe = onSnapshot(collection(db, "announcements"), (snapshot) => {
      const announcementsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })).sort((a, b) => {
        // Sort by created date, newest first
        const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt || 0);
        const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt || 0);
        return dateB - dateA;
      });
      setAnnouncements(announcementsList);
    }, (error) => {
      console.error("Error fetching announcements:", error);
    });

    return () => unsubscribe();
  }, [isLoggedIn]);



  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if user is suspended before allowing access
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.isSuspended === true) {
              // Sign out suspended user
              await signOut(auth);
              setAuthError("Your account has been suspended. Please contact an administrator.");
              showToast("Account suspended. Please contact an administrator.", 'error');
              setIsLoggedIn(false);
              setShowAuthModal(true);
              return;
            }
          }
        } catch (e) {
          console.error("Error checking suspension status:", e);
        }

        setIsLoggedIn(true);
        setShowAuthModal(false);

        // Fetch user profile from Firestore
        try {
          // Try to get user document directly by UID (more efficient)
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setProfile({
              name: userData.name || user.displayName || "",
              email: userData.email || user.email,
              school: userData.school || "",
              department: userData.department || "",
              phone: userData.phone || "",
              role: userData.role || 'user',
              isSuspended: userData.isSuspended || false
            });
          } else {
            // Fallback: query by email if document doesn't exist (for backwards compatibility)
            const q = query(collection(db, "users"), where("email", "==", user.email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
              const userData = querySnapshot.docs[0].data();
              setProfile({
                name: userData.name || user.displayName || "",
                email: userData.email || user.email,
                school: userData.school || "",
                department: userData.department || "",
                phone: userData.phone || "",
                role: userData.role || 'user',
                isSuspended: userData.isSuspended || false
              });
            } else {
              setProfile({
                name: user.displayName || "",
                email: user.email,
                school: "",
                department: "",
                phone: "",
                role: 'user',
                isSuspended: false
              });
            }
          }
        } catch (e) {
          console.error("Error fetching user profile:", e);
        }

      } else {
        setIsLoggedIn(false);
        setShowAuthModal(true);
        setProfile({ name: "", email: "", school: "", department: "", phone: "", role: 'user', isSuspended: false });
      }
    });
    return () => unsubscribe();
  }, []);

  // Apply dark mode class to HTML element

  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add('dark');

    } else {

      document.documentElement.classList.remove('dark');

    }

  }, [darkMode]);



  // Toast Notification System
  const showToast = (message, type = 'success') => {
    const id = Date.now();
    const toast = { id, message, type };
    setToasts(prev => [...prev, toast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  // Story #5: Search functionality with Sort
  let filteredItems = items.filter(item => {
    const matchesSearch = (item.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || item.location === selectedLocation;
    const matchesTab = activeTab === "all" || item.status === activeTab;

    // Filter for My Posts if enabled
    if (showMyPosts && item.ownerEmail !== profile?.email) {
      return false;
    }

    // Story 14: Admin Dashboard - only show approved items to regular users, or my own items regardless of status
    const isApproved = item.approvalStatus === 'approved' || item.ownerEmail === profile?.email || profile?.role === 'admin';

    // Story #22: Filter out archived items for regular users (admins can see all)
    const isArchived = item.archived && profile?.role !== 'admin';
    if (isArchived) return false;

    return matchesSearch && matchesCategory && matchesLocation && matchesTab && isApproved;
  });

  // Sort functionality
  filteredItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "newest") {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    } else if (sortBy === "oldest") {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateA - dateB;
    } else if (sortBy === "category") {
      return (a.category || '').localeCompare(b.category || '');
    } else if (sortBy === "title") {
      return (a.title || '').localeCompare(b.title || '');
    }
    return 0;
  });

  // Story #11: Item Status Tracking
  const handleUpdateStatus = async (itemId, newStatus) => {
    try {
      const itemRef = doc(db, "items", itemId);
      await updateDoc(itemRef, { status: newStatus });

      setItems(items.map(item =>
        item.id === itemId ? { ...item, status: newStatus } : item
      ));
      showToast(`Item marked as ${newStatus}`, 'success');
    } catch (error) {
      console.error("Error updating status:", error);
      showToast('Failed to update status', 'error');
    }
  };

  // Story #8: Mark Item as Claimed (Legacy, now part of status tracking but kept for compatibility if needed)
  const handleMarkClaimed = async (itemId) => {
    handleUpdateStatus(itemId, 'returned');
  };

  // Item Details Modal
  const handleItemClick = (item) => {
    // Find owner info if available
    const owner = users.find(u => u.email === item.ownerEmail);
    setItemOwner(owner || null);
    setSelectedItem(item);
    setShowItemDetails(true);
  };

  // Contact Owner
  const handleContactOwner = (item) => {
    const owner = users.find(u => u.email === item.ownerEmail);
    if (owner) {
      if (owner.phone) {
        window.open(`tel:${owner.phone}`, '_self');
        showToast(`Calling ${owner.name}...`, 'info');
      } else if (owner.email) {
        window.open(`mailto:${owner.email}?subject=Regarding: ${item.title}`, '_self');
        showToast(`Opening email to ${owner.name}...`, 'info');
      } else {
        showToast('Owner contact information not available', 'error');
      }
    } else {
      showToast('Owner information not found', 'error');
    }
  };

  // Story #15: Edit Item
  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewPost({
      title: item.title || "",
      description: item.description || "",
      category: item.category || "Electronics",
      location: item.location || "Library",
      status: item.status || "lost",
      images: item.images ? item.images.map((url, idx) => ({
        id: Date.now() + idx,
        url: url,
        file: null // Existing images don't need re-upload
      })) : []
    });
    setShowEditModal(true);
    setShowItemDetails(false);
  };

  // Story #15: Update Item
  const handleUpdateItem = async () => {
    if (!editingItem) return;

    if (!newPost.title.trim() || !newPost.description.trim()) {
      showToast('Please fill in title and description', 'error');
      return;
    }

    try {
      showToast('Updating item...', 'info');

      // Upload any new images (only files that need uploading)
      const newImageFiles = newPost.images.filter(img => img.file);
      const existingImageUrls = newPost.images.filter(img => !img.file).map(img => img.url);

      let uploadedImageUrls = [];
      if (newImageFiles.length > 0) {
        uploadedImageUrls = await Promise.all(
          newImageFiles.map(async (img) => {
            if (img.file) {
              return await uploadToCloudinary(img.file);
            }
            return img.url;
          })
        );
      }

      // Combine existing and new image URLs
      const allImageUrls = [...existingImageUrls, ...uploadedImageUrls];

      const updateData = {
        title: newPost.title,
        description: newPost.description,
        category: newPost.category,
        location: newPost.location,
        status: newPost.status,
        image: allImageUrls.length > 0 ? allImageUrls[0] : PLACEHOLDER_IMAGE,
        images: allImageUrls,
        // Keep approval status - if it was approved, it might need re-approval after edit
        approvalStatus: editingItem.approvalStatus === 'approved' ? 'pending' : editingItem.approvalStatus
      };

      await updateDoc(doc(db, "items", editingItem.id), updateData);

      // Story #23: Log activity
      await logActivity('update', 'item', editingItem.id, {
        title: updateData.title,
        changes: Object.keys(updateData)
      });

      // Update local state
      setItems(items.map(item =>
        item.id === editingItem.id ? { ...item, ...updateData } : item
      ));

      // Clean up temporary object URLs for new images
      newImageFiles.forEach(img => {
        if (img.url && img.url.startsWith('blob:')) {
          URL.revokeObjectURL(img.url);
        }
      });

      setShowEditModal(false);
      setEditingItem(null);
      showToast('Item updated successfully!', 'success');

      // Reset form
      setNewPost({
        title: "",
        description: "",
        category: "Electronics",
        location: "Library",
        status: "lost",
        images: []
      });
    } catch (error) {
      console.error("Error updating document: ", error);
      showToast("Failed to update item", "error");
    }
  };

  // Delete Item (only for owner)
  const handleDeleteItem = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const itemToDelete = items.find(item => item.id === itemId);
        await deleteDoc(doc(db, "items", itemId));

        // Story #23: Log activity
        await logActivity('delete', 'item', itemId, {
          title: itemToDelete?.title || 'Unknown'
        });

        setItems(items.filter(item => item.id !== itemId));
        setShowItemDetails(false);
        showToast('Item deleted successfully', 'success');
      } catch (error) {
        console.error("Error deleting item:", error);
        showToast('Failed to delete item', 'error');
      }
    }
  };

  // Story #23: Log activity to audit log
  const logActivity = async (action, resourceType, resourceId, details = {}) => {
    if (!isLoggedIn || !auth.currentUser) return;

    try {
      await addDoc(collection(db, "audit_logs"), {
        action, // 'create', 'update', 'delete', 'approve', 'reject', 'suspend', etc.
        resourceType, // 'item', 'user', 'announcement'
        resourceId,
        userId: auth.currentUser.uid,
        userEmail: profile?.email || auth.currentUser.email,
        userName: profile?.name || auth.currentUser.displayName,
        timestamp: new Date(),
        details,
        ipAddress: null // Could be added if needed
      });
    } catch (error) {
      console.error("Error logging activity:", error);
      // Don't throw - audit logging shouldn't break the app
    }
  };

  // Story #12: Send match notification via Firebase Cloud Function
  const sendMatchNotification = async (params) => {
    try {
      // Call Firebase Cloud Function to send email via Resend
      const functions = getFunctions();
      const sendEmail = httpsCallable(functions, 'sendMatchEmail');
      await sendEmail(params);
      console.log('Match email sent successfully');
    } catch (error) {
      console.error("Error sending match notification:", error);
      // Don't throw - we don't want to fail item creation if email fails
    }
  };

  // Story #13: Handle image upload for posts
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file), // Create blob URL for preview
      file: file, // Store the actual file for upload
      name: file.name
    }));
    setNewPost({ ...newPost, images: [...newPost.images, ...newImages] });
  };

  const removeImageFromPost = (imageId) => {
    setNewPost({
      ...newPost,
      images: newPost.images.filter(img => img.id !== imageId)
    });
  };

  const handleCreatePost = async () => {
    if (!newPost.title.trim() || !newPost.description.trim()) {
      showToast('Please fill in title and description', 'error');
      return;
    }

    try {
      showToast('Uploading images...', 'info');

      // Upload images to Cloudinary
      const uploadedImageUrls = await Promise.all(
        newPost.images.map(async (img) => {
          if (img.file) {
            return await uploadToCloudinary(img.file);
          }
          return img.url; // Should not happen for new posts but good for safety
        })
      );

      const postData = {
        title: newPost.title,
        description: newPost.description,
        category: newPost.category,
        location: newPost.location,
        status: newPost.status,
        // Use the first uploaded image URL, or the placeholder
        image: uploadedImageUrls.length > 0 ? uploadedImageUrls[0] : PLACEHOLDER_IMAGE,
        images: uploadedImageUrls, // Store all uploaded image URLs
        claimed: false,
        approvalStatus: 'pending', // Story 14: Default to pending
        date: new Date().toISOString().split('T')[0],
        ownerEmail: profile?.email || auth.currentUser?.email || '', // Track who created the post
        ownerName: profile?.name || auth.currentUser?.displayName || ''
      };

      const docRef = await addDoc(collection(db, "items"), postData);

      // Add to local state with the new ID
      const newPostWithId = { id: docRef.id, ...postData };
      setItems([newPostWithId, ...items]);

      // Story #12 & #24: Check for matches and send email notifications
      try {
        const potentialMatches = items.filter(existingItem => {
          // Only check approved items
          if (existingItem.approvalStatus !== 'approved') return false;
          // Don't match with own items
          if (existingItem.ownerEmail === postData.ownerEmail) return false;
          // Check if items match
          return checkItemMatch(newPostWithId, existingItem);
        });

        // Story #24: Show real-time notification if matches found
        if (potentialMatches.length > 0) {
          const notification = {
            id: Date.now().toString(),
            type: 'match',
            title: `🎉 Potential Match Found!`,
            message: `We found ${potentialMatches.length} potential match${potentialMatches.length > 1 ? 'es' : ''} for your ${newPost.status} item: "${newPost.title}"`,
            timestamp: new Date(),
            matches: potentialMatches.map(m => ({ id: m.id, title: m.title }))
          };
          setNotifications(prev => [notification, ...prev]);

          // Auto-remove notification after 10 seconds
          setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== notification.id));
          }, 10000);
        }

        // Send email notifications for matches
        for (const matchedItem of potentialMatches) {
          // Find the owner of the matched item
          const matchedItemOwner = users.find(u => u.email === matchedItem.ownerEmail);
          if (matchedItemOwner) {
            // Call Firebase Cloud Function to send email
            // This will be implemented in Cloud Functions
            await sendMatchNotification({
              toEmail: matchedItemOwner.email,
              toName: matchedItemOwner.name,
              matchedItem: newPostWithId,
              userItem: matchedItem
            });
          }
        }

        if (potentialMatches.length > 0) {
          showToast(`${potentialMatches.length} potential match(es) found! Email notifications sent.`, 'info');
        }
      } catch (error) {
        console.error("Error checking matches:", error);
        // Don't fail the post creation if match checking fails
      }

      // Clean up temporary object URLs
      newPost.images.forEach(img => URL.revokeObjectURL(img.url));

      setShowCreatePostModal(false);
      setShowPreview(false); // Reset preview state
      showToast('Item posted successfully!', 'success');

      // Reset new post form
      setNewPost({
        title: "",
        description: "",
        category: "Electronics",
        location: "Library",
        status: "lost",
        images: []
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      showToast("Failed to create post", "error");
    }
  };

  // Story #20: Handle Announcement Creation/Update
  const handleSaveAnnouncement = async () => {
    if (!announcementForm.title.trim() || !announcementForm.message.trim()) {
      showToast('Please fill in title and message', 'error');
      return;
    }

    try {
      if (editingAnnouncement) {
        // Update existing announcement
        await updateDoc(doc(db, "announcements", editingAnnouncement.id), {
          title: announcementForm.title,
          message: announcementForm.message,
          type: announcementForm.type,
          updatedAt: new Date()
        });
        // Story #23: Log activity
        await logActivity('update', 'announcement', editingAnnouncement.id, {
          title: announcementForm.title
        });
        showToast('Announcement updated successfully', 'success');
      } else {
        // Create new announcement
        const docRef = await addDoc(collection(db, "announcements"), {
          title: announcementForm.title,
          message: announcementForm.message,
          type: announcementForm.type,
          createdAt: new Date(),
          createdBy: profile?.email || auth.currentUser?.email || 'admin'
        });
        // Story #23: Log activity
        await logActivity('create', 'announcement', docRef.id, {
          title: announcementForm.title,
          type: announcementForm.type
        });
        showToast('Announcement created successfully', 'success');
      }

      setShowAnnouncementModal(false);
      setEditingAnnouncement(null);
      setAnnouncementForm({ title: "", message: "", type: "info" });
    } catch (error) {
      console.error("Error saving announcement:", error);
      showToast(`Failed to save announcement: ${error.message}`, 'error');
    }
  };

  // Story #20: Delete Announcement
  const handleDeleteAnnouncement = async (announcementId) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        const announcement = announcements.find(a => a.id === announcementId);
        await deleteDoc(doc(db, "announcements", announcementId));
        // Story #23: Log activity
        await logActivity('delete', 'announcement', announcementId, {
          title: announcement?.title || 'Unknown'
        });
        showToast('Announcement deleted successfully', 'success');
      } catch (error) {
        console.error("Error deleting announcement:", error);
        showToast('Failed to delete announcement', 'error');
      }
    }
  };

  // Story #2: Update profile
  const handleProfileUpdate = async (field, value) => {
    const updatedProfile = { ...profile, [field]: value };
    setProfile(updatedProfile);

    // Update in Firestore
    if (auth.currentUser) {
      try {
        // We need to find the user doc first since we don't have the ID stored in profile
        // This is inefficient, ideally we store the doc ID.
        // But since we use uid as doc ID (in my plan for registration below), we can use that.
        await setDoc(doc(db, "users", auth.currentUser.uid), updatedProfile, { merge: true });
        showToast("Profile updated", "success");
      } catch (e) {
        console.error("Error updating profile:", e);
        showToast("Failed to save profile", "error");
      }
    }
  };

  // Story #1: Handle Login/Register
  const validateUniversityEmail = (email) => {
    // FAST Islamabad campus email validation
    return email.endsWith('@isb.nu.edu.pk');
  };

  const handleAuth = async (e) => {
    if (e) e.preventDefault();
    setAuthError("");

    // Validate FAST university email
    if (!validateUniversityEmail(authForm.email)) {
      setAuthError("Please use your FAST Islamabad email (@isb.nu.edu.pk)");
      return;
    }

    // Validate password
    if (authForm.password.length < 6) {
      setAuthError("Password must be at least 6 characters long");
      return;
    }

    try {
      if (isRegistering) {
        // Registration flow
        if (!authForm.name.trim() || !authForm.school || !authForm.department.trim()) {
          setAuthError("Please fill in all required fields (Name, School, Department).");
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(auth, authForm.email, authForm.password);
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: authForm.name
        });

        // Create user profile in Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: authForm.name,
          email: authForm.email,
          school: authForm.school,
          department: authForm.department,
          phone: authForm.phone,
          role: 'user', // Story 16: Default role
          isSuspended: false // Story 16: Suspension status
        });

        // Update local state
        setProfile({
          name: authForm.name,
          email: authForm.email,
          school: authForm.school,
          department: authForm.department,
          phone: authForm.phone,
          role: 'user',
          isSuspended: false
        });
        showToast('Account created successfully! Welcome!', 'success');

      } else {
        // Login flow
        const userCredential = await signInWithEmailAndPassword(auth, authForm.email, authForm.password);
        const user = userCredential.user;

        // Check if user is suspended
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.isSuspended === true) {
            // Sign out the user immediately
            await signOut(auth);
            setAuthError("Your account has been suspended. Please contact an administrator.");
            showToast("Account suspended. Please contact an administrator.", 'error');
            return;
          }
        }

        setAuthForm({ email: "", password: "", name: "", school: "", department: "", phone: "" });
        showToast(`Welcome back!`, 'success');
      }
    } catch (error) {
      console.error("Auth error:", error);
      let errorMessage = "Authentication failed.";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Email already in use.";
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = "Invalid email or password.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Password should be at least 6 characters.";
      }
      setAuthError(errorMessage);
      showToast(errorMessage, 'error');
    }
  };

  const handleSchoolChange = (school) => {
    setAuthForm({
      ...authForm,
      school: school,
      department: "" // Reset department when school changes
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Clean up blob URLs for safety, though app state is reset
      items.forEach(item => {
        if (item.image && item.image.startsWith('blob:')) {
          URL.revokeObjectURL(item.image);
        }
      });
      // setIsLoggedIn(false); // Handled by onAuthStateChanged
      // setShowAuthModal(true); // Handled by onAuthStateChanged
      setIsRegistering(false); // Reset to login page
      setAuthForm({ email: "", password: "", name: "", school: "", department: "", phone: "" });
      // localStorage.removeItem('isLoggedIn'); // No longer needed
      // localStorage.removeItem('currentUser'); // No longer needed
      showToast('Logged out successfully', 'info');
    } catch (error) {
      console.error("Logout error:", error);
      showToast('Error logging out', 'error');
    }
  };

  const handleAuthFormChange = (field, value) => {
    setAuthForm({ ...authForm, [field]: value });
    setAuthError("");
  };

  // Story #18: Calculate frequently lost categories
  const getFrequentlyLostCategories = () => {
    const categoryCounts = items
      .filter(item => item.status === 'lost')
      .reduce((acc, item) => {
        const cat = item.category || 'Unknown';
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
      }, {});

    // Categories with 3+ lost items are considered "frequently lost"
    const threshold = 3;
    return Object.entries(categoryCounts)
      .filter(([_, count]) => count >= threshold)
      .map(([category]) => category);
  };

  // Custom Card Component (Item Display)
  const ItemCard = ({ item }) => {
    const isOwner = item.ownerEmail === profile?.email;
    const isAdmin = profile?.role === 'admin';
    const frequentlyLostCategories = getFrequentlyLostCategories();
    const isFrequentlyLost = item.status === 'lost' && frequentlyLostCategories.includes(item.category);

    return (
      <div
        key={item.id}
        className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} ${isFrequentlyLost ? 'border-2 border-orange-500 ring-2 ring-orange-200 dark:ring-orange-800' : 'border'} rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl cursor-pointer`}
        onClick={() => handleItemClick(item)}
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover object-center"
            onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMAGE; }}
          />
          {isOwner && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              My Post
            </span>
          )}
          {isFrequentlyLost && (
            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-10">
              ⚠️ Frequently Lost
            </span>
          )}
          {item.approvalStatus === 'pending' && (
            <span className={`absolute ${isFrequentlyLost ? 'top-10' : 'top-2'} right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold`}>
              Pending Approval
            </span>
          )}
          {(isOwner || isAdmin) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteItem(item.id);
              }}
              className="absolute bottom-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition shadow-md"
              title="Delete Item"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className={`font-extrabold text-xl ${darkMode ? 'text-white' : 'text-gray-900'} leading-snug`}>
              {item.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${item.status === 'lost'
              ? 'bg-red-500 text-white'
              : 'bg-green-500 text-white'
              } shadow-md`}>
              {(item.status || 'unknown').toUpperCase()}
            </span>
          </div>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
            {item.description}
          </p>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center gap-2">
              <Tag size={16} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                Category: <span className={`font-medium ${isFrequentlyLost ? 'text-orange-600 dark:text-orange-400' : ''}`}>{item.category}</span>
                {isFrequentlyLost && (
                  <span className="ml-2 text-xs text-orange-600 dark:text-orange-400">⚠️ Take extra care!</span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Location: <span className='font-medium'>{item.location}</span></span>
            </div>
            <p className={`text-xs pt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Reported: {item.date ? new Date(item.date).toLocaleDateString() : 'N/A'}
            </p>
          </div>

          {/* Simple click to view details - all actions in modal */}
          <div className={`w-full py-2 rounded-xl text-center font-semibold text-sm ${item.claimed
            ? 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200'
            : darkMode
              ? 'bg-gray-700 text-gray-300'
              : 'bg-gray-100 text-gray-700'
            }`}>
            {item.claimed ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle size={16} /> Claimed & Resolved
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Eye size={16} /> Click to view details
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };
  // Admin Login Component
  if (currentView === 'admin-login') {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-center mb-8">
            <div className="p-3 bg-purple-600 rounded-full shadow-lg">
              <Shield size={40} className="text-white" />
            </div>
          </div>

          <h2 className={`text-3xl font-bold text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Admin Portal</h2>
          <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Restricted access for administrators only.</p>

          <form onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            try {
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              const user = userCredential.user;

              // Check role
              const userDoc = await getDoc(doc(db, "users", user.uid));
              if (userDoc.exists() && userDoc.data().role === 'admin') {
                showToast('Welcome back, Admin!', 'success');
                setCurrentView('home');
                setShowAdminDashboard(true); // Auto-open dashboard
              } else {
                await signOut(auth);
                showToast('Access Denied: You are not an admin.', 'error');
              }
            } catch (error) {
              console.error("Admin login error:", error);
              showToast('Login failed: ' + error.message, 'error');
            }
          }} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
              <div className="relative">
                <Mail className={`absolute left-3 top-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
                <input
                  name="email"
                  type="email"
                  required
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                  placeholder="admin@isb.nu.edu.pk"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
              <div className="relative">
                <Lock className={`absolute left-3 top-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
                <input
                  name="password"
                  type="password"
                  required
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentView('home')}
              className={`text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition`}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Story #24: Real-Time Notifications */}
      <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-lg border-l-4 ${notification.type === 'match'
                ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
              } animate-slide-in`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className={`font-bold mb-1 ${notification.type === 'match'
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-blue-800 dark:text-blue-200'
                  }`}>
                  {notification.title}
                </h4>
                <p className={`text-sm ${notification.type === 'match'
                    ? 'text-green-700 dark:text-green-300'
                    : 'text-blue-700 dark:text-blue-300'
                  }`}>
                  {notification.message}
                </p>
                {notification.matches && notification.matches.length > 0 && (
                  <div className="mt-2 text-xs">
                    <p className="font-semibold">Matching items:</p>
                    <ul className="list-disc list-inside mt-1">
                      {notification.matches.map(match => (
                        <li key={match.id}>{match.title}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Story #1: Login/Register Modal */}
      {showAuthModal && !isLoggedIn && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl max-w-md w-full p-4 sm:p-6 md:p-8 shadow-2xl my-4 sm:my-8 max-h-[95vh] overflow-y-auto`}>
            <div className="text-center mb-6">
              <h2 className={`text-3xl font-extrabold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                FAST Lost & Found
              </h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {isRegistering ? 'Create your university account' : 'Sign in to access the system'}
              </p>
            </div>
            {authError && (
              <div className="mb-4 p-3 bg-red-500 text-white rounded-lg text-sm font-medium">
                {authError}
              </div>
            )}
            <form onSubmit={handleAuth} className="space-y-4">

              {isRegistering && (
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                  <div className="relative">
                    <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={authForm.name}
                      onChange={(e) => handleAuthFormChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                      required={isRegistering}
                    />
                  </div>
                </div>
              )}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>FAST University Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={authForm.email}
                    onChange={(e) => handleAuthFormChange('email', e.target.value)}
                    placeholder="yourname@isb.nu.edu.pk"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                    required
                  />
                </div>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Must use your FAST Islamabad email
                </p>
              </div>
              {isRegistering && (
                <>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>School</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <select
                          value={authForm.school}
                          onChange={(e) => handleSchoolChange(e.target.value)}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                          required={isRegistering}
                        >
                          <option value="">Select School</option>
                          {Object.keys(departmentStructure).map(school => (
                            <option key={school} value={school}>{school}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Department</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <select
                          value={authForm.department}
                          onChange={(e) => handleAuthFormChange('department', e.target.value)}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                          required={isRegistering}
                          disabled={!authForm.school}
                        >
                          <option value="">Select Department</option>
                          {authForm.school && departmentStructure[authForm.school].map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone Number (Optional)</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        value={authForm.phone}
                        onChange={(e) => handleAuthFormChange('phone', e.target.value)}
                        placeholder="+92 300 1234567"
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                      />
                    </div>
                  </div>
                </>
              )}
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />

                  <input

                    type="password"

                    value={authForm.password}

                    onChange={(e) => handleAuthFormChange('password', e.target.value)}

                    placeholder="Enter your password"

                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}

                    required

                  />

                </div>

                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>

                  Minimum 6 characters

                </p>

              </div>

              <button

                type="submit"

                className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-bold shadow-lg"

              >

                {isRegistering ? 'Create Account' : 'Sign In'}

              </button>

            </form>

            <div className="mt-6 text-center">

              <button

                onClick={() => {

                  setIsRegistering(!isRegistering);

                  setAuthError("");

                  setAuthForm({ ...authForm, name: "", school: "", department: "", phone: "" }); // Clear optional fields on toggle

                }}

                className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-medium transition`}

              >

                {isRegistering

                  ? 'Already have an account? Sign in'

                  : "Don't have an account? Register"}

              </button>

            </div>

          </div>

        </div>

      )}

      {/* Header */}

      <header className={`${darkMode ? 'bg-gray-800 shadow-gray-900/20' : 'bg-white shadow-gray-200/50'} sticky top-0 z-40 shadow-lg backdrop-blur-md bg-opacity-90 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.location.reload()}>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-600' : 'bg-blue-600'} group-hover:scale-110 transition-transform duration-300`}>
              <Search className="text-white" size={24} />
            </div>
            <h1 className={`text-2xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              FAST <span className="text-blue-600">Lost&Found</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn && (
              <>
                {profile.role === 'admin' && (
                  <button
                    onClick={() => setShowAdminDashboard(true)}
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Shield size={18} />
                    Admin
                  </button>
                )}
                <button
                  onClick={() => setShowCreatePostModal(true)}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <PlusCircle size={20} />
                  Report Item
                </button>

                {/* Story #10: Dark/Light Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-700'} hover:opacity-80 transition`}
                  title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* User Actions */}
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-700'} hover:opacity-80 transition`}
                  title="Profile"
                >
                  <User size={20} />
                </button>

                <button
                  onClick={handleLogout}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-red-400' : 'bg-gray-100 text-red-600'} hover:opacity-80 transition`}
                  title="Logout"

                >

                  <LogOut size={20} />

                </button>

              </>

            )}

          </div>

        </div>

      </header>

      {/* Story #20: Announcements Banner */}
      {isLoggedIn && announcements.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {announcements.filter(a => !a.archived).slice(0, 3).map(announcement => (
            <div
              key={announcement.id}
              className={`mb-2 p-4 rounded-lg border-l-4 ${announcement.type === 'warning'
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                  : announcement.type === 'reminder'
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-500'
                }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className={`font-bold mb-1 ${announcement.type === 'warning'
                      ? 'text-yellow-800 dark:text-yellow-200'
                      : announcement.type === 'reminder'
                        ? 'text-blue-800 dark:text-blue-200'
                        : 'text-gray-800 dark:text-gray-200'
                    }`}>
                    {announcement.title}
                  </h4>
                  <p className={`text-sm ${announcement.type === 'warning'
                      ? 'text-yellow-700 dark:text-yellow-300'
                      : announcement.type === 'reminder'
                        ? 'text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                    {announcement.message}
                  </p>
                </div>
                {profile?.role === 'admin' && (
                  <button
                    onClick={() => handleDeleteAnnouncement(announcement.id)}
                    className="ml-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                    title="Delete Announcement"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Story #2: Profile Modal */}

      {showProfile && (

        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">

          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl max-w-md w-full p-6 shadow-2xl`}>

            <div className="flex justify-between items-center mb-6">

              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>

                User Profile

              </h2>

              <button onClick={() => setShowProfile(false)} className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>

                <X size={24} />

              </button>

            </div>

            {/* Story #9: Profile Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-300 dark:border-gray-700">
              <button
                onClick={() => setProfileTab('profile')}
                className={`px-4 py-2 font-semibold transition ${profileTab === 'profile'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                Profile
              </button>
              <button
                onClick={() => setProfileTab('history')}
                className={`px-4 py-2 font-semibold transition ${profileTab === 'history'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                History
              </button>
            </div>

            {profileTab === 'profile' ? (
              <div className="space-y-4">

                {/* Profile fields */}

                {['name', 'email', 'school', 'department', 'phone'].map(field => (

                  <div key={field}>

                    <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                      {field.charAt(0).toUpperCase() + field.slice(1)}

                    </label>

                    <input

                      type={field === 'email' ? 'email' : (field === 'phone' ? 'tel' : 'text')}

                      value={profile[field] || ''}

                      onChange={(e) => handleProfileUpdate(field, e.target.value)}

                      disabled={field === 'email' || field === 'school' || field === 'department'}

                      className={`w-full px-4 py-3 rounded-lg border ${(field === 'email' || field === 'school' || field === 'department')

                        ? (darkMode ? 'bg-gray-700 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-500')

                        : (darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900')

                        } focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text transition`}

                    />

                    {field === 'email' && <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Email is immutable.</p>}

                  </div>

                ))}



                <button

                  onClick={() => setShowProfile(false)}

                  className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-bold"

                >

                  Close / Save Changes

                </button>

              </div>
            ) : (
              /* Story #9: Lost/Found History Tab */
              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  My Lost & Found History
                </h3>

                {items.filter(item => item.ownerEmail === profile?.email).length === 0 ? (
                  <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <p className="text-lg mb-2">No items reported yet</p>
                    <p className="text-sm">Start by reporting a lost or found item!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items
                      .filter(item => item.ownerEmail === profile?.email)
                      .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
                      .map(item => (
                        <div
                          key={item.id}
                          className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} cursor-pointer hover:shadow-md transition`}
                          onClick={() => {
                            handleItemClick(item);
                            setShowProfile(false);
                          }}
                        >
                          <div className="flex gap-4">
                            <img
                              src={item.image || PLACEHOLDER_IMAGE}
                              alt={item.title}
                              className="w-20 h-20 object-cover rounded-lg"
                              onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMAGE; }}
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                  {item.title}
                                </h4>
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${item.status === 'lost'
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                    : item.status === 'found'
                                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                  }`}>
                                  {item.status?.toUpperCase() || 'UNKNOWN'}
                                </span>
                              </div>
                              <p className={`text-sm mb-2 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                {item.description}
                              </p>
                              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1">
                                  <Tag size={12} /> {item.category}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin size={12} /> {item.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} /> {item.date ? new Date(item.date).toLocaleDateString() : 'N/A'}
                                </span>
                              </div>
                              {item.approvalStatus === 'pending' && (
                                <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs rounded">
                                  Pending Approval
                                </span>
                              )}
                              {item.status === 'returned' && (
                                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded">
                                  ✓ Resolved
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      )}
      {/* Create Post Modal */}
      {showCreatePostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {showPreview ? "Preview Report" : "Report an Item"}
              </h2>
              <button
                onClick={() => { setShowCreatePostModal(false); setShowPreview(false); }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {showPreview ? (
                // Preview Mode
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-4 bg-gray-200 dark:bg-gray-600">
                      <img
                        src={newPost.images.length > 0 ? newPost.images[0].url : PLACEHOLDER_IMAGE}
                        alt={newPost.title}
                        className="w-full h-full object-cover"
                      />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium capitalize
                        ${newPost.status === 'lost' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {newPost.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{newPost.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{newPost.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Tag className="w-4 h-4 mr-2" />
                        {newPost.category}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {newPost.location}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date().toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowPreview(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Back to Edit
                    </button>
                    <button
                      onClick={handleCreatePost}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Confirm & Post
                    </button>
                  </div>
                </div>
              ) : (
                // Edit Mode
                <div className="space-y-6">
                  {/* Report Type Toggle */}
                  <div className="flex gap-4 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <button
                      onClick={() => setNewPost({ ...newPost, status: 'lost' })}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${newPost.status === 'lost'
                        ? 'bg-white dark:bg-gray-600 text-red-600 shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                        }`}
                    >
                      Lost Item
                    </button>
                    <button
                      onClick={() => setNewPost({ ...newPost, status: 'found' })}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${newPost.status === 'found'
                        ? 'bg-white dark:bg-gray-600 text-green-600 shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                        }`}
                    >
                      Found Item
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Blue Samsonite Backpack"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description
                    </label>
                    <textarea
                      value={newPost.description}
                      onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                      placeholder="Provide details like color, brand, distinguishing marks..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Category
                      </label>
                      <select
                        value={newPost.category}
                        onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {categories.filter(c => c !== "All").map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Location
                      </label>
                      <select
                        value={newPost.location}
                        onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {locations.filter(l => l !== "All").map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Photos
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Click to upload photos
                        </span>
                      </label>
                    </div>

                    {/* Image Previews */}
                    {newPost.images.length > 0 && (
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        {newPost.images.map((img) => (
                          <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden group">
                            <img src={img.url} alt="Preview" className="w-full h-full object-cover" />
                            <button
                              onClick={() => removeImageFromPost(img.id)}
                              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (!newPost.title.trim() || !newPost.description.trim()) {
                        showToast('Please fill in title and description', 'error');
                        return;
                      }
                      setShowPreview(true);
                    }}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Preview Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Story #15: Edit Item Modal */}
      {showEditModal && editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Edit Item
              </h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingItem(null);
                  setNewPost({
                    title: "",
                    description: "",
                    category: "Electronics",
                    location: "Library",
                    status: "lost",
                    images: []
                  });
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-6">
                {/* Report Type Toggle */}
                <div className="flex gap-4 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <button
                    onClick={() => setNewPost({ ...newPost, status: 'lost' })}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${newPost.status === 'lost'
                      ? 'bg-white dark:bg-gray-600 text-red-600 shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                      }`}
                  >
                    Lost Item
                  </button>
                  <button
                    onClick={() => setNewPost({ ...newPost, status: 'found' })}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${newPost.status === 'found'
                      ? 'bg-white dark:bg-gray-600 text-green-600 shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
                      }`}
                  >
                    Found Item
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Blue Samsonite Backpack"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={newPost.description}
                    onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                    placeholder="Provide details like color, brand, distinguishing marks..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Category
                    </label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.filter(c => c !== "All").map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <select
                      value={newPost.location}
                      onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {locations.filter(l => l !== "All").map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Photos (Add more or remove existing)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="edit-image-upload"
                    />
                    <label htmlFor="edit-image-upload" className="cursor-pointer flex flex-col items-center">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Click to add more photos
                      </span>
                    </label>
                  </div>

                  {/* Image Previews */}
                  {newPost.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {newPost.images.map((img) => (
                        <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden group">
                          <img src={img.url} alt="Preview" className="w-full h-full object-cover" />
                          <button
                            onClick={() => removeImageFromPost(img.id)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {editingItem.approvalStatus === 'approved' && (
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      ⚠️ Note: Editing this item will require admin re-approval.
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingItem(null);
                      setNewPost({
                        title: "",
                        description: "",
                        category: "Electronics",
                        location: "Library",
                        status: "lost",
                        images: []
                      });
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateItem}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Dashboard Modal */}
      {showAdminDashboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h2>
              <button
                onClick={() => setShowAdminDashboard(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Story #19: Statistics Dashboard */}
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* Total Items */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">Total Items</p>
                  <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{items.length}</p>
                </div>

                {/* Lost Items */}
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-sm text-red-600 dark:text-red-400 mb-1">Lost Items</p>
                  <p className="text-2xl font-bold text-red-900 dark:text-red-100">
                    {items.filter(item => item.status === 'lost').length}
                  </p>
                </div>

                {/* Found Items */}
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-600 dark:text-green-400 mb-1">Found Items</p>
                  <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                    {items.filter(item => item.status === 'found').length}
                  </p>
                </div>

                {/* Recovery Rate */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-1">Recovery Rate</p>
                  <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                    {items.length > 0
                      ? Math.round((items.filter(item => item.status === 'returned' || item.claimed).length / items.length) * 100)
                      : 0}%
                  </p>
                </div>
              </div>

              {/* Story #17: Category Reports */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white">Category Reports</h4>
                  <button
                    onClick={() => {
                      // Generate and download category report
                      const categoryStats = items.reduce((acc, item) => {
                        const cat = item.category || 'Unknown';
                        if (!acc[cat]) {
                          acc[cat] = { total: 0, lost: 0, found: 0, returned: 0 };
                        }
                        acc[cat].total++;
                        if (item.status === 'lost') acc[cat].lost++;
                        if (item.status === 'found') acc[cat].found++;
                        if (item.status === 'returned' || item.claimed) acc[cat].returned++;
                        return acc;
                      }, {});

                      // Create CSV content
                      const csvHeader = 'Category,Total Items,Lost Items,Found Items,Returned Items,Recovery Rate\n';
                      const csvRows = Object.entries(categoryStats)
                        .sort((a, b) => b[1].total - a[1].total)
                        .map(([category, stats]) => {
                          const recoveryRate = stats.total > 0
                            ? ((stats.returned / stats.total) * 100).toFixed(1)
                            : '0.0';
                          return `${category},${stats.total},${stats.lost},${stats.found},${stats.returned},${recoveryRate}%`;
                        })
                        .join('\n');

                      const csvContent = csvHeader + csvRows;
                      const blob = new Blob([csvContent], { type: 'text/csv' });
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `category-report-${new Date().toISOString().split('T')[0]}.csv`;
                      a.click();
                      window.URL.revokeObjectURL(url);
                      showToast('Category report downloaded', 'success');
                    }}
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                  >
                    Download Report
                  </button>
                </div>

                {/* Most Common Categories Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  {Object.entries(
                    items.reduce((acc, item) => {
                      const cat = item.category || 'Unknown';
                      acc[cat] = (acc[cat] || 0) + 1;
                      return acc;
                    }, {})
                  )
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 4)
                    .map(([category, count]) => (
                      <div key={category} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{category}</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">{count}</p>
                      </div>
                    ))}
                </div>

                {/* Detailed Category Breakdown */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-64 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300 dark:border-gray-600">
                        <th className="text-left py-2 px-2 text-gray-700 dark:text-gray-300">Category</th>
                        <th className="text-right py-2 px-2 text-gray-700 dark:text-gray-300">Total</th>
                        <th className="text-right py-2 px-2 text-gray-700 dark:text-gray-300">Lost</th>
                        <th className="text-right py-2 px-2 text-gray-700 dark:text-gray-300">Found</th>
                        <th className="text-right py-2 px-2 text-gray-700 dark:text-gray-300">Returned</th>
                        <th className="text-right py-2 px-2 text-gray-700 dark:text-gray-300">Recovery %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(
                        items.reduce((acc, item) => {
                          const cat = item.category || 'Unknown';
                          if (!acc[cat]) {
                            acc[cat] = { total: 0, lost: 0, found: 0, returned: 0 };
                          }
                          acc[cat].total++;
                          if (item.status === 'lost') acc[cat].lost++;
                          if (item.status === 'found') acc[cat].found++;
                          if (item.status === 'returned' || item.claimed) acc[cat].returned++;
                          return acc;
                        }, {})
                      )
                        .sort((a, b) => b[1].total - a[1].total)
                        .map(([category, stats]) => {
                          const recoveryRate = stats.total > 0
                            ? ((stats.returned / stats.total) * 100).toFixed(1)
                            : '0.0';
                          return (
                            <tr key={category} className="border-b border-gray-200 dark:border-gray-600">
                              <td className="py-2 px-2 font-medium text-gray-900 dark:text-white">{category}</td>
                              <td className="py-2 px-2 text-right text-gray-700 dark:text-gray-300">{stats.total}</td>
                              <td className="py-2 px-2 text-right text-red-600 dark:text-red-400">{stats.lost}</td>
                              <td className="py-2 px-2 text-right text-green-600 dark:text-green-400">{stats.found}</td>
                              <td className="py-2 px-2 text-right text-blue-600 dark:text-blue-400">{stats.returned}</td>
                              <td className="py-2 px-2 text-right font-semibold text-gray-900 dark:text-white">{recoveryRate}%</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Items This Month */}
              <div className="mb-8">
                <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-white">Items This Month</h4>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {items.filter(item => {
                      if (!item.date) return false;
                      const itemDate = new Date(item.date);
                      const now = new Date();
                      return itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
                    }).length}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Items reported in {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Pending Approvals</h3>
              <div className="space-y-4 mb-8">
                {items.filter(item => item.approvalStatus === 'pending').length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">No pending items.</p>
                ) : (
                  items.filter(item => item.approvalStatus === 'pending').map(item => (
                    <div key={item.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex gap-4 items-center">
                      <img src={item.image || PLACEHOLDER_IMAGE} alt={item.title} className="w-16 h-16 rounded object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                        <p className="text-xs text-gray-400">By: {item.ownerName} ({item.ownerEmail})</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={async () => {
                            try {
                              await updateDoc(doc(db, "items", item.id), { approvalStatus: 'approved' });
                              // Story #23: Log activity
                              await logActivity('approve', 'item', item.id, { title: item.title });
                              setItems(items.map(i => i.id === item.id ? { ...i, approvalStatus: 'approved' } : i));
                              showToast('Item approved', 'success');
                            } catch (error) {
                              console.error("Error approving item:", error);
                              showToast(`Failed to approve: ${error.message}`, 'error');
                            }
                          }}
                          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={async () => {
                            try {
                              await updateDoc(doc(db, "items", item.id), { approvalStatus: 'rejected' });
                              // Story #23: Log activity
                              await logActivity('reject', 'item', item.id, { title: item.title });
                              setItems(items.map(i => i.id === item.id ? { ...i, approvalStatus: 'rejected' } : i));
                              showToast('Item rejected', 'info');
                            } catch (error) {
                              console.error("Error rejecting item:", error);
                              showToast(`Failed to reject: ${error.message}`, 'error');
                            }
                          }}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Story #22: Archive Old Cases */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-md font-semibold text-gray-900 dark:text-white">Archive Management</h4>
                  <button
                    onClick={async () => {
                      const ninetyDaysAgo = new Date();
                      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

                      const oldItems = items.filter(item => {
                        if (!item.date) return false;
                        const itemDate = new Date(item.date);
                        return itemDate < ninetyDaysAgo && !item.archived;
                      });

                      if (oldItems.length === 0) {
                        showToast('No items to archive (older than 90 days)', 'info');
                        return;
                      }

                      if (!window.confirm(`Archive ${oldItems.length} item(s) older than 90 days?`)) return;

                      try {
                        const archivePromises = oldItems.map(item =>
                          updateDoc(doc(db, "items", item.id), {
                            archived: true,
                            archivedAt: new Date()
                          })
                        );
                        await Promise.all(archivePromises);
                        showToast(`${oldItems.length} item(s) archived successfully`, 'success');
                      } catch (error) {
                        console.error("Error archiving items:", error);
                        showToast('Failed to archive items', 'error');
                      }
                    }}
                    className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition"
                  >
                    Archive Old Items (90+ days)
                  </button>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Items older than 90 days: <span className="font-bold text-gray-900 dark:text-white">
                      {items.filter(item => {
                        if (!item.date || item.archived) return false;
                        const itemDate = new Date(item.date);
                        const ninetyDaysAgo = new Date();
                        ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
                        return itemDate < ninetyDaysAgo;
                      }).length}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Archived items: {items.filter(item => item.archived).length}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">User Management</h3>
              <div className="space-y-4">
                {users.map(user => {
                  const userItems = items.filter(item => item.ownerEmail === user.email);
                  return (
                    <div key={user.email} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">{user.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                          <span className={`text-xs px-2 py-0.5 rounded ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-200 text-gray-800'}`}>
                            {user.role || 'user'}
                          </span>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {userItems.length} item{userItems.length !== 1 ? 's' : ''} reported
                          </p>
                        </div>
                        <div className="flex gap-2">
                          {/* Story #21: Download User History Report */}
                          <button
                            onClick={() => {
                              if (userItems.length === 0) {
                                showToast('No items to download for this user', 'info');
                                return;
                              }

                              // Generate CSV report
                              const csvHeader = 'Title,Description,Category,Location,Status,Date Reported,Approval Status\n';
                              const csvRows = userItems
                                .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0))
                                .map(item => {
                                  return `"${(item.title || '').replace(/"/g, '""')}","${(item.description || '').replace(/"/g, '""')}","${item.category || ''}","${item.location || ''}","${item.status || ''}","${item.date || ''}","${item.approvalStatus || 'approved'}"`;
                                })
                                .join('\n');

                              const csvContent = csvHeader + csvRows;
                              const blob = new Blob([csvContent], { type: 'text/csv' });
                              const url = window.URL.createObjectURL(blob);
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = `user-history-${user.email.replace('@', '-at-')}-${new Date().toISOString().split('T')[0]}.csv`;
                              a.click();
                              window.URL.revokeObjectURL(url);
                              showToast(`History report downloaded for ${user.name}`, 'success');
                            }}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                            title="Download User History"
                          >
                            📥 Download
                          </button>
                          {user.role !== 'admin' && (
                            <button
                              onClick={async () => {
                                if (user.id === auth.currentUser.uid) {
                                  showToast("Cannot suspend your own admin account.", "error");
                                  return;
                                }
                                const action = user.isSuspended ? 'Unsuspend' : 'Suspend';
                                if (!window.confirm(`Are you sure you want to ${action} this user?`)) return;

                                try {
                                  await updateDoc(doc(db, "users", user.id), { isSuspended: !user.isSuspended });
                                  // Story #23: Log activity
                                  await logActivity(user.isSuspended ? 'unsuspend' : 'suspend', 'user', user.id, {
                                    userEmail: user.email,
                                    userName: user.name
                                  });
                                  showToast(`User ${action.toLowerCase()}ed successfully!`, 'success');
                                } catch (error) {
                                  console.error(`Error ${action.toLowerCase()}ing user:`, error);
                                  showToast(`Failed to ${action.toLowerCase()} user.`, 'error');
                                }
                              }}
                              className={`px-3 py-1 border rounded hover:opacity-80 transition ${user.isSuspended ? 'border-green-300 text-green-600 hover:bg-green-50' : 'border-red-300 text-red-600 hover:bg-red-50'}`}
                            >
                              {user.isSuspended ? 'Unsuspend' : 'Suspend'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Story #23: Audit Logs */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Audit Logs</h3>
                  <button
                    onClick={() => setShowAuditLogs(!showAuditLogs)}
                    className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition"
                  >
                    {showAuditLogs ? 'Hide' : 'View'} Audit Logs
                  </button>
                </div>
                {showAuditLogs && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-96 overflow-y-auto">
                    {auditLogs.length === 0 ? (
                      <p className="text-gray-500 dark:text-gray-400">No audit logs yet.</p>
                    ) : (
                      <div className="space-y-2">
                        {auditLogs.slice(0, 50).map(log => (
                          <div key={log.id} className="text-xs border-b border-gray-200 dark:border-gray-600 pb-2">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <span className="font-semibold text-gray-900 dark:text-white">{log.action.toUpperCase()}</span>
                                {' '}
                                <span className="text-gray-600 dark:text-gray-400">{log.resourceType}</span>
                                {' '}
                                <span className="text-gray-500 dark:text-gray-500">by {log.userName || log.userEmail}</span>
                              </div>
                              <span className="text-gray-500 dark:text-gray-500 ml-2">
                                {log.timestamp?.toDate?.()?.toLocaleString() || 'N/A'}
                              </span>
                            </div>
                            {log.details && Object.keys(log.details).length > 0 && (
                              <div className="text-gray-500 dark:text-gray-400 mt-1 pl-4">
                                {JSON.stringify(log.details)}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Story #23: Audit Logs */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Audit Logs</h3>
                  <button
                    onClick={() => setShowAuditLogs(!showAuditLogs)}
                    className="px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition"
                  >
                    {showAuditLogs ? 'Hide' : 'View'} Audit Logs
                  </button>
                </div>
                {showAuditLogs && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 max-h-96 overflow-y-auto mb-6">
                    {auditLogs.length === 0 ? (
                      <p className="text-gray-500 dark:text-gray-400">No audit logs yet.</p>
                    ) : (
                      <div className="space-y-2">
                        {auditLogs.slice(0, 50).map(log => (
                          <div key={log.id} className="text-xs border-b border-gray-200 dark:border-gray-600 pb-2">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <span className="font-semibold text-gray-900 dark:text-white">{log.action.toUpperCase()}</span>
                                {' '}
                                <span className="text-gray-600 dark:text-gray-400">{log.resourceType}</span>
                                {' '}
                                <span className="text-gray-500 dark:text-gray-500">by {log.userName || log.userEmail}</span>
                              </div>
                              <span className="text-gray-500 dark:text-gray-500 ml-2">
                                {log.timestamp?.toDate?.()?.toLocaleString() || 'N/A'}
                              </span>
                            </div>
                            {log.details && Object.keys(log.details).length > 0 && (
                              <div className="text-gray-500 dark:text-gray-400 mt-1 pl-4">
                                {JSON.stringify(log.details)}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Story #20: Announcement Management */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Announcements</h3>
                  <button
                    onClick={() => {
                      setEditingAnnouncement(null);
                      setAnnouncementForm({ title: "", message: "", type: "info" });
                      setShowAnnouncementModal(true);
                    }}
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                  >
                    + New Announcement
                  </button>
                </div>
                <div className="space-y-3">
                  {announcements.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400">No announcements yet.</p>
                  ) : (
                    announcements.map(announcement => (
                      <div key={announcement.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-gray-900 dark:text-white">{announcement.title}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded ${announcement.type === 'warning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                announcement.type === 'reminder' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                  'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                              }`}>
                              {announcement.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{announcement.message}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            Created: {announcement.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => {
                              setEditingAnnouncement(announcement);
                              setAnnouncementForm({
                                title: announcement.title,
                                message: announcement.message,
                                type: announcement.type
                              });
                              setShowAnnouncementModal(true);
                            }}
                            className="px-2 py-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteAnnouncement(announcement.id)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story #20: Announcement Create/Edit Modal */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {editingAnnouncement ? 'Edit Announcement' : 'Create Announcement'}
              </h2>
              <button
                onClick={() => {
                  setShowAnnouncementModal(false);
                  setEditingAnnouncement(null);
                  setAnnouncementForm({ title: "", message: "", type: "info" });
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={announcementForm.title}
                  onChange={(e) => setAnnouncementForm({ ...announcementForm, title: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Unclaimed items policy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  value={announcementForm.message}
                  onChange={(e) => setAnnouncementForm({ ...announcementForm, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                  placeholder="Enter announcement message..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Type
                </label>
                <select
                  value={announcementForm.type}
                  onChange={(e) => setAnnouncementForm({ ...announcementForm, type: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                  <option value="reminder">Reminder</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => {
                    setShowAnnouncementModal(false);
                    setEditingAnnouncement(null);
                    setAnnouncementForm({ title: "", message: "", type: "info" });
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveAnnouncement}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {editingAnnouncement ? 'Update' : 'Create'} Announcement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}

      {isLoggedIn && (

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">



          {/* Tabs - Centered and Responsive */}

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">

            {['all', 'lost', 'found'].map(tab => (

              <button

                key={tab}

                onClick={() => setActiveTab(tab)}

                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition duration-200 ${activeTab === tab

                  ? 'bg-blue-600 text-white shadow-md'

                  : darkMode

                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'

                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'

                  }`}

              >

                {tab.charAt(0).toUpperCase() + tab.slice(1)} Items

              </button>

            ))}

          </div>

          <div className='flex flex-col lg:flex-row gap-6 mb-8'>



            {/* Left Column: Search & Filters (Always visible, responsive layout) */}

            <div className='w-full lg:w-1/4'>

              <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-3 sm:p-4 shadow-lg sticky top-16 sm:top-20`}>

                <h3 className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Filters & Search</h3>

                {/* Search Bar */}

                <div className="relative mb-4">

                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} size={20} />

                  <input

                    type="text"

                    placeholder="Search titles or descriptions..."

                    value={searchQuery}

                    onChange={(e) => setSearchQuery(e.target.value)}

                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-blue-500`}

                  />

                </div>

                {/* Story #6: Category Filter */}

                <div className="mb-4">

                  <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                    <Tag size={16} /> Category

                  </label>

                  <select

                    value={selectedCategory}

                    onChange={(e) => setSelectedCategory(e.target.value)}

                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}

                  >

                    {categories.map(cat => (

                      <option key={cat} value={cat}>{cat}</option>

                    ))}

                  </select>

                </div>

                {/* Story #7: Location Filter */}

                <div className="mb-4">

                  <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                    <MapPin size={16} /> Location

                  </label>

                  <select

                    value={selectedLocation}

                    onChange={(e) => setSelectedLocation(e.target.value)}

                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}

                  >

                    {locations.map(loc => (

                      <option key={loc} value={loc}>{loc}</option>

                    ))}

                  </select>

                </div>

                {/* Sort Functionality */}

                <div className="mb-4">

                  <label className={`flex items-center gap-2 text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>

                    <ArrowUpDown size={16} /> Sort By

                  </label>

                  <select

                    value={sortBy}

                    onChange={(e) => setSortBy(e.target.value)}

                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}

                  >

                    <option value="newest">Newest First</option>

                    <option value="oldest">Oldest First</option>

                    <option value="title">Title (A-Z)</option>

                    <option value="category">Category</option>

                  </select>

                </div>

                {/* My Posts Toggle */}

                <div className="mb-6">

                  <button

                    onClick={() => setShowMyPosts(!showMyPosts)}

                    className={`w-full px-4 py-3 rounded-xl transition flex items-center justify-center gap-2 font-semibold shadow-md ${showMyPosts

                      ? 'bg-blue-600 text-white hover:bg-blue-700'

                      : darkMode

                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'

                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'

                      }`}

                  >

                    <User size={18} />

                    {showMyPosts ? 'Show All Posts' : 'Show My Posts Only'}

                  </button>

                </div>



                {/* Story #13: Upload Button in Filter Sidebar */}

                <button

                  onClick={() => setShowCreatePostModal(true)}

                  className="w-full px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 font-bold shadow-md"

                >

                  <Upload size={20} />

                  New Lost/Found Post

                </button>

              </div>

            </div>

            {/* Right Column: Items Grid (Responsive Grid) */}

            <div className='w-full lg:w-3/4'>

              <div className="flex justify-between items-center mb-3 sm:mb-4">

                <h2 className={`text-lg sm:text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} break-words`}>

                  {showMyPosts ? 'My Posts' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1) + ' Items'} ({filteredItems.length})

                </h2>

              </div>



              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                {filteredItems.map(item => (

                  <ItemCard key={item.id} item={item} />

                ))}

              </div>

              {filteredItems.length === 0 && (

                <div className={`text-center py-12 ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-white border-gray-200 text-gray-500'} border rounded-xl shadow-lg`}>

                  <p className="text-xl font-semibold mb-2">Nothing found here!</p>

                  <p>Try adjusting your search query or filters.</p>

                </div>

              )}

            </div>

          </div>

        </main>

      )}

      {/* Toast Notifications - Responsive */}
      <div className="fixed bottom-4 right-2 sm:right-4 left-2 sm:left-auto z-50 flex flex-col gap-2 max-w-[calc(100vw-1rem)] sm:max-w-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 w-full sm:min-w-[300px] animate-slide-in text-sm sm:text-base ${toast.type === 'success'
              ? 'bg-green-500 text-white'
              : toast.type === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-blue-500 text-white'
              }`}
          >
            <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-medium truncate">{toast.message}</span>
          </div>
        ))}
      </div>

      {/* Item Details Modal - Fully Responsive */}
      {showItemDetails && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl`}>
            <div className="sticky top-0 bg-inherit border-b border-gray-300 dark:border-gray-700 p-4 sm:p-6 flex justify-between items-center">
              <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Item Details
              </h2>
              <button
                onClick={() => setShowItemDetails(false)}
                className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} p-1`}
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              {/* Image Gallery */}
              <div className="mb-4 sm:mb-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-xl mb-3 sm:mb-4"
                  onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMAGE; }}
                />
                {selectedItem.images && selectedItem.images.length > 1 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {selectedItem.images.slice(1, 5).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedItem.title} ${idx + 2}`}
                        className="w-full h-16 sm:h-20 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Item Info */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} break-words`}>
                    {selectedItem.title}
                  </h3>
                  <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${selectedItem.status === 'lost'
                    ? 'bg-red-500 text-white'
                    : 'bg-green-500 text-white'
                    }`}>
                    {(selectedItem.status || 'unknown').toUpperCase()}
                  </span>
                </div>

                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedItem.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Tag size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Category</p>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{selectedItem.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className={darkMode ? 'text-yellow-400' : 'text-yellow-600'} />
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{selectedItem.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reported Date</p>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {selectedItem.date ? new Date(selectedItem.date).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                  </div>
                  {selectedItem.ownerName && (
                    <div className="flex items-center gap-2">
                      <User size={20} className={darkMode ? 'text-green-400' : 'text-green-600'} />
                      <div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Posted By</p>
                        <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{selectedItem.ownerName}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons - Responsive */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-700">
                  {selectedItem.ownerEmail === profile?.email ? (
                    <>
                      <button
                        onClick={() => handleEditItem(selectedItem)}
                        className="w-full sm:flex-1 bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                      >
                        <Edit size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Edit Item
                      </button>
                      <button
                        onClick={() => handleDeleteItem(selectedItem.id)}
                        className="w-full sm:flex-1 bg-red-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                      >
                        <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Delete Item
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleContactOwner(selectedItem)}
                      className="w-full sm:flex-1 bg-green-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                    >
                      <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Contact Owner
                    </button>
                  )}
                  {!selectedItem.claimed && (
                    <button
                      onClick={() => {
                        handleMarkClaimed(selectedItem.id);
                        setShowItemDetails(false);
                      }}
                      className="w-full sm:flex-1 bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
                    >
                      <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Mark as Claimed
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} mt-12`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2024 FAST Lost & Found System. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => setCurrentView('admin-login')}
              className={`text-xs ${darkMode ? 'text-gray-600 hover:text-purple-400' : 'text-gray-400 hover:text-purple-600'} transition`}
            >
              Admin Access
            </button>
          </div>
        </div>
      </footer>
    </div>

  );

}

