import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from "react-router-dom"
import MainLayout from './Layouts/MainLayout'
import HomePage from "./pages/HomePage"
import MarketPlace from "./Layouts/MarketPlaceLayout"
import Nfts from "./pages/MarketPlace/Nfts"
import Collection from "./pages/MarketPlace/Collection"
import NotFound from "./pages/NotFound"
import RankingLayout from "./Layouts/RankingLayout"
import Today from "./pages/Ranking/Today"
import ThisWeek from "./pages/Ranking/ThisWeek"
import Wallet from "./pages/Wallet"
import SignUp from "./pages/SignUp"

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage/>}/>
    <Route path="/MarketPlaceLayout" element={<MarketPlace />}>
     <Route path="Nfts" element={<Nfts />} />
     <Route path="Collections" element={<Collection />} />
    </Route>
    <Route path="/RankingLayout" element={<RankingLayout />}>
     <Route path="today" element={<Today />} />
     <Route path="thisweek" element ={<ThisWeek />} />
    </Route>
    <Route path="/wallet" element={<Wallet />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="*" element={<NotFound />} />
   </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App