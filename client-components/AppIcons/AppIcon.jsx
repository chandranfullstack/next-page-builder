import { BsArrowUpRight } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowDropDown, MdOutlineMail } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";




const IconList=[
    BsArrowUpRight,//0
    SiNotion,      //1
    BsArrowRight,  //2
    MdArrowDropDown, //3
    MdOutlineMail,   //4
    BsInstagram,     //5
    BsLinkedin,      //6
    BsYoutube        //7
]


const AppIcon=({index,size})=>{
    const Icon=IconList[index]
    return(
      <Icon  size={size}/>
    )
}
export default AppIcon