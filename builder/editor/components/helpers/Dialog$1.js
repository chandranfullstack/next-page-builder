import { useState } from "react";
import { Root,Portal,Overlay,Content,Title,Close } from "@radix-ui/react-dialog";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import cx from "classnames"

const Dialog$1 = ({ open, setOpen, node, actions }) => {
    const [id, setId] = useState(node.data.props.id);
  
    const handleSave = () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        prop.id = id;
      });
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <Root open={open} onOpenChange={setOpen}>
        <Portal>
          <Overlay />
          <Content className={cx("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")}>
            <Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Update Section Id
            </Title>
            <div className="mt-8 mb-4">
              <div>
                <div>
                  <div className="flex justify-center mb-4 flex-col">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
                      placeholder="Eg. section-1"
                      defaultValue={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Close
                onClick={handleSave}
                className={cx("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", "bg-blue-600 text-white hover:bg-blue-700 border border-transparent")}
              >
                Save
              </Close>
            </div>
            <Close
              onClick={handleClose}
              className={cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")}
            >
              <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </Close>
          </Content>
        </Portal>
      </Root>
    );
};

export default Dialog$1