import { BsArrowUpRight } from "react-icons/bs";
import { SiNotion } from "react-icons/si";


const IconList=[
    BsArrowUpRight,
    SiNotion
]


const AppIcon=({index,size})=>{
    const Icon=IconList[index]
    return(
      <Icon  size={size}/>
    )
}
export default AppIcon