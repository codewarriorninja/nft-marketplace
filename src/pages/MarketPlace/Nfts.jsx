import MarketPlaceNftCards from "../../components/MarketPlaceNftCards"
import { MarketPlaceNfts } from "../../constant/constant"

const Nfts = () => {
  return (
    <section className="bg-[#3B3B3B] py-10">
      <div className="container mx-auto px-2 lg:px-10 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MarketPlaceNfts.map((nft,index) => (
            <MarketPlaceNftCards key={index} {...nft} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nfts