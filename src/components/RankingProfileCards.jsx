
const RankingProfileCards = ({rank,userProfile,userName,change,NFTsSold,Volume}) => {
  return (
    <div className="bg-[#3B3B3B] mb-5 rounded-2xl">
     <div className="flex justify-between items-center gap-10">
       <div className="flex items-center space-x-3 px-5 py-2">
         <span className="lg:bg-[#2B2B2B] h-7 w-7 rounded-full flex items-center justify-center text-[#858584]">{rank}</span>
         <img src={userProfile}
          alt={userName}
           className="object-contain"
          />
          <span className="text-[#fff] font-WorkSans font-bold text-sm lg:text-xl">{userName}</span>
       </div>
       <div className="flex items-center md:gap-32 lg:gap-40">
         <span className="text-[#00AC4F] font-WorkSans font-medium text-lg hidden md:block">{change}</span>
         <span className="text-[#fff] font-WorkSans font-medium text-lg hidden lg:block">{NFTsSold}</span>
         <span className="pr-6 text-[#fff] font-WorkSans font-medium lg:text-lg text-nowrap">{Volume}</span>
       </div>
     </div>
    </div>
  )
}

export default RankingProfileCards