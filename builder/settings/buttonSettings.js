import { useNode } from "@craftjs/core"
import { useState } from "react"

const ButtonSettings=()=>{
    const {actions}=useNode()
    const [colors,setColor]=useState(["gray","red","orange","yellow","green","teal","blue","cyan","purple","pink","linkedin"])

    const handleColors=(e)=>{
      console.log("color",e.target.innerText)
      e.preventDefault()
      e.stopPropagation()
      actions.setProp((props)=>{
        props.colorScheme=e.target.innerText
        console.log(props.colorScheme,"variant",props)
      },500)
    }

return(
        <div className=' flex w-48 flex-col  mt-2 items-center align-baseline'>
          <div className=' justify-between h-full'>
               {
                colors.map((i,index)=>
                <p key={index} load={false} className=' h-full flex justify-center items-center cursor-pointer w-full px-5 py-3' value={i} style={{background:i}} onClick={(e)=>handleColors(e)}>{i}</p>
                )
               }
          </div>
          </div>
    )
}

export default ButtonSettings