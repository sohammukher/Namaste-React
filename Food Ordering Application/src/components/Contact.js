import React from 'react'

const Contact = () => {
  return (
    <div className="text-center dark:bg-black">
    <h1 className="font-bold text-3xl p-4 m-4 dark:text-white">Contact Us</h1>
    <form className=' w-2/3 mx-auto rounded-lg p-5'>
      <div className="mb-4">
        <input type="text" className="border-black p-2 rounded-lg w-2/3 mx-auto border-2" placeholder='Name' />
      </div>
      <div className="mb-4">
        <input type="text" className="border-black p-2 rounded-lg w-2/3 mx-auto border-2" placeholder='Email Address' />
      </div>
      <div className="mb-4">
        <input type="text" className="border-black p-4 rounded-lg w-2/3 mx-auto border-2" placeholder='Message' />
      </div>
      <div className="mb-4">
        <button className='border-black p-2 rounded-lg bg-blue-500 w-1/3 mx-auto border-2'>Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Contact