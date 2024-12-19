import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import loginbanner from "../../assets/loginbanner.webp";
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";


const SignUp = () => {
  
  const navigateToLogin = useNavigate();
  
  const [isVisible, setIsVisible] = useState(false);
  
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  
  
  const handleChange = (e) => {
    e.preventDefault();
    
    setUserData({...userData, [e.target.name]: e.target.value});
  }
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userData.username || !userData.email || !userData.password || !userData.confirmpassword) {
      return toast.error("All fields are required!")
    } else if (userData.email.trim() === "" || !validateEmail(userData.email)) {
      return toast.error("Please input a valid email!");
    } else if (userData.password !== userData.confirmpassword) {
      return toast.error("Match the  password!")
    } else {
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async (res)=>{
        const user = res.user;
        await updateProfile(user, {displayName: userData.username});
        navigateToLogin("/login");
      })
      .catch((err)=> toast.error(err.message));
    }
  }
  
  
  return (
    <>
    <div className='w-5/6 mx-auto relative'>
		<img src={loginbanner} alt='login page image' className='w-full h-[220px] object-cover'/>
		<div className='w-full h-[220px] bg-black opacity-[0.5] absolute top-0 left-0'></div>
		<h1 className='text-3xl font-semibold text-[gold] absolute top-[50%] left-[25%] translate-y-[-50%] translate-x-[-50%]'>Login</h1>
		</div>
		
    <div className='mt-[4.5rem] w-5/6 sm:w-3/5 md:w-2/5 mx-auto bg-gray-300 p-2 rounded-[4px] my-4 border-[3px] border-green-400'>
		<div className='mx-auto text-center'>
		<h3 className='text-2xl font-semibold'>Welcome Back</h3>
		<p className='text-gray-600'>Please login to your account</p>
		</div>
		
		<form className='w-full mx-auto text-center mt-6'>
		<div className='flex flex-col justify-center items-center gap-y-6'>
		<input type='text' placeholder='Full Name' name='username' value={userData.username} className='w-5/6 h-[2.7rem] rounded-lg pl-4 outline-none  focus:ring-2 focus:ring-green-500 tracking-wider text-xl' onChange={handleChange}/>
		
		<input type='text' placeholder='Email' name='email' value={userData.email} className='w-5/6 h-[2.7rem] rounded-lg pl-4 outline-none  focus:ring-2 focus:ring-green-500 tracking-wider text-xl' onChange={handleChange}/>
		
		<div className='w-full mx-auto text-center flex flex-col relative'>
		<input type={isVisible ? "text" : "password"} placeholder='New password' name='password' value={userData.password} className='w-5/6 h-[2.7rem] mx-auto rounded-lg pl-4 outline-none focus:ring-2 focus:ring-green-500 text-xl' onChange={handleChange}/>
		
		<div className='absolute top-[24%] right-[11%] z-0' onClick={()=> setIsVisible(prev=>!prev)}>
		{
		 isVisible ? <FaRegEye size='20'/> : <FaRegEyeSlash size='20'/>
		}
		</div>
		</div>
		<div className='w-full mx-auto text-center flex flex-col relative'>
		<input type={isVisible ? "text" : "password"} placeholder='Confirm password' name='confirmpassword' value={userData.confirmpassword} className='w-5/6 h-[2.7rem] mx-auto rounded-lg pl-4 outline-none focus:ring-2 focus:ring-green-500 text-xl' onChange={handleChange}/>
		
		<div className='absolute top-[24%] right-[11%] z-0' onClick={()=> setIsVisible(prev=>!prev)}>
		{
		 isVisible ? <FaRegEye size='20'/> : <FaRegEyeSlash size='20'/>
		}
		</div>
		</div>
		
		<input type='submit' className='w-4/5 py-1 text-2xl font-semibold uppercase bg-[#FF9200] text-white rounded-md hover:bg-[#e47e00] transition-all duration-200' value='SignUp' onClick={handleSubmit}/>
		</div>
		</form>
		<div className='w-full mx-auto text-center py-5 flex flex-col justify-center items-center gap-y-6'>
		<div className='w-3/5 flex items-center gap-2'>
		<div className='flex-grow border-t border-gray-600 w-full'></div>
		<p className='text-gray-600 whitespace-nowrap'>Or login with</p>
		<div className='flex-grow border-t border-gray-600 w-full'></div>
		</div>
		<div className='w-4/5 flex flex-row justify-between items-center gap-2'>
		<a href='#' className='w-1/2 flex flex-row gap-2 justify-center items-center border-[2px] rounded-md py-1 px-2'>
		<span><FcGoogle size='30'/></span>
		<span>Google</span>
		</a>

		<a href='#' className='w-1/2 flex flex-row gap-2 justify-center items-center border-[2px] rounded-md py-1 px-2'>
		<span><FaFacebook size='30' className='text-[#009AFF]'/></span>
		<span>Facebook</span>
		</a>
		</div>
		<Link to='/login'>
		<p>Do you have an account? <u className='text-xl text-[#FF6300] font-semibold hover:text-[#ff00cc]'>Login</u></p>
		</Link>
		</div>
		</div>
    </>
    )
}


export default SignUp;