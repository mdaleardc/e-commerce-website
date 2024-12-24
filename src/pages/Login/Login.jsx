import { useState } from "react";
import loginbanner1 from "../../assets/loginbanner1.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import { signInWithEmailAndPassword, validatePassword } from "firebase/auth";
import toast from 'react-hot-toast';



const Login = () => {
  
  const navigateToHome = useNavigate();
  
const [userInput, setUserInput] = useState({
  email: '',
  password: '',
});

const [isVisible, setIsVisible] = useState(false);



const handleChange = (e) => {
  e.preventDefault();
  setUserInput({...userInput, [e.target.name]: e.target.value})
}

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  

const formValidate = (e) => {
  e.preventDefault();
   
  if(userInput.email.trim() === '' || !validateEmail(userInput.email)) {
    return toast.error("Please input a valid email!");
  } else if (userInput.password.trim() === "") {
    return toast.error("Please input your password!");
  } else {
    signInWithEmailAndPassword(auth, userInput.email, userInput.password)
    .then(async (res)=>{
      if(userInput.email === await res.user.email) {
      navigateToHome("/");
      } else {
        return toast.error("Email not matched or wrong password!");
      }
    })
  }
}


	return (
		<>
		<div className="w-full pt-[4rem] py-2">
		<div className='w-5/6 mx-auto relative'>
		<img src={loginbanner1} alt='login page image' className='w-full h-[220px] object-cover'/>
		<div className='w-full h-[220px] bg-black opacity-[0.5] absolute top-0 left-0'></div>
		<h1 className='text-3xl font-semibold text-[gold] absolute top-[50%] left-[25%] translate-y-[-50%] translate-x-[-50%]'>Login</h1>
		</div>
		<div className='w-5/6 sm:w-3/5 md:w-2/5 mx-auto bg-gray-300 p-2 rounded-[4px] my-4 border-[3px] border-green-400'>
		<div className='mx-auto text-center'>
		<h3 className='text-2xl font-semibold'>Welcome Back</h3>
		<p className='text-gray-600'>Please login to your account</p>
		</div>
		<form className='w-full mx-auto text-center mt-6' onSubmit={formValidate}>
		<div className='flex flex-col justify-center items-center gap-y-6'>
		<input type='text' placeholder='Email' name='email' value={userInput.email} className='w-5/6 h-[2.7rem] rounded-lg pl-4 outline-none  focus:ring-2 focus:ring-green-500 tracking-wider text-xl' onChange={handleChange}/>
		<div className='w-full mx-auto text-center flex flex-col relative'>
		<input type={isVisible ? "text" : "password"} placeholder='Password' name='password' value={userInput.password} className='w-5/6 h-[2.7rem] mx-auto rounded-lg pl-4 outline-none focus:ring-2 focus:ring-green-500 text-xl' onChange={handleChange}/>
		
		<div className='absolute top-[20%] right-[11%] z-0' onClick={()=> setIsVisible((prev) => !prev)}>
		{
		isVisible ? <FaRegEye size='20'/> : <FaRegEyeSlash size='20'/>
		}
		</div>
		
		<a href='#' className='ml-auto mr-6 text-gray-600'>Forgot password?</a>
		</div>
		<input type='submit' className='w-4/5 py-1 text-2xl font-semibold uppercase bg-[#FF9200] text-white rounded-md hover:bg-[#e47e00] transition-all duration-200' value='Login'/>
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
		<Link to='/signup'>
		<p>Don&apos;t have an account? <span className='text-xl text-[#FF6300] font-semibold hover:text-[#ff00cc]'><u>SignUp</u></span></p>
		</Link>
		</div>
		</div>
		</div>
		</>
	)
}

export default Login;
