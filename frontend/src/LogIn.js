import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { toast } from 'react-toastify';
import { useUser } from './UserContext';

export default function LogIn() {
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[accept,setAccept]=useState(false);

const [loading, setLoading] = useState(false);

const navigate = useNavigate();

const {setUser } = useUser();
async function submit(e) {
    setLoading(true);
e.preventDefault();
setAccept(true);
try {
    let res = await axios.post("http://127.0.0.1:8000/api/login ", {
    email: email,
    password: password,
    });
    if (res.status === 200) {
        const token=res.data.data.token;
        console.log(res.data.data.user);
        const userData = res.data.data.user;
        setUser(userData);
        window.localStorage.setItem('token',token);
        window.localStorage.setItem('userData',JSON.stringify(userData));
        console.log(token);
        navigate('/dashboard');
        toast.success("Login successful!");
    }
} catch (error) {
    console.log(error.response?.status);
    navigate('/register');
    toast.error("Login failed. Please check your credentials.");
}finally {
    setLoading(false); 
  }
}

    return(
    <div className="mainDev">
    <div className="register">
        <form onSubmit={submit}>
        <label htmlFor="email">Email:</label>
        <input type="email" 
        placeholder="Email" 
        id="email" 
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input type="password" 
        placeholder="Password" 
        id="password" 
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        {accept && password.length<8 && <p className="error">Password must be more than 8 characters</p>}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="submit" disabled={loading}>
        {loading ? <span className="spinner"></span> : "Log In"}
        </button>
        </div>
        <p>Don't have an account? <Link to="/register">SignUp</Link></p>
        </form>
        <p>Did you forget your password? <Link to="/forgotpassword">Rest Password</Link></p>
    </div>
    </div>
    ) 
}


