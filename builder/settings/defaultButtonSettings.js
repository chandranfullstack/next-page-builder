import { useNode } from "@craftjs/core"

const DefaultButtonSettings=()=>{
    const {actions,prop}=useNode((node)=>({prop:node.data.props}))
    const handleColor=(e)=>{
        console.log(e.target.value)
        actions.setProp((props)=>{
          props.color=e.target.value
          console.log(props.color,props,prop)
        },500)
    }
  
    const handleBackground=(e)=>{
      const background=e.target.value
      actions.setProp((props)=>{
        props.background=background
      },500)}
  
    const handleWidth=(e)=>{
      const width=e.target.value+"px"
      actions.setProp((props)=>{
        props.width=width
      },500)
    }
  
     const handleHeight=(e)=>{
       const height=e.target.value+"px"
       actions.setProp((props)=>{
        props.height=height
       },500)
     }
    
    return(
      <div className=' flex flex-row w-48 mt-2'>
      <div className='w-full p-2'>
        <label className="text-sm">
          color
          <input 
          type="color" 
          style={{color:"black",border:"1px solid gray"}} 
          defaultValue={prop.color} 
          className="text-black w-full" 
          onChange={handleColor}
          />
        </label>
        <label className='text-sm'>
          background
          <input 
          type='color'
          onChange={handleBackground}
          defaultValue={prop.background}
          style={{color:"black",border:"1px solid gray"}}
          className="w-full"
          />
        </label>
        <lable className="text-sm">
          width
          <input 
          type='number'
          onChange={handleWidth}
          min={50}
          max={200}
          defaultValue={prop.width.slice(0,-2)}
          style={{color:"black",border:"1px solid gray"}}
          className="w-full"
          />
        </lable>
        <lable className="text-sm">
          height
          <input 
          type='number'
          onChange={handleHeight}
          defaultValue={prop.height.slice(0,-2)}
          style={{color:"black",border:"1px solid gray"}}
          className="w-full"
          />
        </lable>
      </div>
      </div>
    )
}

export default DefaultButtonSettings