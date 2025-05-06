import {Routes, Route } from 'react-router-dom';
import Login from './LogIn';
import SignUp from './SignUp';
import Dashboard from './DashBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ForgotPassword from './ForgotPassword';

import { useUser } from './UserContext';
import { useEffect } from 'react';

export default function App() {
    const { user } = useUser();

    useEffect(() => {
      console.log("Current user from context:", user);
    }, [user]);

  //if the backend has an endpoint like /api/userData to return user data from a token
  /*const { setUser } = useUser();

useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://127.0.0.1:8000/api/userData', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setUser(res.data);
      })
    }
  }, []);
  */
    return (
        <>
        <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}