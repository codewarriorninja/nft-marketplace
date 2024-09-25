import Banner from "../components/Banner"
import Categories from "../components/Categories"
import Creator from "../components/Creator"
import Hero from "../components/Hero"
import NewsLetter from "../components/NewsLetter"
import Nft from "../components/Nft"
import NftHighlight from "../components/NftHighlight"
import Trending from "../components/Trending"

const HomePage = () => {
  return (
    <>
     <Hero />
     <Trending />
     <Creator />
     <Categories />
     <Nft />
     <NftHighlight />
     <Banner />
     <NewsLetter />
    </>
  )
}

export default HomePage