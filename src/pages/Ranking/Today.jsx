import RankingProfileCards from "../../components/RankingProfileCards"
import { rankings } from "../../constant/constant"

const Today = () => {
  return (
    <div className="w-full mt-5">
        <div>
        {rankings.map((ranking,index) =>(
            <RankingProfileCards key={index} {...ranking} />
        ))}
        </div>
    </div>
  )
}

export default Today