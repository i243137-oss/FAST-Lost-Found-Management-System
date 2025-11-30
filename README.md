# FAST Lost & Found

A modern web application for managing lost and found items at FAST University Islamabad campus.

## Features

- 🔐 User Authentication (Login/Register with FAST email validation)
- 👤 User Profile Management
- 🔍 Search and Filter Items
- 📸 Photo Upload for Items
- 🌙 Dark/Light Mode Toggle
- ✅ Mark Items as Claimed
- 💾 Persistent Storage (localStorage)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Register/Login**: Use your FAST University email (@isb.nu.edu.pk) to create an account or login
2. **Create Posts**: Click "New Lost/Found Post" to report lost or found items
3. **Search & Filter**: Use the search bar and filters to find specific items
4. **Mark as Claimed**: Click "Mark as Claimed" when an item is resolved

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

