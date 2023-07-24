import { useContext } from "react";
import { ThemeContext } from "../../context/builder-context";
import { useEditor } from "@craftjs/core";
import { Layers } from "@craftjs/layers";

const CustomizeOptions = () => {
    const {isView,setView,openLink,openHash,openButton,openSvg} = useContext(ThemeContext)
    const {dom}=useEditor()
    const handleOptions = () => {
      setView(!isView);
    };
  
    
    return (
      <div>
        <div onClick={handleOptions}>
          <div className="bg-gray-600 text-white flex flex-row px-4 py-3 justify-evenly cursor-pointer w-48" style={{ padding: '4px 10px 4px 10px' }}>
            Customize
            {/* <ChevronDownIcon className={`h-4 ml-2 ${isView ? 'transform rotate-180' : ''}`} /> */}
          </div>
        </div>
        {isView && (
          <div className="text-white w-48">
            
          </div>
        )}
      </div>
    );
  };
  
  const LayerSide = () => {
    const { enabled } = useEditor(({ options }) => ({ enabled: options.enabled }));
    
    
    return (
      <div className={`${enabled ? 'w-48' : 'w-0 opacity-0'} section`} id='section3' style={{backgroundColor:"#2B2B2B"}}>
        <CustomizeOptions />
        <Layers />
        <div id="layer" className=' flex flex-col items-center justify-center'>
        </div>
      </div>
    );
};

export default LayerSide