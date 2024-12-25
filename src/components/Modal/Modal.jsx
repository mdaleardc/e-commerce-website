import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";


const Modal = ({viewModal}) => {
  
  
  const [inputData, setInputData] = useState({
    fullName: "",
    contactNumber: "",
    camp: "",
    block: "",
    subBlock: ""
  });
  
  console.log(inputData);
  
  const handleChanged = (e) => {
    e.preventDefault();
    setInputData({...inputData, [e.target.name]: e.target.value});
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputData.fullName || !inputData.contactNumber || !inputData.camp || !inputData.block || !inputData.subBlock) {
     return toast.error("All fields are required!")
    } else {
      return;
    }
  }
  
  
  
  return (
    <>
    <div className='w-full'>
    <form accept-charset="utf-8" onSubmit={handleSubmit} className="bg-gray-500 text-black flex flex-col gap-4 w-4/6 sm:w-3/6 md:w-2/6 mx-auto p-2 rounded">
    <RxCross2 size='30' className='ml-auto text-red-500' onClick={viewModal}/>
      <input type="text" name="fullName" value={inputData.fullName} placeholder="Full Name" className='outline-none rounded h-[2rem] px-2 focus:ring-2 focus:ring-green-500' onChange={handleChanged}/>
      <input type="text" name="contactNumber" value={inputData.contactNumber} placeholder="Contact Number" className='outline-none rounded h-[2rem] px-2 focus:ring-2 focus:ring-green-500' onChange={handleChanged}/>
      <div className='grid grid-cols-3 gap-2'>
      <input type="text" name="camp" value={inputData.camp} placeholder="Camp" className='outline-none rounded h-[2rem] px-2 focus:ring-2 focus:ring-green-500' onChange={handleChanged}/>
      <input type="text" name="block" value={inputData.block} placeholder="Block" className='outline-none rounded h-[2rem] px-2 focus:ring-2 focus:ring-green-500' onChange={handleChanged}/>
      <input type="text" name="subBlock" value={inputData.subBlock} placeholder="Sub Block" className='outline-none rounded h-[2rem] px-1 focus:ring-2 focus:ring-green-500' onChange={handleChanged}/>
      </div>
      <input type='submit' className='text-white bg-[#212341] mx-auto px-1 rounded-md w-3/5 text-xl font-medium'
      value="Order Now"/>
    </form>
    </div>
    </>
    )
}


export default Modal;