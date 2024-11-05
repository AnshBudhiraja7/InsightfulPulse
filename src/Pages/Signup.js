import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
const[obj,setobj]=useState({})
const d=new Date()
const date=`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`

function set(event){
  setobj({...obj,[event.target.name]:event.target.value,"Date":date})
}
function NameChange(event){
  const name = event.target.value.replace(/[^a-zA-Z\s]/g,'');
  setobj({...obj,"Name":name});
}
function EmailCheck(email){
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email)
}
function Submit(e){
  e.preventDefault()
  console.log(obj);
  
  
}
  return (
    <div className="login-wrap">
  <div className="login-bg">
    <a className="navbar-brand">
      <img className="logo-light" src="assets/img/logo-white.webp" alt="Image" />
      <img className="logo-dark" src="assets/img/logo-white.webp" alt="Image" />
    </a>
  </div>
  <div className="login-content">
    <Link to={'/'} className="link-one"><i className="ri-arrow-left-s-line" />Back</Link>
    <div className="login-form">
      <h3>Account SignUp</h3>
      <div className="alt-login">
        <a style={{width:"100%"}} href="https://www.gmail.com/"><img src="assets/img/icons/google.svg" alt="Image" />Login With
          Google</a>    
      </div>
      <div className="text-center">
        <span className="or-text">OR</span>
      </div>
      <form action="#">
        <div className="form-group">
          <input type="text" value={obj.Name?obj.Name:""} onChange={NameChange} placeholder="Full Name" />
        </div>
        <div className="form-group">
          <input name='Email' value={obj.Email?obj.Email:""} onChange={set} type="email" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <input type="password" name='Password' value={obj.Password?obj.Password:""} onChange={set} placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="password" name='ConfirmPassword' value={obj.ConfirmPassword?obj.ConfirmPassword:""} onChange={set} placeholder="Confirm Password" />
        </div>
        <button type="submit" onClick={Submit} className="btn-two w-100 d-block">Create Account</button>
        <p className="login-text">Already have an account?<a href="login.html">Login</a></p>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Signup
