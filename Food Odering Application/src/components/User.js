import React from 'react'

function User() {
    console.log("User Component")
  return (
    <div className='user-card'>
        <h2>Name: Soham</h2>
        <h3>Location: Montreal, Canada</h3>
        <h4>Contact: soham@gmail.com</h4>
    </div>
  )
}

export default User