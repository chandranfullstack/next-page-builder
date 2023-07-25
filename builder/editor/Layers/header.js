import { useEditor } from "@craftjs/core";
import { useContext,useState } from "react";
import { ThemeContext } from "../../context/builder-context";
import ArrowUturnLeftIcon from "@heroicons/react/24/outline/ArrowUturnLeftIcon";
import ArrowUturnRightIcon from "@heroicons/react/24/outline/ArrowUturnRightIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import PencilSquareIcon from "@heroicons/react/24/outline/PencilSquareIcon";
import Select  from "../components/helpers/Select"
import SimpleTooltip from "../components/toolTip";

const Header = () => {
    const { state, query, actions } = useEditor((state2, query2) => ({ state: state2, query: query2 }));
    const { updateIndex, themeNames, themeIndex, currentPage } = useContext(ThemeContext);
    const [selectOpen, setSelectOpen] = useState(false);
    const enabled = state.options.enabled;
  
    const onChange = (name) => {
      updateIndex(themeNames.indexOf(name));
    };
  
    const togglePreview = () => {
      actions.setOptions((o) => o.enabled = !enabled);
    };
  
    return (
      <div className="transition w-full bg-gray-300">
        <div className="flex px-4 py-2 justify-end">
          {enabled && (
            <div className="flex-1 flex">
              <SimpleTooltip text="Undo" side="bottom" offset={4}>
                <a
                  className={`${
                    query.history.canUndo() ? 'hover:opacity-50 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                  } p-2`}
                  onClick={actions.history.undo}
                >
                  <ArrowUturnLeftIcon className="h-4" />
                </a>
              </SimpleTooltip>
              <SimpleTooltip text="Redo" side="bottom" offset={4}>
                <a
                  className={`${
                    query.history.canRedo() ? 'hover:opacity-50 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                  } p-2`}
                  onClick={actions.history.redo}
                >
                  <ArrowUturnRightIcon className="h-4" />
                </a>
              </SimpleTooltip>
              <div className="mr-auto ml-auto">
                <div
                  className="flex rounded py-2 px-4 transition cursor-pointer items-center justify-center mr-auto ml-auto"
                  onClick={() => setSelectOpen(true)}
                >
                  {themeNames[themeIndex]}
                  <ChevronDownIcon className="h-4 ml-2" />
                </div>
                <Select defaultValue={themeNames[themeIndex]} values={themeNames} open={selectOpen} setOpen={setSelectOpen} onChange={onChange} />
              </div>
            </div>
          )}
        <div className="bg-gray-600 py-2 px-6  text-white">
          <a href="/page-list">Back</a>
        </div>
        <div className="flex">
          {enabled ? (
            <a
              className="flex bg-green-600 text-white rounded py-2 px-4 transition cursor-pointer items-center"
              onClick={togglePreview}
            >
              <CheckIcon className="h-4  mr-2" />
              Finish Editing
            </a>
          ) : (
            <a
              className="flex bg-primary text-white rounded py-2 px-4 transition cursor-pointer items-center"
              onClick={togglePreview}
            >
              <PencilSquareIcon className="h-4 w-4 mr-2" />
              Edit
            </a>
          )}
        </div>
      </div>
      </div>
    );
};

export default Header