import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import ArrowSmallUpIcon from "@heroicons/react/24/outline/ArrowSmallUpIcon";

const SidebarItem = ({ visible, title, children, onChange }) => {
    const handleClick = () => {
      if (onChange) {
        onChange(!visible);
      }
    };
  
    return (
      <div className="flex flex-col w-full">
        <div
          onClick={handleClick}
          className={`h-12 cursor-pointer bg-white border-b last:border-b-0 flex items-center px-2 ${visible ? 'shadow-sm' : ''}`}
        >
          <div className="flex-1 flex items-center">
            <Squares2X2Icon className="h-4 ml-2 mr-4" />
            <h2 className="text-xs uppercase">{title}</h2>
          </div>
          <a style={{ transform: `rotate(${visible ? 180 : 0}deg)` }}>
            <ArrowSmallUpIcon className="h-4" />
          </a>
        </div>
        {visible && (
          <div className="w-full flex-1 overflow-auto">{children}</div>
        )}
      </div>
    );
};

export default SidebarItem