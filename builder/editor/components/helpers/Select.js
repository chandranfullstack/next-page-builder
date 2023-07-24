import { Root,Content,Viewport,Group,Item,ItemIndicator,ItemText } from "@radix-ui/react-select";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import React from "react"
import cx from "classnames"
// const Select=({defaultValue,values,open,setOpen,onChange})=>{
//     return(
//         <Root>
//             <Content className="z-50 top-2">
//                 <Viewport className=" bg-white p-2 rounded-lg shadow-lg">
//                    <Group>
//                      {
//                         values.map((f,i)=>(
//                             <Item value={i} key={f} className=" relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium hover:opacity-70 cursor-pointer select-none"/>,
//                             <ItemText>{f}</ItemText>,
//                             <ItemIndicator className="absolute left-2 inline-flex items-center">
//                                <CheckIcon />
//                             </ItemIndicator>
//                         ))
//                      }
//                    </Group>
//                 </Viewport>
//             </Content>
//         </Root>
//     )
// }

const Select = ({ defaultValue, values, open, setOpen, onChange }) => {
    return  React.createElement(Root, {
      defaultValue,
      onValueChange: onChange,
      open,
      onOpenChange: (e) => setOpen(e)
    },  React.createElement(Content, {
      className: "z-50 top-2"
    },  React.createElement(Viewport, {
      className: "bg-white p-2 rounded-lg shadow-lg"
    },  React.createElement(Group, null, values.map((f, i) =>  React.createElement(Item, {
      key: i,
      value: f,
      className: cx["default"]("relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 font-medium", "hover:opacity-70 cursor-pointer select-none")
    },  React.createElement(ItemText, null, f),  React.createElement(ItemIndicator, {
      className: "absolute left-2 inline-flex items-center"
    },  React.createElement(CheckIcon, null))))))));
  };

export default Select