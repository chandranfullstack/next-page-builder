import { useState } from "react";
import { Root,Portal,Title,Description,Close,Content,Overlay} from "@radix-ui/react-dialog";
import cx from "classnames"
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { capitalize } from "../../../functions";
import Select from "./Select";

const options = ["url", "email", "submit"];
const methods = ["GET", "POST"];

const Dialog$2 = ({ open, setOpen, node, actions }) => {
    var _a, _b;
    const [openSelect, setOpenSelect] = useState(false);
    const props = node.data.props;
    const key = props.propId;
    const [url, setUrl] = useState(props.url);
    const [email, setEmail] = useState(props.email);
    const [submitUrl, setSubmitUrl] = useState(props.submitUrl);
    const [submitMethod, setSubmitMethod] = useState((_a = props.submitMethod) != null ? _a : "GET");
    const [submitAsync, setSubmitAsync] = useState(props.submitAsync);
    const [methodSelect, setMethodSelect] = useState(props.methodSelect);
    const [newTab, setNewTab] = useState(props.newTab);
    const [type, setType] = useState((_b = props.type) != null ? _b : "url");
    const onChange = (e) => {
      setType(e.toLowerCase());
    };
    return (
        <Root open={open} onOpenChange={setOpen}>
          <Portal>
            <Overlay>
                <Content className="fixed shadow bg-white rounded-lg p-4 w-[95vw] max-w-md md:w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Update Button
                  </Title>
                  <Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                    <div className="mt-4 mb-4">
                       <div>
                        <div className="flex rounded py-2 px-4 transition cursor-pointer items-center ml-2 mb-4" onClick={()=>setOpenSelect(true)}>
                            <ChevronDownIcon  className="h-4 w-4 ml-2"/>
                           {capitalize(type)}
                        </div>
                        <Select 
                        defaultValue={type}
                        values={options.map((o)=>capitalize(o))}
                        setOpen={setOpenSelect}
                        open={openSelect}
                        onChange={onChange}
                        />
                        {
                            type==="url"&&<div className="flex justify-center mb-4 flex-col">
                            <input type="text" defaultValue={url} placeholder="https://fulgid.in/home"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4" onChange={(e)=>setUrl(e.target.value)} />
                            <div className=" flex items-center ml-4">
                            <p>Open in new tab</p>
                            <input type="checkbox" defaultChecked={newTab} onChange={(e)=>setNewTab(e.target.value)} className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" />
                            </div>
                            </div>
                        }
                        {
                            type==="email"&&<div className="flex justify-center mb-4">
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" defaultValue={email} placeholder="ping@fulgid.in" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                        }
                        {
                            type==="submit"&&<div className="flex justify-center mb-4 flex-col">
                            <div className="flex justify-end mb-4">
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="api/submit/" defaultValue={submitUrl} onChange={(e)=>setSubmitUrl(e.target.value)}  />
                            <div className="flex rounded py-2 px-4 transition cursor-pointer items-center ml-2" onClick={()=>setMethodSelect(true)}>
                            {submitMethod +" "}
                            <ChevronDownIcon className="h-4 w-4 ml-2" />
                            <Select 
                            defaultValue={submitMethod}
                            values={methods}
                            open={methodSelect}
                            setOpen={setMethodSelect}
                            onChange={(e)=>setSubmitMethod(e)}
                            />
                            </div>
                            </div>
                            <div className="flex items-center ml-4">
                            <p>Async</p>
                            <input type="checkbox" defaultChecked={submitAsync} onChange={(e)=>setSubmitAsync(e.target.value)} className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"/>
                            </div>
                            </div>
                        }
                        <div className="mt-4 flex justify-end">
                            <Close
                            className="inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 border border-transparent"
                            onClick={() => {
                                setOpen(false);
                                actions.setProp(node.id, (prop) => {
                                  if (!prop[key])
                                    prop[key] = {};
                                  prop[key].type = type.toLowerCase();
                                  prop[key].url = url;
                                  prop[key].email = email;
                                  prop[key].newTab = newTab;
                                  prop[key].submitUrl = submitUrl;
                                  prop[key].submitMethod = submitMethod;
                                  prop[key].submitAsync = submitAsync;
                                });
                              }}
                             >Save</Close>
                             <Close onClick={()=>setOpen(false)} className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1">
                             <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                             </Close>
                        </div>
                       </div>
                    </div>
                  </Description>
                </Content>
            </Overlay>
          </Portal>
        </Root>
    )
};

export default Dialog$2
  