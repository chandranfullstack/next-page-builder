import FrameEditor from "./FrameEditor";
import { useContext,useEffect} from "react";
import { Editor as Editors } from "@craftjs/core";
import { ThemeContext } from "../context/builder-context";
import CustomEditorElement from "./components";
import Viewport from "./viewport";
import { saveTemplateDebounce } from "../functions";

const Editor = ({ data, standaloneServer,pages }) => {
    const { resolver, setStandalone,currentPage } = useContext(ThemeContext);
    useEffect(() => setStandalone(standaloneServer), []);
    const onStateChange = (e) => {
      saveTemplateDebounce(e, standaloneServer,localStorage.getItem("currentPage"));
    };
  
return(
      <Editors
      resolver={resolver} 
      enabled={!data} 
      onRender={CustomEditorElement}
      onNodesChange={onStateChange}
      >
      <Viewport>
        <FrameEditor data={data} standaloneServer={standaloneServer} />
      </Viewport>
      </Editors>
)};

export default Editor
  