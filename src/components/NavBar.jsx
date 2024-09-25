import { StoreFront } from "../assets/icons/icon"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import { NavLinks } from "../constant/constant"
import { FiMenu, FiX } from "react-icons/fi";
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
     const linkClass = ({isActive}) => isActive ? 'border-b border-b-2 border-b-neutral-400 px-3 py-2 text-[#fff] font-WorkSans font-medium' :'text-[#fff] font-WorkSans font-medium opacity-80 hover:opacity-100'
  return (
    <header>
      <div className="w-full shadow-lg">
       <div className="container mx-auto px-2 lg:px-4 xl:px-5">
         <nav className="relative flex justify-between items-center h-20">
            <NavLink to='/' className='flex items-center gap-2'>
              <img src={StoreFront}
              alt="storefrontlogo"
              className="object-contain"  
              />
              <h1 className="font-WorkSans text-[#FFFFFF] font-medium text-xl">NFT Marketplace</h1>
            </NavLink>
           <ul className="space-x-9 hidden lg:block lg:text-xl">
           {NavLinks.map((Link) => (
            <NavLink to={Link.to} key={Link.Label} className={linkClass}>{Link.Label}</NavLink>
           ))}
           <NavLink to='/signUp'><button className="text-[#fff] font-medium font-WorkSans bg-Button px-4 py-2 rounded-lg">Sign Up</button></NavLink>
           </ul>
           <button className="block lg:hidden focus:outline-none" onClick={() =>setMenuOpen(!menuOpen)}>{menuOpen ? (
            <FiX className="h-6 w-6 dark:text-white text-black" />
             ) :(
              <FiMenu className="h-6 w-6 dark:text-white text-black" />
            )}</button>
            <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform lg:hidden ${menuOpen ? 'translate-x-0' :'-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
              <div className="flex flex-col items-start p-6 space-y-4">
                    <NavLink className="flex items-center pt-4 space-x-4">
                        <img src={StoreFront} width={48} height={48}/>
                        <h1 className="font-WorkSans font-semibold">NFT MarketPlace</h1>
                    </NavLink>
                    {NavLinks.map((Link) => (
                    <NavLink to={Link.to} key={Link.Label} className='font-WorkSans py-2 border-b border-b-slate-300 w-full'>{Link.Label}</NavLink> 
                 ))}
                 <NavLink to='/signUp' className='w-full'><button className="text-[#fff] font-medium font-WorkSans bg-Button px-4 py-2 rounded-lg w-full">Sign Up</button></NavLink>
                </div>
             </div>
         </nav>
       </div>
      </div>
    </header>
  )
}

export default NavBar