# 🚀 Content Management System (CMS)

A full-stack **Content Management System (CMS)** built using the **MERN Stack** with a modern React frontend, secure Node.js backend, MongoDB database, JWT authentication, media management, rich text editing, and an admin dashboard.

This project provides an admin panel where authenticated users can manage website content, pages, settings, and uploaded media.

---

# 📌 Project Preview

## Admin Dashboard

Features:

- Secure Admin Login
- Dashboard Statistics
- Page Management
- Media Library
- Website Settings
- Rich Text Editor
- Search & Pagination
- Responsive UI


---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React.js | User Interface |
| Vite | Frontend Build Tool |
| React Router | Navigation |
| Material UI | UI Components |
| Axios | API Communication |
| React Toastify | Notifications |
| TipTap Editor | Rich Text Editing |


## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | REST API Framework |
| MongoDB | Database |
| Mongoose | Database Modeling |
| JWT | Authentication |
| Multer | File Upload |
| Helmet | Security Middleware |
| CORS | Cross-Origin Requests |


---

# ✨ Features

## 🔐 Authentication

- Admin login system
- JWT based authentication
- Protected API routes
- Secure token handling
- Automatic unauthorized handling


---

## 📊 Dashboard

Admin dashboard with:

- Total Pages Count
- Published Pages Count
- Draft Pages Count
- Media Count


---

## 📄 Page Management

Complete CMS page management:

### Create Page

Admin can create pages with:

- Title
- Slug
- Rich Text Content
- Meta Title
- Meta Description
- Status


### Update Page

- Edit existing pages
- Update content
- Change publishing status


### Delete Page

- Remove unwanted pages
- Confirmation before deletion


### Search & Pagination

Implemented:

- Server-side search
- Pagination
- Sorting support


---

## 🖼️ Media Library

Features:

- Upload images
- Store file information
- Image validation
- File size restriction
- Media listing


Supported formats:

```
JPEG
PNG
JPG
WEBP
```


---

## ⚙️ Website Settings

Admin can manage:

- Website Name
- Description
- Contact Email
- Phone Number
- Footer Text


---

# 🏗️ Project Structure

```
cms-assignment
│
├── backend
│   │
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   │
│   │   ├── controllers
│   │   │
│   │   ├── middleware
│   │   │
│   │   ├── models
│   │   │
│   │   ├── routes
│   │   │
│   │   ├── uploads
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
│
├── frontend
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Prerequisites

Install:

- Node.js
- MongoDB
- npm


Check versions:

```bash
node -v

npm -v
```

---

# 🔧 Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5000

MONGO_URI=mongodb://localhost:27017/cms

JWT_SECRET=your_secret_key
```

Start backend:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Default Admin Login

Example:

```
Email:
admin@example.com

Password:
your_password
```

---

# 🔌 API Endpoints

## Authentication

### Login

```
POST /api/auth/login
```

---

## Pages

### Create Page

```
POST /api/pages
```

### Get Pages

```
GET /api/pages
```

### Get Single Page

```
GET /api/pages/:id
```

### Update Page

```
PUT /api/pages/:id
```

### Delete Page

```
DELETE /api/pages/:id
```


---

## Media

### Upload Image

```
POST /api/media/upload
```


---

## Settings

### Get Settings

```
GET /api/settings
```


### Update Settings

```
PUT /api/settings
```


---

# 🔒 Security Features

Implemented:

✅ JWT Authentication  
✅ Protected Routes  
✅ Helmet Security Headers  
✅ CORS Configuration  
✅ File Upload Validation  
✅ Request Validation  


---

# 📱 Responsive Design

The application supports:

- Desktop screens
- Laptop screens
- Tablet layouts


---

# 🚀 Future Improvements

Planned enhancements:

- User roles and permissions
- Multiple admin users
- Drag & drop media upload
- Image optimization
- Activity logs
- Dark mode
- Cloud deployment


---

# 🎯 Learning Outcomes

This project demonstrates:

- Full-stack MERN development
- REST API creation
- Authentication implementation
- Database modeling
- File handling
- React component architecture
- State management
- Production-level project structure


---

# 👩‍💻 Author

**Padmavathi Kondeti**

Frontend Developer | React.js | MERN Stack


---

# ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to explore the code.
