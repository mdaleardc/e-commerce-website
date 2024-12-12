import bannerBig from "../../assets/shopping-banner.jpg";


const Hero = () => {
  
  
  return (
    <>
     <div className='pt-[3rem] relative z-[1] bg-blue-400'>
     <div>
     <img src={bannerBig}
     alt="banner"
     className="w-full object-cover object-center" />
     </div>
     <div className='absolute top-[40%] left-[2%] sm:left-[10%]'>
     <h2 className='text-xl sm:text-4xl font-bold text-yellow-400'>Hurry! These Deals Won't Last Forever</h2>
     <p className='text-xl sm:text-2xl sm:font-semibold text-white text-center'><em>Discover More, Save More</em></p>
     </div>
     </div>
    </>
    )
}


export default Hero;