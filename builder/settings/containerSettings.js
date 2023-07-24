import { useNode } from "@craftjs/core"


const containerSetting=()=>{
    const {actions}=useNode()
    const handleColor=(e)=>{
      console.log(e.target.value)
      actions.setCustom((props)=>props.background=e.target.value)
    }
    return(
      <div className=' flex  w-48 h-full'>
        <div className='flex flex-col'>
         <label>
           Gap
           <input 
           type="number" 
           style={{color:"black"}}
           className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
           />
         </label>
         </div>
         <div>
           <label>
             direction
             <input value={"Row"}  style={{color:"black"}}
              className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
             <input value={"Column"}  style={{color:"black"}}
              className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
           </label>
         </div>
         <div>
           <label>
              Coloumns
            <input type="button" title='+'  style={{color:"black"}}
              className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
           </label>
         </div>
         <div>
          <lable>
            Rows
            <input type='button' title='+'  style={{color:"black"}}
              className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400' />
          </lable>
         </div>
      </div>
    )
}

export default containerSetting
  