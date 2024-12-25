import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import testimonial1 from "../../assets/bimg4.jpg";
import testimonial2 from "../../assets/bimg5.jpg";
import testimonial3 from "../../assets/bimg8.jpg";
import testimonial4 from "../../assets/bimg2.jpg";
import { ImQuotesRight } from "react-icons/im";

const Testimonials = () => {
  
  
  
  return (
    <>
    <div className="px-2 w-full mx-auto text-center">
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
      '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
      },
      '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
      },
      '@1.00': {
      slidesPerView: 2,
      spaceBetween: 30,
      },
      '@1.50': {
      slidesPerView: 3,
      spaceBetween: 40,
      }
      }}>
      <SwiperSlide>
  <div className="rounded-md p-5 mx-auto bg-gradient-to-r from-[#EE009B] to-[#ac009B]">
    <h1 className="text-3xl font-medium title-font text-[#FFE] mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="w-full">
        <div className="h-full bg-gray-100 p-2 rounded">
          <ImQuotesRight className="block w-5 h-5 text-gray-400 mb-4"/>
          
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={testimonial1} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
      </SwiperSlide>
      
      <SwiperSlide>
  <div className="container rounded-md p-5 mx-auto bg-gradient-to-r from-[#EE009B] to-[#ac009B]">
    <h1 className="text-3xl font-medium title-font text-[#FFE] mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="w-full">
        <div className="h-full bg-gray-100 p-2 rounded">
          <ImQuotesRight className="block w-5 h-5 text-gray-400 mb-4"/>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={testimonial2} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
      </SwiperSlide>
      
      <SwiperSlide>
  <div className="container rounded-md p-5 mx-auto bg-gradient-to-r from-[#EE009B] to-[#ac009B]">
    <h1 className="text-3xl font-medium title-font text-[#FFE] mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="w-full">
        <div className="h-full bg-gray-100 p-2 rounded">
          <ImQuotesRight className="block w-5 h-5 text-gray-400 mb-4"/>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={testimonial3} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
      </SwiperSlide>
      
      <SwiperSlide>
  <div className="rounded-md p-5 mx-auto bg-gradient-to-r from-[#EE009B] to-[#ac009B]">
    <h1 className="text-3xl font-medium title-font text-[#fff] mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="w-full">
        <div className="h-full bg-gray-100 p-2 rounded">
          <ImQuotesRight className="block w-5 h-5 text-gray-400 mb-4"/>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src={testimonial4} className="w-12 h-12 rounded-full flex-shrink-0 object-cover"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
    )
}

export default Testimonials