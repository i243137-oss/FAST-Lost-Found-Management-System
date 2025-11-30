# 🔍 FAST Lost & Found Management System

![Project Banner](https://placehold.co/1200x400/2563eb/ffffff?text=FAST+Lost+%26+Found&font=roboto)

> A modern, real-time platform bridging the gap between lost items and their owners at FAST University.

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react&style=for-the-badge)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.7-orange?logo=firebase&style=for-the-badge)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?logo=tailwindcss&style=for-the-badge)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?logo=vite&style=for-the-badge)](https://vitejs.dev/)

## 🚀 Overview

**FAST Lost & Found** is a community-driven application designed to streamline the process of reporting lost and found items within the campus. Built with performance and user experience in mind, it leverages the power of React and Firebase to provide instant updates and secure data management.

## ✨ Key Features

*   **🔐 Secure Authentication**: Robust user management using Firebase Auth.
*   **📱 Responsive Design**: Beautifully crafted UI that works seamlessly on desktop and mobile.
*   **⚡ Real-time Updates**: Instant feed updates using Firestore live listeners.
*   **📧 Smart Notifications**: Automated email alerts via Cloud Functions & Resend when potential matches are found.
*   **🖼️ Image Integration**: Easy image uploads for lost/found items using Cloudinary.
*   **🌙 Dark Mode**: Built-in dark mode for comfortable night-time usage.
*   **🔍 Advanced Search**: Powerful filtering by category, location, and date.
*   **🛡️ Admin Dashboard**: Comprehensive tools for administrators to manage users and content.

## 🛠️ Tech Stack

*   **Frontend**: React.js, Tailwind CSS, Lucide Icons
*   **Backend**: Firebase (Auth, Firestore, Cloud Functions)
*   **Storage**: Cloudinary (Images)
*   **Email Service**: Resend
*   **Build Tool**: Vite

## 📸 Screenshots

| Dashboard | Item Details |
|:---:|:---:|
| ![Dashboard](https://placehold.co/600x400/e2e8f0/475569?text=Dashboard+View) | ![Details](https://placehold.co/600x400/e2e8f0/475569?text=Item+Details) |

| Dark Mode | Mobile View |
|:---:|:---:|
| ![Dark Mode](https://placehold.co/600x400/1e293b/cbd5e1?text=Dark+Mode) | ![Mobile](https://placehold.co/600x400/e2e8f0/475569?text=Mobile+Responsive) |

## 🚀 Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/o0on/FAST-Lost-Found-Management-System.git
    cd FAST-Lost-Found-Management-System
    ```

2.  **Install dependencies**
    ```bash
    npm install
    cd functions && npm install && cd ..
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory (optional if using hardcoded config for dev):
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    # ... other firebase config
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 🧪 Testing

We use **Postman** for API testing. A collection is included in the project artifacts.

1.  Start Firebase Emulators: `firebase emulators:start --only functions`
2.  Import the Postman Collection.
3.  Test the `sendMatchEmail` function locally.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by FAST University Students
</p>
