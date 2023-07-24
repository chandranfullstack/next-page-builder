import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { Root,Overlay,Portal,Content,Title ,Close} from "@radix-ui/react-dialog";
import { uploadFile } from "../../../functions";
import { useState } from "react";
import cx from "classnames"
import React from "react"

const Dialog$3 = ({open, setOpen, node, actions}) => {
  var _a, _b, _c;
  const props = node.data.props;
  const propId = props.propId;
  const [url, setUrl] = React.useState((_c = (_a = props[propId]) == null ? void 0 : _a.url) != null ? _c : (_b = node.dom) == null ? void 0 : _b.src);
  const [text, setText] = useState("");

  const onUpload = async (e) => {
    const file = e?.target.files[0];
    const response = await uploadFile(file, false);
    setUrl(response[0]);
  };

  const onChange = async () => {
    setUrl(text);
  };

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Portal>
        <Overlay>
          <Content className={cx("fixed shadow bg-white rounded-lg p-4", "w-[95vw] max-w-md md:w-full", "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")}>
            <Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Upload Image
            </Title>
            <Content url={url} text={text} setText={setText} onUpload={onUpload} onChange={onChange} />
            <div className="mt-4 flex justify-end">
              <button
                style={{ marginRight: "auto" }}
                className={cx("rounded-md px-4 py-2 text-sm font-medium bg-transparent border", "text-blue-500 hover:opacity-50 border border-transparent")}
                onClick={() => {
                  setUrl(null);
                  setText("");
                }}
              >
                Replace
              </button>
              <Close
                onClick={() => {
                  setOpen(false);
                  actions.setProp(node.id, (prop) => {
                    if (!prop[propId])
                      prop[propId] = {};
                    prop[propId].url = url;
                  });
                }}
                className={cx("inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium", `bg-blue-600 text-white border border-transparent ${url ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"}`)}
                disabled={!url}
              >
                Save
              </Close>
            </div>
            <Close
              onClick={() => setOpen(false)}
              className={cx("absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1")}
            >
              <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
            </Close>
          </Content>
        </Overlay>
      </Portal>
    </Root>
  );
};

export default Dialog$3