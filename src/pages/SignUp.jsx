import { WalletImage } from "../assets/images/image"
import { FiUser } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { FiLock } from "react-icons/fi"
const SignUp = () => {
  return (
    <section>
       <div className="flex flex-col items-center md:flex-row gap-14">
        <div className="md:w-1/2">
         <img src={WalletImage} 
          alt="walletPlaceholder"
           className="object-contain"
         />
        </div>
        <div className="flex flex-col md:w-1/2 max-sm:px-2">
          <h1 className="text-[#fff] font-WorkSans font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Create account</h1>
          <p className="text-[#fff] font-WorkSans font-medium text-lg max-w-xs leading-8 pt-4">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
          <div className="mt-5 max-w-sm">
            <form className="w-full">
              <div className="flex items-center space-x-2 rounded-2xl bg-white px-4">
                 <FiUser className="text-[#BDBDBD] text-2xl"/>
                 <input type="text" placeholder="username" className="w-full focus:outline-none bg-transparent py-3 rounded-2xl placeholder:text-[#2B2B2B] capitalize" required />
              </div>
              <div className="flex items-center space-x-2 rounded-2xl bg-white px-4 mt-3">
                 <FiMail className="text-[#BDBDBD] text-2xl"/>
                 <input type="email" placeholder="Email Address" className="w-full focus:outline-none bg-transparent py-3 rounded-2xl placeholder:text-[#2B2B2B] capitalize" required />
              </div>
              <div className="flex items-center space-x-2 rounded-2xl bg-white px-4 mt-3">
                 <FiLock className="text-[#BDBDBD] text-2xl"/>
                 <input type="text" placeholder="Password" className="w-full focus:outline-none bg-transparent py-3 rounded-2xl placeholder:text-[#2B2B2B] capitalize" required />
              </div>
              <div className="flex items-center space-x-2 rounded-2xl bg-white px-4 mt-3">
                 <FiLock className="text-[#BDBDBD] text-2xl"/>
                 <input type="text" placeholder="Confirm Password" className="w-full focus:outline-none bg-transparent py-3 rounded-2xl placeholder:text-[#2B2B2B] capitalize" required />
              </div>
              <button className="text-[#fff] bg-[#A259FF] mt-3 w-full rounded-2xl py-3 text-center font-WorkSans font-semibold text-xl">Create Account</button>
            </form>
          </div>
        </div>
       </div>
    </section>
  )
}

export default SignUp