import { useNode } from "@craftjs/core"
import { useState } from "react"

const HeadingEditor=()=>{
    const {actions,prop}=useNode((node)=>({prop:node.data.props}))
    const [Headings,setHeadings]=useState(["h1","h2","h3","h4","h5","h6"])
    const [currentHead,setCurrentHead]=useState([prop.size])
    const handleColorChange=(e)=>{
      actions.setProp((props)=>{
      console.log(prop.color,e.target.value,props)
      props.color=e.target.value
      console.log(prop.color,e.target.value)
      },500)
    }
  
    const handleFontSize=(e)=>{
       const fontSize=e.target.value+"px"
       actions.setProp((props)=>{
        props.fontSize=fontSize
        console.log(props.fontSize,fontSize)
       },500)
    }
  
    const handleHeading=(i)=>{
      console.log(i,"heading",prop.size)
      setCurrentHead(i)
      actions.setProp((props)=>{
        props.size=i
        console.log(props.size,currentHead)
      },500)
    }
      
       return(
        <div>
          <div className=' flex flex-col w-44 justify-center items-center h-full'>
        <div className=' mt-2 pr-1 pl-1'>
          <label className=' text-base '>
            Color
            <input type="color" 
            defaultValue={prop.color===undefined?"black":prop.color}
            className="text-gray-900 text-sm block w-full rounded p-1" onChange={handleColorChange} />
          </label>
          <label className=' text-base '>
            Font Size
            <input
              type="number"
              onChange={handleFontSize}
              defaultValue={prop.fontSize}
              style={{color:"black"}}
              className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
            />
          </label>
          <div className=' flex w-full flex-col col-span-6 h-7 mt-2' style={{height:"28px"}}>
            <div className=' flex justify-between h-full'>
                 {
                  Headings.map((i,index)=>
                  <span key={index} selected={prop.size} className=' h-full flex justify-center items-center cursor-pointer' style={{background:prop.size===i||currentHead===i?"#2B2B2":"#5E5E5E",width:"30px",}} onClick={()=>handleHeading(i)}>{i}</span>
                  )
                 }
            </div>
          </div>
          <div id="font-list" data-fonts=""></div>
        </div>
      </div>
        </div>
       )
}

export default HeadingEditor