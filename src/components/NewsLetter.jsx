import { Photo } from "../assets/images/image"
import { FiMail } from "react-icons/fi"
const NewsLetter = () => {
  return (
    <section className="pt-28">
     <div className="w-full">
        <div className="container mx-auto px-2 lg:px-10 xl:px-20">
          <div className="bg-neutral-700 rounded-3xl px-10 py-10">
            <div className="flex justify-center items-center flex-wrap gap-16">
              <div className="md:w-1/2">
                <img src={Photo}
                 alt="space"
                 className="object-contain"
                 />
              </div>
              <div className="flex flex-col md:w-2/5">
                 <h1 className="text-[#fff] font-WorkSans font-bold text-[30px] xl:text-5xl max-w-md leading-8">Join Our Weekly Digest</h1>
                 <p className="text-[#fff] font-WorkSans font-semibold max-w-sm text-[20px] leading-8 pt-5">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
                 <div className="flex items-center justify-between gap-3 flex-wrap xl:bg-white rounded-3xl mt-5">
                    <input type="email" placeholder="Enter Your Email here" className="border-none focus:outline-none px-4 py-5 rounded-3xl max-xl:w-full" />
                    <button className="flex items-center justify-center space-x-2 bg-[#A259FF] px-9 py-5 rounded-3xl max-xl:w-full"><FiMail className="text-[#fff] text-[18px]" /><span className="text-white font-WorkSans font-semibold">Subscribe</span></button>
                 </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </section>
  )
}

export default NewsLetter