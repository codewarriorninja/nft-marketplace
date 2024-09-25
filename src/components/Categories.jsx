import { Categoriess } from "../constant/constant"
import CategoriesCard from "./CategoriesCard"


const Categories = () => {
  return (
    <section className="pt-16">
        <div className="w-full">
        <div className="container mx-auto px-2  lg:px-10 xl:px-20">
        <div className="flex flex-col pb-16 px-2">
        <h1 className="text-[#fff] font-WorkSans font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]">Browse Categories</h1>
        </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {Categoriess.map((category,index) => (
                <CategoriesCard key={index} {...category} />
            ))}
            </div>
        </div>
        </div>
 </section>
  )
}

export default Categories