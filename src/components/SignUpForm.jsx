import React, { useState } from 'react'

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
<button onClick={handleUserClick} >User</button>
<button onClick={handleSupplierClick} >Service Provider</button>


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
        <label>
            Pin: 
            <input type="number" name='number'/>
        </label>
        <br />
        <labe>
            Email: 
            <input type="email" name='email' />
        </labe>
        <br />
        <label>
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
