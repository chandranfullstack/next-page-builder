import { useNode } from "@craftjs/core"


export const ParagraphSettings=()=>{
    const {actions,prop}=useNode((node)=>({prop:node.data.props}))

    const handleColorChange=(e)=>{
      actions.setProp((props)=>{
        props.color=e.target.value
      },500)
    }

    const handleFontSize=(e)=>{
      const fontsize=e.target.value+"px"
      actions.setProp((props)=>{
       props.fontsize=fontsize
      },500)
    }

    const handleFontWeight=(e)=>{
      actions.setProp((props)=>{
        props.fontweight=e.target.value
      },500)
    }

    const handleLineHeight=(e)=>{
      const lineheight=e.target.value+"px"
      actions.setProp((props)=>{props.lineheight=lineheight},500)
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
          defaultValue={prop.fontsize.slice(0,-2)}
          style={{color:"black"}}
          className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
        />
      </label>
      <label className=' text-base '>
        Font Weight
        <input
          type="number"
          onChange={handleFontWeight}
          defaultValue={prop.fontweight}
          style={{color:"black"}}
          className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
        />
      </label>
      <label className=' text-base '>
        Line height
        <input
          type="number"
          onChange={handleLineHeight}
          defaultValue={prop.lineheight.slice(0,-2)}
          style={{color:"black"}}
          className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
        />
      </label>
    </div>
  </div>
    </div>
    )
}
