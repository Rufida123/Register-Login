# Register-Login System

This is a simple registration and login system built with **React** (frontend) and **Laravel** (backend). The application supports user registration, login, token storage, and basic validation.
**Note**: The backend code is not originally written by me. It was sourced from the internet.
---

## 🔧 Features

- User Registration and Login
- Form validation (email, password match, length)
- Persistent login using token and user data stored in localStorage
- Loading spinner to prevent multiple submissions
- Toast notifications for success and errors
- Dashboard to display user information
- Reset password page UI (without backend integration)

---

## 📸 Screenshots

### ✅ Registration Page  
User can register with a form and submit the data to the backend. On success, user is redirected to the login page.

![Registration Page](./screenshots/Screenshot%20(1).png)

---

### 🔐 Login Page  
User can log in with valid credentials. On success:
- A token is saved in `localStorage`
- User data is saved in `localStorage` (until a `/api/userData` endpoint is available then user data would be fetched from backend used without stroing it in `localStorage`)
- User is redirected to the dashboard

![Login Page](./screenshots/Screenshot%20(2).png)

---

### ✏️ Form Validation  
- Email must be valid
- Password must be at least 8 characters
- Password and Confirm Password must match

![Form Validation](./screenshots/Screenshot%20(10).png)

---

### ⏳ Loading Spinner  
Displays while the login/register request is in progress to avoid multiple clicks.

![Loading Spinner](./screenshots/Screenshot%20(3).png)

---

### 📊 Dashboard Page  
Displays a welcome toast and user data. Currently under development.

![Dashboard Page](./screenshots/Screenshot%20(4).png)

---

### ⚠️ Duplicate Email Alert  
If a user registers with an already-used email, an alert is shown.

![Duplicate Email Alert](./screenshots/Screenshot%20(5).png)

---

### ❌ Invalid Login Handling  
If login fails, a toast warning is displayed and the user is redirected to the registration page.

![Invalid Login Warning](./screenshots/Screenshot%20(7).png)

---

### 🔁 Persistent Login  
Even after a page reload, user data is shown in the console thanks to token and user info stored in `localStorage`.

![Persistent User Data](./screenshots/Screenshot%20(8).png)

---

### 🔐 Reset Password Page  
A UI for password reset is present, but backend functionality is not yet implemented.

![Reset Password](./screenshots/Screenshot%20(9).png)

---

## 📦 Tech Stack

- **Frontend**: React, React Router, Axios, React Toastify
- **Backend**: Laravel (API), Sanctum or Passport (recommended for auth)
