import { NavLink } from "react-router-dom"
import { HeroImg } from "../assets/images/image"
import { statistics } from "../constant/constant"
import { BsFillRocketTakeoffFill } from "react-icons/bs"
const Hero = () => {
  return (
    <section className="py-14">
      <div className="w-full">
        <div className="container mx-auto px-2 lg:px-10 xl:px-20">
          <div className="flex flex-col gap-16 items-center lg:flex-row">
            <div className="w-full flex flex-col px-2">
             <h1 className="text-[#fff] font-bold font-WorkSans text-[27px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[67px] lg:max-w-lg xl:max-w-md leading-tight pt-5">Discover digital art & Collect NFTs</h1>
             <p className="text-[#fff] font-WorkSans font-medium text-[20px] lg:text-[22px] lg:max-w-md leading-10 py-5">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
             <NavLink to='/signUp' className='md:w-64'><button className="w-full bg-Button text-white px-7 py-3 rounded-md font-WorkSans font-semibold text-center md:w-64 flex items-center justify-center space-x-3"><BsFillRocketTakeoffFill className="text-xl" /> <span className="text-xl">Get Started</span></button></NavLink>
             <div className="w-full flex items-center gap-10 pt-5">
              {statistics.map((stat) =>(
                <div key={stat.Label} className="flex flex-col items-center max-md:w-full">
                  <h1 className="text-[#fff] font-WorkSans font-bold text-[22px] md:text-[25px] lg:text-[28px]">{stat.value}</h1>
                  <p className="text-[#fff] font-WorkSans font-medium md:text-[16px] lg:text-[20px]">{stat.Label}</p>
                </div>
              ))}
             </div>
            </div>
            <div className="w-full">
              <NavLink to=''>
                <img src={HeroImg}
               alt="hero-gif" 
               className="w-full h-auto object-contain"
              /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero