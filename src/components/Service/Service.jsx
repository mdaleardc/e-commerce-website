import { FaShippingFast } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdPayment } from "react-icons/md";


const Service = () => {
  
  
  
  return (
    <>
    <div class='container mx-auto bg-white flex flex-row flex-wrap justify-center items-center gap-10 py-6 text-gray-100'>
    <div class='flex flex-col justify-center items-center border-[1px] border-solid border-[#FFAB] rounded-[2px] p-2 font-semibold bg-[#FF5515] w-[220px] hover:scale-110 transition duration-500'>
    <FaShippingFast size='40' class='text-white'/>
    <p>FREE SHIPPING</p>
    </div>
    <div class='flex flex-col justify-center items-center border-[1px] border-solid border-[#FFAB] rounded-[2px] p-2 font-semibold bg-[#FF5515] w-[220px] hover:scale-110 transition duration-500'>
    <MdProductionQuantityLimits size='40' class='text-white'/>
    <p class='whitespace-nowrap'>BEST PRODUCTS</p>
    </div>
    <div class='flex flex-col justify-center items-center border-[1px] border-solid border-[#FFAB] rounded-[2px] p-2 font-semibold bg-[#FF5515] w-[220px] hover:scale-110 transition duration-500'>
    <TbTruckReturn size='40' class='text-white'/>
    <p>EASY TETURN</p>
    </div>
    <div class='flex flex-col justify-center items-center border-[1px] border-solid border-[#FFAB] rounded-[2px] p-2 font-semibold bg-[#FF5515] w-[220px] hover:scale-110 transition duration-500'>
    <MdPayment size='40' class='text-white'/>
    <p>SECUTE PAYMENT</p>
    </div>
    </div>
    </>
    )
}

export default Service;