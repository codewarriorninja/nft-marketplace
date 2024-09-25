
const BannerCard = ({imgUrl,title,text}) => {
  return (
    <div className="bg-neutral-600/40 backdrop-blur-2xl rounded-2xl">
      <div className="text-center flex flex-col items-center justify-between">
        <img src={imgUrl}
         alt={title}
         className="object-contain"
         />
         <div className="w-full">
            <h1 className="text-[#fff] font-WorkSans font-bold text-[18px] xl:text-[20px] pt-3">{title}</h1>
            <p className="text-[#fff] font-WorkSans font-medium leading-6 py-10 xl:max-w-60 mx-auto">{text}</p>
         </div>
      </div>
    </div>
  )
}

export default BannerCard