

const CategoriesCard = ({imgUrl, text}) => {
  return (
    <div className="flex flex-col">
      <img src={imgUrl}
       alt={text}
       className="object-contain"
        />
        <p className="text-[#fff] font-WorkSans font-bold bg-neutral-700 text-[18px] xl:text-[25px] pl-5 xl:pl-9 py-8 rounded-bl-[20px] rounded-br-[20px]">{text}</p>
    </div>
  )
}

export default CategoriesCard