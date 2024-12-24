import { useState } from "react";




const Modal = () => {
  
  
  
  return (
    <>
    <div className='w-full'>
    <form accept-charset="utf-8" className="bg-gray-500 text-white flex flex-col gap-4 w-4/6 sm:w-3/6 md:w-2/6 mx-auto p-2 rounded">
      <input type="text" name="fullName" value="" placeholder="Full Name" className='outline-none rounded h-[2rem]'/>
      <input type="text" name="contactNumber" value="" placeholder="Contact Number" className='outline-none'/>
      <input type="text" name="camp" value="" placeholder="Camp Name" className='outline-none'/>
      <input type="text" name="Block" value="" placeholder="Block" className='outline-none'/>
      <input type="text" name="subBlock" value="" placeholder="Sub Block" className='outline-none'/>
    </form>
    </div>
    </>
    )
}


export default Modal;