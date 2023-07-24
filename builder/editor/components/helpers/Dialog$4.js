import React from "react"

const Dialog$4 = ({ open, setOpen, node, actions }) => {
    var _a, _b, _c, _d;
    const props = node.data.props;
    const key = props.propId;
    const [link, setLink] = React.useState((_c = (_a = node.data.props[key]) == null ? void 0 : _a.link) != null ? _c : (_b = node.dom) == null ? void 0 : _b.href);
    const [newTab, setNewTab] = React.useState((_d = node.data.props[key]) == null ? void 0 : _d.newTab);
  
    const handleSave = () => {
      setOpen(false);
      actions.setProp(node.id, (prop) => {
        if (!prop[key]) prop[key] = {};
        prop[key].link = link;
        prop[key].newTab = newTab;
      });
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-4 w-[95vw] max-w-md md:w-full">
              <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Update Link
              </div>
              <div className="mt-8 mb-4">
                <div>
                  <div className="flex justify-center mb-4 flex-col">
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
                      placeholder="Eg. https://github.com/LiveDuo/destack"
                      defaultValue={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                    <div className="flex items-center ml-4">
                      <p>Open in new tab</p>
                      <input
                        type="checkbox"
                        defaultChecked={newTab}
                        onChange={(e) => setNewTab(e.target.checked)}
                        className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleSave}
                  className="inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 border border-transparent"
                >
                  Save
                </button>
              </div>
              <button
                onClick={handleClose}
                className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-500 hover:text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default Dialog$4