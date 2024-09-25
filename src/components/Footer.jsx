import { NavLink } from "react-router-dom"
import { Discord, Insta, StoreFront, X, YouTube } from "../assets/icons/icon"
import { NavLinks } from "../constant/constant"
import { FiMail } from "react-icons/fi"
import { BiCopyright } from "react-icons/bi"
const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="w-full bg-neutral-700">
       <div className="container mx-auto px-2 lg:px-10 xl:px-20">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-10">
          <div className="flex flex-col max-w-60">
            <div className="flex items-center space-x-3">
              <img src={StoreFront}
               alt="logo"
               className="object-contain"
              />
              <h1 className="text-[#fff] font-WorkSans font-semibold text-xl">NFT Marketplace</h1>
            </div>
             <div className="pt-4">
              <p className="text-neutral-400 font-WorkSans font-medium max-w-60 text-lg">NFT marketplace UI created with Anima for Figma.</p>
             </div>
             <div className="flex flex-col pt-3">
               <h1 className="text-neutral-400 text-lg font-WorkSans font-medium">Join our community</h1>
               <div className="flex items-center space-x-2 pt-2">
                 <img src={Discord} alt="discord" className="object-contain" />
                 <img src={Insta} alt="instagram" className="object-contain" />
                 <img src={X} alt="twitter" className="object-contain" />
                 <img src={YouTube} alt="YouTube" className="object-contain" />
               </div>
             </div>
          </div>
          <div className="flex flex-col max-w-36">
            <h1 className="text-[#fff] font-WorkSans font-bold text-xl leading-8 pb-3">Explore</h1>
            <div className="flex flex-col space-y-3">
              {NavLinks.map((link,index) => (
                <NavLink to={link.to} key={index} className='text-neutral-400 text-lg leading-8'>{link.Label}</NavLink>
              ))}
            </div>
          </div>
           <div className="flex flex-col">
             <h1 className="text-[#fff] font-WorkSans font-bold text-xl leading-8">Join our weekly digest</h1>
             <p className="text-neutral-400 text-lg max-w-62 leading-8">Get exclusive promotions & updates straight to your inbox.</p>
             <div className="flex items-center justify-between gap-3 max-xl:flex-col xl:bg-white rounded-3xl mt-5">
              <input type="email" placeholder="Enter Your Email here" className="border-none focus:outline-none px-4 py-4 rounded-3xl max-xl:w-full" />
              <button className="flex items-center justify-center space-x-2 bg-[#A259FF] px-9 py-4 rounded-3xl max-xl:w-full"><FiMail className="text-[#fff] text-[18px]" /><span className="text-white font-WorkSans font-semibold">Subscribe</span></button>
            </div>
           </div>
         </div>
         <hr className="border border-[#858584]"></hr>
         <div className="py-3 flex items-center space-x-3">
          <BiCopyright className="text-xl text-[#fff]" />
          <span className="text-[#fff] font-WorkSans font-medium text-lg">Develop By Henok Aragaw</span>
         </div>
       </div>
      </div>
    </footer>
  )
}

export default Footer