import { Avatar, Bear, Cat, GlassDog, Mushrooms, MushroomsPlaceholderFirst, MushroomsPlaceholderSecond, Number, Robot, RobotPlaceholder, RobotPlaceholderSecond, ShroomieAvatar } from "../assets/images/image"

const Trending = () => {
  return (
    <section className="pt-10">
      <div className="w-full">
        <div className="container mx-auto lg:px-10 xl:px-20">
          <div className="flex flex-col pb-16 px-2">
            <h1 className="text-[#fff] font-WorkSans font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]">Trending Collection</h1>
            <p className="text-[#fff] font-WorkSans text-[20px] font-medium w-full">Checkout our weekly updated trending collection.</p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="flex flex-col flex-1">
               <div className="w-[330px] max-sm:w-[315px] mx-auto px-2">
                 <img src={GlassDog} 
                  alt="dog"
                  className="w-full h-auto object-contain"/>
                 <div className="flex items-center justify-between space-x-3 py-5">
                    <img src={Cat}
                     alt="cat"
                     className="object-contain w-[90px]"/>
                     <img src={Bear}
                      alt="bear"
                      className="object-contain w-[90px]"/>
                      <img src={Number}
                      alt="number"
                      className="object-contain w-[90px]"/>
                 </div>
                 <div className="flex items-center space-x-3">
                   <img src={Avatar}
                   alt="avatar"
                   className="object-contain"
                    />
                    <p className="text-[#fff] font-medium font-WorkSans text-[18px]">Mrfox</p>
                 </div>
               </div>
            </div>
            <div className="flex flex-col flex-1">
               <div className="w-[330px] max-sm:w-[315px] mx-auto px-2">
                 <img src={Mushrooms} 
                  alt="dog"
                  className="w-full h-auto object-contain"/>
                 <div className="flex items-center justify-between space-x-3 py-5">
                    <img src={MushroomsPlaceholderFirst}
                     alt="cat"
                     className="object-contain w-[90px]"/>
                     <img src={MushroomsPlaceholderSecond}
                      alt="bear"
                      className="object-contain w-[90px]"/>
                      <img src={Number}
                      alt="number"
                      className="object-contain w-[90px]"/>
                 </div>
                 <div className="flex items-center space-x-3">
                   <img src={ShroomieAvatar}
                   alt="avatar"
                   className="object-contain"
                    />
                    <p className="text-[#fff] font-medium font-WorkSans text-[18px]">Shroomie</p>
                 </div>
               </div>
            </div>
            <div className="w-full flex flex-col flex-1">
               <div className="w-[330px] max-sm:w-[315px] mx-auto px-2">
                 <img src={Robot} 
                  alt="dog"
                  className="w-full h-auto object-contain"/>
                 <div className="flex items-center justify-between space-x-3 py-5">
                    <img src={RobotPlaceholder}
                     alt="cat"
                     className="object-contain w-[90px]"/>
                     <img src={RobotPlaceholderSecond}
                      alt="bear"
                      className="object-contain w-[90px]"/>
                      <img src={Number}
                      alt="number"
                      className="object-contain w-[90px]"/>
                 </div>
                 <div className="flex items-center space-x-3">
                   <img src={Avatar}
                   alt="avatar"
                   className="object-contain"
                    />
                    <p className="text-[#fff] font-medium font-WorkSans text-[18px]">Mrfox</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trending


// 4391327387254106 