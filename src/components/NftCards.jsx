

const NftCards = ({imgUrl, text, profilePicture, profileName, Price,HighstBid}) => {
  return (
    <div>
        <div className="flex flex-col justify-center">
            <img src={imgUrl} 
            alt={text}
            className="object-contain"
            />
            <div className="py-5 bg-neutral-700 rounded-br-[20px] rounded-bl-[20px]">
            <h1 className="text-[#fff] font-WorkSans font-bold text-[22px] px-5">{text}</h1>
             <div className="flex items-center py-5">
                <img src={profilePicture}
                 alt={profileName}
                 className="object-contain pl-5 pr-2"
                 />
                 <h2 className="text-[#fff] font-WorkSans font-medium text-[18px]">{profileName}</h2>
             </div>
             <div className="flex justify-between items-center px-5">
               <div className="flex flex-col">
                 <h3 className="text-neutral-400 font-WorkSans font-medium text-[17px]">Price</h3>
                 <h1 className="text-[#fff] font-WorkSans font-semibold text-[19px]">{Price}</h1>
               </div>
               <div className="flex flex-col">
                 <h3 className="text-neutral-400 font-WorkSans font-medium text-[17px]">Highest Bid</h3>
                 <h1 className="text-[#fff] font-WorkSans font-semibold text-[19px]">{HighstBid}</h1>
               </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default NftCards