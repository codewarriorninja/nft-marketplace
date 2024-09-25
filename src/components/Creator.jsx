import { Creators } from "../constant/constant"
import CreatorCard from "./CreatorCard"

const Creator = () => {
  return (
    <section className="pt-16">
       <div className="w-full">
         <div className="container mx-auto px-2 lg:px-10 xl:px-20">
          <div className="flex flex-col pb-16 px-2">
            <h1 className="text-[#fff] font-WorkSans font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]">Top Creators</h1>
            <p className="text-[#fff] font-WorkSans text-[20px] font-medium w-full">Checkout Top Rated Creators On The Nft Marketplace.</p>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
              {Creators.map((crator,index) =>(
                <CreatorCard key={crator.id}
                 rank={index + 1}
                 name={crator.name}
                 sales={crator.sales}
                 imgUrl={crator.imgUrl}
                 />
              ))}
           </div>
         </div>
       </div>
    </section>
  )
}

export default Creator