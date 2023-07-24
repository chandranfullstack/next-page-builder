import { useEditor } from "@craftjs/core";
import { useEffect } from "react";
import Sidebar from "./Layers/sidebar";
import Header from "./Layers/header";
import LayerSide from "./Layers/rightlayer";


const Viewport = ({ children }) => {
    const { connectors, actions ,enabled} = useEditor((state) => ({ enabled: state.options.enabled }));
    
    useEffect(() => {
      setTimeout(() => {
        actions.setOptions((o) => o.enabled = true);
      }, 200);
    }, [actions.setOptions]); 
  
    return (
      <div className="viewport">
        <div className="flex h-full overflow-hidden flex-row w-full">
          <Sidebar className="fixed" />
          <div className={`page-container flex flex-1 h-full flex-col section`} id="section1" style={{marginLeft:`${enabled ? '192px' : ''}`}}>
            <Header />
            <div
              className="craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto"
              ref={(ref) => {
                connectors.select(connectors.hover(ref, ""), "")
              }}
            >
              <div className="relative flex-col  items-center pt-8 justify-center" style={{ margin: 'auto', padding: '50px' }}>
                {children}
              </div>
              {/* <div className="flex items-center justify-center w-full pt-6 text-xs text-gray-400">
                Powered by{' '}
                <a className="mx-1" target="_blank" href="https://craft.js.org/">
                  Craft.js
                </a>{' '}
                and{' '}
                <a className="mx-1" target="_blank" href="https://tailwindui.com/">
                  Tailwind CSS
                </a>
              </div> */}
            </div>
          </div>
          <LayerSide />
        </div>
      </div>
    );
};

export default Viewport
  