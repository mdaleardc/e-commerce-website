import Layout from "../../components/Layout/Layout";
import loginbanner1 from "../../assets/loginbanner1.jpg";



const Login = () => {



	return (
		<>
		<Layout>
		<div className="w-full pt-[4rem] border-[2px] border-red-400 py-2">
		<div className='w-5/6 mx-auto relative'>
		<img src={loginbanner1} alt='login page image' className='w-full h-[220px] object-cover'/>
		<div className='w-full h-[220px] bg-black opacity-[0.5] absolute top-0 left-0'></div>
		<h1 className='text-3xl font-semibold text-[gold] absolute top-[50%] left-[25%] translate-y-[-50%] translate-x-[-50%]'>Login</h1>
		</div>
		<div className='w-full sm:w-3/5 md:w-2/5 lg:w-1/5 mx-auto bg-gray-300 p-2 rounded-[3px] my-4'>
		<div className='mx-auto text-center'>
		<h3 className='text-2xl font-semibold'>Welcome Back</h3>
		<p className='text-gray-600'>Please login to your account</p>
		</div>
		<form>
		<input type='text' placeholder='Email' className=''/>
		<input type='text' placeholder='Password' className=''/>
		</form>
		</div>
		</div>
		</Layout>
		</>
	)
}

export default Login;
