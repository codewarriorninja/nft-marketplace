import { NavLink } from "react-router-dom"
import { ShroomieAvatar } from "../assets/images/image"
import Timer from "./Timer"
import { FiEye } from "react-icons/fi"

const NftHighlight = () => {
  return (
    <section className="py-16">
     <div className="relative w-full bg-Nft bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-svh">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-600"></div>
       <div className="container mx-auto px-2 lg:px-10 xl:px-20 z-10">
         <div className="w-44 bg-neutral-600 rounded-2xl">
          <NavLink to='/profile ' className="flex items-center space-x-2 justify-center py-3">
          <img src={ShroomieAvatar}
            alt="ShroomieAvatar"
            className="object-contain"
             />
             <p className="text-[#fff] font-WorkSans font-medium">Shroomie</p>
          </NavLink>
         </div>
         <div className="flex justify-between items-center flex-wrap gap-10">
           <div>
             <h1 className="text-[#fff] font-WorkSans font-bold text-[30px] xl:text-6xl leading-normal py-5">Magic Mushrooms</h1>
              <button className="flex items-center space-x-2 bg-white px-7 py-3 rounded-2xl max-sm:w-full max-sm:justify-center"><FiEye className="w-5 h-5 text-violet-600" /><span className="font-bold font-WorkSans">See NFT</span></button>
           </div>
            <div className="bg-neutral-600/40 backdrop-blur-lg px-7 py-4 rounded-2xl">
              <h1 className="text-[#fff] font-WorkSans font-medium leading-8">Auction ends in:</h1>
              <Timer />
            </div>
         </div>
        </div>
       </div> 
    </section> 
    )
}

export default NftHighlight