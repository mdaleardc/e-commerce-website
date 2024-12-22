import aboutImg from "../../assets/about.jpg";
import aboutImg1 from "../../assets/about1.jpg";




const About = () => {
	
	
	return (
	<>
	<div className='mt-[2rem] pt-[2rem] pb-[1rem] h-full px-2'>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={aboutImg}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
      <p className="mb-8 leading-relaxed text-justify">Welcome to E-Shop, where passion meets innovation! We are a dedicated team committed to providing high-quality solutions and creating unique experiences for our customers. Our goal is to deliver products and services that are not only functional but also meaningful, enhancing your everyday life.</p>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container mx-auto flex py-20 md:flex-row flex-col items-center gap-4">
      <div className="lg:flex-grow md:w-1/2  px-5 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">E-Shop</h1>
      <p className="mb-8 leading-relaxed text-justify">
At E-Shop, we believe in the power of technology and creativity. Whether it&apos;s crafting seamless digital solutions or designing user-friendly interfaces, our work is driven by a simple principle: to make life easier and more enjoyable for everyone.
Thank you for choosing us. We look forward to growing with you and achieving great things together!
</p>
</div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={aboutImg1}/>
    </div>
  </div>
</section>
	</div>
	</>

)
}

export default About;
