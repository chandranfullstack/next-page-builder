import { useContext ,useState,useEffect} from "react";
import { ThemeContext } from "../../context/builder-context";
import { useEditor } from "@craftjs/core";
import SidebarItem from "./category";
import Item from "./item";
const Category=SidebarItem

const Sidebar = () => {
    const { components, categories } = useContext(ThemeContext);
    const { enabled, connectors } = useEditor(({ options }) => ({ enabled: options.enabled }));
    const [toolbarVisible, setToolbarVisible] = useState([]);
  
    useEffect(() => {
      const v = Array.from({ length: categories.length }, (_, i) => i === 0);
      setToolbarVisible(v);
    }, [categories]);
  
    const toggleToolbar = (index) => {
      setToolbarVisible((t) => t.map((c, i) => (i === index ? !c : c)));
    };
  
    return (
      <div
        className={`toolbox h-full flex flex-col bg-white ${enabled ? 'w-48' : 'w-0 opacity-0'} fixed section`}
        style={{ transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)' }} id='section1'
      >
        <div className="flex flex-1 flex-col items-center pt-3 overflow-scroll hide-scrollbars">
          {categories.map((b, j) => (
            <Category key={j} title={b} visible={toolbarVisible[j]} onChange={() => toggleToolbar(j)}>
              {components &&
                components
                  .filter((c) => c.category === b)
                  .map((c, i) => (
                    <Item connectors={connectors} c={c} key={i} />
                  ))}
            </Category>
          ))}
        </div>
      </div>
    );
};

export default Sidebar;
