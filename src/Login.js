import React, {useState} from 'react';
import './Login.css';


function Login() {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=e=>{
        e.preventDefault();
        //some fancy firebase login
    }
    const register=e=>{
        e.preventDefault();
        
    }

  return (
    <div className='login'>
        <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
       <div className='login_container'>
        <h1> Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn}
            className='login_signinbutton'>Sign in</button>
        </form>
        <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookie Notice and our Interest based ads.
        </p>
        <button onClick={register}
         className='login_registerbutton'>Sign up</button>
       </div>
    </div>
    
  )
}

export default Login