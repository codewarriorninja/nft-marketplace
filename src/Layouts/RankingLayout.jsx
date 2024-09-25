import { NavLink,Outlet } from "react-router-dom"

const RankingLayout = () => {
    const linkClass = ({isActive}) => isActive ? 'border-b border-b-4 border-b-neutral-400 px-3 py-2 text-[#fff] font-WorkSans font-bold text-2xl' :'text-[#fff] font-WorkSans font-bold text-2xl opacity-60 hover:opacity-100'
  return (
    <section>
    <div className="w-full">
      <div className="container mx-auto px-2 lg:px-10 xl:px-20">
       <div className="flex flex-col h-80 justify-center">
         <h1 className="text-[#fff] font-WorkSans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Top Creators</h1>
         <p className="text-[#fff] font-WorkSans font-medium text-xl leading-10 max-w-xl pt-5">Check out top ranking NFT artists on the NFT Marketplace.</p>
       </div>
      </div>
      <hr className='border-[#3B3B3B]'></hr>
      <div className="py-10 container mx-auto px-2 lg:px-10 xl:px-20">
        <nav className="flex justify-between items-center max-w-3xl mx-auto px-2">
          <NavLink to='today' className={linkClass}>Today</NavLink>
          <NavLink to='thisweek' className={linkClass}>This Week</NavLink>
        </nav>
        <div className="flex justify-between items-center border border-[#3B3B3B] px-5 py-4 rounded-2xl mt-5">
          <div className="flex items-center space-x-10">
            <span className="text-[#858584] font-WorkSans font-medium text-lg">#</span>
            <h3 className="text-[#858584] font-WorkSans font-medium text-lg">Artist</h3>
          </div>
          <div className="flex items-center gap-36">
            <span className="text-[#858584] font-WorkSans font-medium text-lg hidden md:block">Change</span>
            <span className="text-[#858584] font-WorkSans font-medium text-lg hidden lg:block">NFTs Sold</span>
            <span className="text-[#858584] font-WorkSans font-medium text-lg">Volume</span>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  </section>
  )
}

export default RankingLayout