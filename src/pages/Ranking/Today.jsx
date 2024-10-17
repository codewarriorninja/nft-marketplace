import RankingProfileCards from "../../components/RankingProfileCards"
import { rankings } from "../../constant/constant"

const Today = ({limit}) => {
  const filteredPosts = limit ? rankings.slice(0, limit) : rankings
  return (
    <div className="w-full mt-5">
        <div>
        {filteredPosts.map((ranking,index) =>(
            <RankingProfileCards key={index} {...ranking} />
        ))}
        </div>
    </div>
  )
}

export default Today