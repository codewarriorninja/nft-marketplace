import { works } from "../constant/constant"
import BannerCard from "./BannerCard"

const Banner = () => {
  return (
    <section>
     <div className="w-full">
         <div className="container mx-auto px-2 lg:px-10 xl:px-20">
          <div className="flex flex-col pb-16 px-2">
            <h1 className="text-[#fff] font-WorkSans font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]">How It Works</h1>
            <p className="text-[#fff] font-WorkSans text-[20px] font-medium w-full">Find Out How To Get Started</p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {works.map((work,index)=>(
                <BannerCard key={index} {...work} />
             ))}
           </div>
          </div>
          </div>
    </section>
  )
}

export default Banner