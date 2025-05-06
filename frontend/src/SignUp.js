import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[rPassword,setRPassword]=useState('');
  const[accept,setAccept]=useState(false);
  const[emailError,setEmailError]=useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  async function submit(e) {
    setLoading(true);
    e.preventDefault();
    setAccept(true);
    setEmailError(true);
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: rPassword,
      });
  
      if (res.status === 200) {
        const token=res.data.data.token;
        console.log('success');
        if (token) {
          navigate('/login');
      }
      } else if(res.status===422) {
        setEmailError(true);
      }
    } catch (error) {
      setEmailError(error.response.status);
    }finally {
      setLoading(false); 
    }
  }
  
  return(
    <div className="mainDev">
    <div className="register">
      <form onSubmit={submit}>
      <label htmlFor="name">Name:</label>
      <input type="text" 
      placeholder="Name" 
      id="name" 
      required
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      {accept&& name.length===0 && <p className="error">user name is required</p>}
      <label htmlFor="email">Email:</label>
      <input type="email" 
      placeholder="Email" 
      id="email" 
      required
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      {accept && emailError===422 &&<p className="error">emails has already been taken</p>}
      <label htmlFor="password">Password:</label>
      <input type="password" 
      placeholder="Password" 
      id="password" 
      required
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      {accept && password.length<8 && <p className="error">Password must be more than 8 characters</p>}
      <label htmlFor="rPassword">Password Confirmation:</label>
      <input type="password" 
      placeholder="Repeat Password" 
      id="rPassword" 
      required
      value={rPassword}
      onChange={(e)=>setRPassword(e.target.value)}
      />
      {accept && password!==rPassword && <p className="error">password does not matche</p> }
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <button type="submit" disabled={loading}>
        {loading ? <span className="spinner"></span> : "Register"}
        </button>
      </div>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
    </div>
  ) 
}


