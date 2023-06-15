import React, { useState } from 'react'
import './SignUpForm.css'

export const SignUpForm = () => {
const [showUserForm , setShowUserForm]= useState(false);
const [showSupplierForm , setShowSupplierForm]= useState(false);

const handleUserClick =()=> {
    setShowUserForm(true);
    setShowSupplierForm(false);
}

const handleSupplierClick=()=> {
    setShowUserForm(false);
    setShowSupplierForm(true);
}

const handleFormSubmit =(event)=> {
    event.preventDefault();
    
}


  return (
    <div>
        
    <h1 className='FormHead'>Choose How you want to Sign Up</h1>
<div className="btn3">
<button className='btn1' onClick={handleUserClick} >User</button>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<button className='btn2' onClick={handleSupplierClick} >Service Provider</button>
</div>


{showUserForm && (
    <form onSubmit={handleFormSubmit}>
        <label>
            Email: 

            <input type="email" name='email' />
        </label>
        <br />
        <label>
            Password: 

            <input type="password" name='password' />
        </label>
        <br />
        <button type='submit'>Submit</button>
    </form>
)}

{showSupplierForm && (
    <form onSubmit={handleFormSubmit}>
        <label className='name'>
            Pin: 
            <input type="number" name='number'/>
        </label>
        <br />
        <label>
            Email: 
            <input type="email" name='email' />
        </label>
        <br />
        <br />
        <br />
        <label className='name'>
            password: 
            <input type="password" name='password' />
        </label>
        <br />
        <button type='submit'>submit</button>
    </form>
)}

    </div>
  )
}
