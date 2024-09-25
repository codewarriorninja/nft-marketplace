import { FiSearch } from "react-icons/fi"
import { NavLink, Outlet } from "react-router-dom"
const MarketPlace = () => {
  const linkClass = ({isActive}) => isActive ? 'border-b border-b-4 border-b-neutral-400 px-3 py-2 text-[#fff] font-WorkSans font-bold text-2xl' :'text-[#fff] font-WorkSans font-bold text-2xl opacity-60 hover:opacity-100'
  return (
    <section>
      <div className="w-full">
        <div className="container mx-auto px-2 lg:px-10 xl:px-20">
         <div className="flex flex-col h-80 justify-center">
           <h1 className="text-[#fff] font-WorkSans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Browse Marketplace</h1>
           <p className="text-[#fff] font-WorkSans font-medium text-xl leading-10 max-w-xl pt-5">Browse through more than 50k NFTs on the NFT Marketplace.</p>
           <div className="flex items-center border border-[#3B3B3B] rounded-2xl px-5 my-5">
             <input type="text" placeholder="Search Your Favourite NFTS" className="w-full py-4 rounded-2xl focus:outline-none bg-transparent"/>
             <FiSearch className="text-[#fff] text-2xl cursor-pointer" />
           </div>
         </div>
        </div>
        <hr className='border-[#3B3B3B]'></hr>
        <div className="py-10">
          <nav className="flex justify-between items-center max-w-4xl mx-auto px-2 pb-3">
            <NavLink to='Nfts' className={linkClass}>NFTS</NavLink>
            <NavLink to='Collections' className={linkClass}>Collections</NavLink>
          </nav>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  )
}

export default MarketPlace