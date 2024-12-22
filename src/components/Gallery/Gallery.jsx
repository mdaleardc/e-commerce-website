import footwear from "../../assets/footwear.jpg"
import menswear from "../../assets/menswear.jpg"
import menswear1 from "../../assets/menswear1.jpg"
import womenwear from "../../assets/womenwear.jpg"


const Gallery = () => {
  
  
  
  return (
    <>
    <div>
    <section className="text-gray-600 body-font">
    <h2 className='text-2xl font-medium tracking-widest text-center title-font py-10'>Gallery</h2> 
  <div className="container px-5 mx-auto flex flex-wrap">
  <div className="flex flex-wrap mx-auto md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:w-5/6 duration-300 ease-in-out mx-auto" src={footwear}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block hover:w-5/6 duration-300 ease-in-out mx-auto" src={menswear}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block hover:w-5/6 duration-300 ease-in-out mx-auto" src={menswear1}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={womenwear}/>
        </div>
        </div>
        </div>
      </div>
        </section>
    </div>
    </>
    )
}

export default Gallery;