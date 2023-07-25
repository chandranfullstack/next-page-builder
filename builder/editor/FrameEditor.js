import { useContext,useEffect } from "react";
import { ThemeContext } from "../context/builder-context";
import { useEditor,Element,Frame, } from "@craftjs/core";
import { loadTemplate } from "../functions";
import { Container } from "../resolver/resolver";

const FrameEditor = ({ data, standaloneServer ,pages}) => {
    const { actions } = useEditor();
    const {pageList,setPageList,currentPage}=useContext(ThemeContext)
    if(pages){
      setPageList(pages)
    }
    const loadData = async () => {
      if (data) {
        const templateData = data.find(( name ) =>name.name === "\\"+localStorage.getItem("currentPage") );
        if(templateData!==undefined&&templateData.content!==undefined){
        const content = JSON.parse(templateData.content);
        actions.deserialize(content);
      }else{
        const result = await loadTemplate(standaloneServer,localStorage.getItem("currentPage"));
        const content = JSON.parse(result);
        actions.deserialize(content);
      }
      } else {
        const result = await loadTemplate(standaloneServer,localStorage.getItem("currentPage"));
        const content = JSON.parse(result);
        actions.deserialize(content);
      }
    };
    useEffect(() => {
      loadData();
    }, []);
    return(
      !data?
      // <Viewport>
        <Frame>
          <Element canvas={true} is={Container} children={[]} custom={{displayName:"App"}}>
          </Element>
        </Frame>
      // </Viewport> 
      :
      <div className='page-container' >
        <Frame>
        </Frame>
      </div>
      )
  };

export default FrameEditor