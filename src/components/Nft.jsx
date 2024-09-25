import { nfts } from "../constant/constant"
import NftCards from "./NftCards"

const Nft = () => {
  return (
    <section className="pt-16">
    <div className="w-full">
    <div className="container mx-auto px-2  lg:px-10 xl:px-20">
    <div className="flex flex-col pb-16 px-2">
        <h1 className="text-[#fff] font-WorkSans font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]">Discover More Nfts</h1>
        <p className="text-[#fff] font-WorkSans text-[20px] font-medium w-full">Explore New Trending Nfts.</p>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {nfts.map((nft,index) => (
            <NftCards key={index} {...nft} />
        ))}
        </div>
    </div>
    </div>
</section>
  )
}

export default Nft