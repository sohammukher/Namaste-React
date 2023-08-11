import React from 'react'

const Contact = () => {
  return (
    <div>
    <h1 className=" font-bold text-3xl p-4 m-4">Contact Us</h1>
    <form className=''>
    <input type = "text"  className = " border-black p-2 m-2" placeholder='Name' />
    <input type = "text" className='border-black p-2 m-2 ' placeholder='Email Address'/>
    <input type = "text" className='border-black p-2 m-2 ' placeholder='Message'/>
    <button className='border-black p-2 m-2 rounded-lg bg-slate-500'>Submit</button>
    </form>
    </div>
  )
}

export default Contact