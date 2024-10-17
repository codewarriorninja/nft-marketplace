import { NavLink } from "react-router-dom"
import { WalletImages } from "../assets/images/image"
import { CoinBase, MetaMask, WalletConnect } from "../assets/icons/icon"

const Wallet = () => {
  return (
    <section>
       <div className="flex flex-col items-center md:flex-row gap-14">
        <div className="md:w-1/2">
         <img src={WalletImages} 
          alt="walletPlaceholder"
           className="object-contain"
         />
        </div>
        <div className="flex flex-col md:w-1/2 max-sm:px-2">
          <h1 className="text-[#fff] font-WorkSans font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Connect wallet</h1>
          <p className="text-[#fff] font-WorkSans font-medium text-lg max-w-xs leading-8 pt-4">Choose a wallet you want to connect. There are several wallet providers.</p>
          <div className="mt-5 max-w-xs">
            <NavLink  to='' className='flex items-center space-x-4 border border-[#A259FF] rounded-2xl py-3 px-8'>
                <img src={MetaMask}
                 alt="metamaskWallet"
                 className="object-contain"
                 />
                 <h1 className="text-[#fff] font-WorkSans font-bold text-xl">Metamask</h1>
            </NavLink>
            <NavLink  to='' className='flex items-center space-x-4 border border-[#A259FF] rounded-2xl py-3 px-8 mt-5'>
                <img src={WalletConnect}
                 alt="metamaskWallet"
                 className="object-contain"
                 />
                 <h1 className="text-[#fff] font-WorkSans font-bold text-xl">Wallet Connect</h1>
            </NavLink>
            <NavLink  to='' className='flex items-center space-x-4 border border-[#A259FF] rounded-2xl py-3 px-8 mt-5'>
                <img src={CoinBase}
                 alt="metamaskWallet"
                 className="object-contain"
                 />
                 <h1 className="text-[#fff] font-WorkSans font-bold text-xl">Coinbase</h1>
            </NavLink>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Wallet