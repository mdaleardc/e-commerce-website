import footwear from "../../assets/footwear.jpg"
import menswear from "../../assets/menswear.jpg"
import menswear1 from "../../assets/menswear1.jpg"
import womenwear from "../../assets/womenwear.jpg"


const Gallery = () => {
  
  
  
  return (
    <>
    <div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto flex flex-wrap">
  <div class="flex flex-wrap mx-auto md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block hover:w-5/6 duration-300 ease-in-out mx-auto" src={footwear}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block hover:w-5/6 duration-300 ease-in-out mx-auto" src={menswear}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block hover:w-5/6 duration-300 ease-in-out mx-auto" src={menswear1}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={womenwear}/>
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