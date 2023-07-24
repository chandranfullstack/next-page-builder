import { useNode,useEditor } from "@craftjs/core";
import containerSetting from "../settings/containerSettings";

export const Container1 = ({ children }) => {
    const { connectors } = useNode();
    const { selected } = useEditor((state) => {
      const [currentNodeId] = state.events.selected;
      let selected;
  
      if ( currentNodeId ) {
        selected = {
          id: currentNodeId,
          name: state.nodes[currentNodeId].data.name,
          settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings
        };
      }
      //console.log(selected,":selected",state.nodes[currentNodeId],"node:",node)
      return {
        selected
      }
    });
    
    return (
      <div
        ref={(ref) => connectors.connect(ref)}
        style={{ width: "100%", minHeight: "400px" ,border:"1px solid black"}}
        className="bg-wheate grid grid-flow-col grid-cols-3"
      >
        {children}
      </div>
    );
  };
  
  Container1.craft={
    displayName:"Container",
    props:{},
    rules:{
      canDrag:()=>true
    },
    related:{setting:containerSetting}
  }