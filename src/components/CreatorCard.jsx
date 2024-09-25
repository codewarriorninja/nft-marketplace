

const CreatorCard = ({ rank, name, sales, imgUrl }) => {
  return (
    <div className="relative bg-neutral-700 rounded-2xl py-7">
       <div className="flex flex-col items-center justify-center">
        <img src={imgUrl}
         alt={name}
         className="object-contain"
         />
         <p className="text-[#fff] font-WorkSans font-medium leading-10">{rank}. {name}</p>
         <h2 className="text-[#fff] font-medium font-WorkSans text-[18px]"><span className="text-neutral-400">Total Sales:</span> {sales}</h2>
       </div>
    </div>
  )
}

export default CreatorCard