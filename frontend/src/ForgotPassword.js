import { useState } from "react";

export default function ForgotPassword(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[rPassword,setRPassword]=useState('');

    
    return(
    <div className="mainDev">
    <div className="register">
        <form>
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
            { password.length<8 && <p className="error">Password must be more than 8 characters</p>}
            <label htmlFor="rPassword">Password Confirmation:</label>
            <input type="password" 
            placeholder="Repeat Password" 
            id="rPassword" 
            required
            value={rPassword}
            onChange={(e)=>setRPassword(e.target.value)}
            />
            { password!==rPassword && <p className="error">password does not matche</p> }
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button type="submit">Reset Password</button>
            </div>
    </form>
    </div>
    </div>)

}