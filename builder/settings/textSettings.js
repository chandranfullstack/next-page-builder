import { useNode,useEditor } from "@craftjs/core";
import { useState,useEffect } from "react";
import { textStyle } from "../../themes/textStyle";

const TextEditor = () => {
    const {prop, props1,actions,node ,color,connectors} = useNode(node => ({
      prop: node.data.props,
      props1:node.data,
      node:node,
      color:node.data.props.color
    }));
    //console.log(props,props1)
    const { enabled,state } = useEditor((state) => ({ enabled: state.options.enabled ,state:state}));
    //console.log(props,"props",node)
    //const [textStyle, setTextStyle] = useState({
    //  color: '#333',
    //  fontSize: '16px',
    //  fontFamily: 'Arial, sans-serif',
    //  fontWeight: 'normal',
    //});
    const [styleKeys,setStyleKeys]=useState([])
    const [currentStyle,setCurrentStyle]=useState(null)
    useEffect(()=>{
      if(styleKeys.length!==Object.keys(textStyle).length){
        for (const key in textStyle) {
          styleKeys.push(key)
          setCurrentStyle(textStyle[prop.textStyle])
        }
      }
    },[styleKeys])
    //console.log(styleKeys,"styleKeys")
    const handleTextChange=(e)=>{
      console.log(e.target.value,"text value",enabled)
      actions.setProp((props) => {
        props.text=e.target.value  
        console.log(props.text,prop.text)
      },500);
    }
  
    const handleColorChange = (e) => {
      const  color= e.target.value
      console.log(color,state.nodes,state,connectors)
      actions.setProp((props)=>{ 
        //props.color=color
        //if(!props[prop.id]){
        //  prop[props.id] = {};
        //  prop[props.id].color = color
        //}
        props.color=color
        console.log(props,props.color,props[prop.id])
      })
    };
   //console.log(currentStyle,"currentStyle")
    const handleFontSizeChange = (e) => {
        const fontSize= e.target.value + 'px'
        console.log(fontSize,"fontZixe",prop.fontSize)
        actions.setProp((props)=>{
          console.log(props,props.fontsize)
          props.fontsize=fontSize
          console.log(prop,"prop")
           //props.fontsize=fontSize
        })
    };
  
  
    const handleFontWeightChange = (e) => {
      console.log(e.target.value)
      actions.setProp((props)=>{
        props.fontWeight=e.target.value
        console.log(props,"props weight",props.fontWeight,prop)
      })
    };
     
    const handleLineHeightChange=(e)=>{
      console.log(prop)
      actions.setProp((props)=>{
        props.lineHeight=e.target.value + "px"
        console.log(props.lineHeight,props,"line height",prop)
      })
    }
  
    const handleStyleChange=(e)=>{
      console.log(e.target.value)
      setCurrentStyle(textStyle[e.target.value])
      actions.setProp((prop)=>{
        prop.textStyle=e.target.value
      })
    }
    // const handleFontWeightChange = (e) => {
    //   console.log(e.target.value)
    //   actions.setProp((props)=>{
    //     props.fontweight=e.target.value
    //     console.log(props,"props")
    //   })
    // };
  
    return (
      <div className=' flex flex-col w-44 justify-center items-center h-full'>
        <div className=' mt-2 pr-1 pl-1'>
        <label className=' text-base flex flex-col justify-center items-center' >
            Font Styles
            <select  
            onChange={handleStyleChange} 
            style={{color:"white"}} 
            className='border border-gray-300 text-gray-900 text-base block w-full rounded p-2 bg-gray-300'
            >
              <option selected value={prop.textStyle} style={{color:"rgb(235, 235, 235)",background:"#5E5E5E"}}>{prop.textStyle}</option>
              {
                styleKeys.map((l,index)=>
                  <option value={l} key={index} className=' p-2 ' style={{color:"white",background:"#5E5E5E",padding:"8px"}}>{l}</option>
                )
              }
            </select>
            </label>
         {/* <label className='text-base'>
            Text
            <textarea
            class=" w-full text-gray-900 text-sm p-2 bg-gray-400"
            rows="4"
            defaultValue={prop.text} onInput={(e)=>handleTextChange(e)}></textarea> 
             <input type="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" defaultValue={prop.text} onChange={handleColorChange} />  
          </label> */}
          <label className=' text-base '>
            Color
            <input type="color" 
            defaultValue={prop.color===undefined?"#000000":prop.color}
            className="text-gray-900 text-sm block w-full rounded p-1" onChange={handleColorChange} />
          </label>
          <label className=' text-base '>
            Font Size
            <input
              type="text"
              defaultValue={currentStyle&&currentStyle.fontSize}
              onChange={handleFontSizeChange}
              style={{color:"white"}}
              readOnly
              className=' text-black text-sm  w-full rounded placeholder:p-2 p-2 bg-gray-400'
            />
          </label>
           <label className=' text-base '>
            Font Weight
            <input
              type="text"
              defaultValue={currentStyle&&currentStyle.fontWeight}
              onChange={handleFontWeightChange}
              style={{color:"white"}}
              readOnly
              className=' text-black text-sm  block w-full rounded bg-gray-400 p-2'
            />
          </label>
          <label className=' text-base '>
            Line height
            <input
              type="text"
              defaultValue={currentStyle&&currentStyle.lineHeight}
              onChange={handleLineHeightChange}
              style={{color:"white"}}
              readOnly
              className=' border border-gray-300 text-black text-sm rounded p-2 bg-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </label> 
        </div>
      </div>
    );
  };

export default TextEditor