import { useNode,useEditor } from "@craftjs/core";
import { useEffect,useContext ,useCallback,useState} from "react";
import { ThemeContext } from "../../context/builder-context";
import Dialog from "./helpers/Dialog";
import Dialog$1 from "./helpers/Dialog$1";
import Dialog$2 from "./helpers/Dialog$2";
import Dialog$3 from "./helpers/Dialog$3";
import Dialog$4 from "./helpers/Dialog$4";
import  ReactDOM  from "react-dom"
import React from "react"
import ArrowsPointingOutIcon from "@heroicons/react/24/outline/ArrowsPointingOutIcon";
import ArrowSmallUpIcon from "@heroicons/react/24/outline/ArrowSmallUpIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PhotoIcon from "@heroicons/react/24/outline/PhotoIcon";
import LinkIcon from "@heroicons/react/24/outline/LinkIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";


const  CustomEditorElement= ({render}) => {
    const { id } = useNode();
    const { actions, isActive,query } = useEditor((_, query) => ({
      isActive: query.getEvent('selected').contains(id),
    }));
    const { connectors, node } = useNode((node2) => ({ node: node2 }));
    const {props}=useNode()
    const {setProp}=useNode().actions
    const data = node.data;
    const dom = node.dom;
    const displayName = (data.custom?.displayName) || data.displayName;
    const isRootChild = data.parent === 'ROOT';
    const isChild=displayName==='Heading'
    const showFocus = id !== 'ROOT' && displayName !== 'App';
    const currentRef = React.useRef();
    const {  isSelected } = useNode((node) => ({
      isSelected: node.events.selected,
    }));
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode} = useNode((state) => ({
      hasSelectedNode: state.events.selected.size > 0,
      hasDraggedNode: state.events.dragged.size > 0,
    }));
    const { curentState} = useEditor((state) => ({curentState:state.nodes}));
    const {
      openLink,setOpenLink,openImage,setOpenImage,
      openButton,setOpenButton,openHash,setOpenHash,
      openSvg,setOpenSvg,isView,setView
    }=useContext(ThemeContext)
    
    useEffect(() => {
      if (dom) {
        if (isActive || node.events.selected){
          setView(true)
          dom.classList.add('component-selected');
        }else{
          //setView(!isView)
          dom.classList.remove('component-selected');
        }
      }
    }, [dom, isActive, node.events.hovered]);
    const getPos = useCallback((dom2) => {
      const { top, left, bottom } = dom2 ? dom2.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
      return { top: `${top > 0 ? top : bottom}px`, left: `${left}px` };
    }, []);
    const scroll = useCallback(() => {
      if (!currentRef.current)
        return;
      const { top, left } = getPos(dom);
      currentRef.current.style.top = top;
      currentRef.current.style.left = left;
    }, [dom, getPos]);
  
    useEffect(() => {
      const el = document.querySelector('.craftjs-renderer');
      el?.addEventListener('scroll', scroll);
      return () => {
        el?.removeEventListener('scroll', scroll);
      };
    }, [scroll]);
    
  
    const { selected } = useEditor((state) => {
      const [currentNodeId] = state.events.selected;
      let selected;
  
      if ( currentNodeId ) {
        selected = {
          id: currentNodeId,
          name: state.nodes[currentNodeId].data.name,
          settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
          isDeletable:query.node(currentNodeId).isDeletable()
        };
      }
      console.log(selected,":selected")
      return {
        selected
      }
    });
   
    
return (
      <>
        {node.events.selected || isActive ? ReactDOM.createPortal(
          <div
            ref={currentRef}
            //className=' bg-red-200 leading-3'
            className=" text-white   items-center leading-3 text-xs"
           // style={{
           //   height: '30px',
           //   marginTop: '-29px',
           //   left: getPos(dom).left,
           //   top: getPos(dom).top,
           //   zIndex: 9999,
           // }}
          >
            <h2 
            className="flex-1 mr-4"
            style={{color:"rgb(235, 235, 235)"}}
            >{displayName}</h2>
            {isRootChild && (
              <a 
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
              ref={connectors.drag}>
                <ArrowsPointingOutIcon className="h-4" /> Drag
              </a>
            )}
            {/* {isRootChild && (
              <a
                className="mr-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenHash(true);
                }}
              >
                <HashtagIcon className="h-4" />
              </a>
            )} */}
            {showFocus && (
              <a
                className="cursor-pointer flex w-48 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
                style={{justifyContent:"space-around"}}
                onClick={() => {
                  actions.selectNode(data.parent);
                }}
              >
                <ArrowSmallUpIcon className="h-4" /> Up
              </a>
            )}
            {dom?.nodeName === 'IMG' && (
              <a
              className="cursor-pointer flex w-48 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenImage(true);
                }}
              >
                <PhotoIcon className="h-4" /> Image Change
              </a>
            )}
            {dom?.nodeName === 'svg' && (
              <a
                className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
                style={{justifyContent:"space-around"}}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenSvg(true);
                }}
              >
                <PhotoIcon className="h-4" /> upload svg
              </a>
            )}
            {dom?.nodeName === 'A' && (
              <a
                className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
                style={{justifyContent:"space-around"}}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenLink(true);
                }}
              >
                <LinkIcon className="h-4" /> update link
              </a>
            )}
            {dom?.nodeName === 'LINK' && (
              <a
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenLink(true);
                }}
              >
                <LinkIcon className="h-4" /> Link
              </a>
            )}
             {dom?.nodeName === 'APPBUTTON' && (
              <a
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenButton(true);
                }}
              >
                <CircleStackIcon className="h-4" /> 
              </a>
            )}
            {dom?.nodeName === 'BUTTON' && (
              <a
                className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
                style={{justifyContent:"space-around"}}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenButton(true);
                }}
              >
                <CircleStackIcon className="h-4" /> update link
              </a>
            )}
            {isRootChild&&(
              <a
              className="cursor-pointer flex w-44 p-2 justify-around bg-primary border-zinc-50 hover:bg-gray-500"
              style={{justifyContent:"space-around"}}
                onClick={(e) => {
                  e.stopPropagation();
                  actions.delete(id);
                }}
              >
                <TrashIcon className="h-4" /> Delete
              </a>
            )}
            <Dialog$4 open={openLink} setOpen={setOpenLink} node={node} actions={actions} />
            <Dialog$3 open={openImage} setOpen={setOpenImage} node={node} actions={actions} />
            <Dialog$1 open={openHash} setOpen={setOpenHash} node={node} actions={actions} />
            <Dialog open={openSvg} setOpen={setOpenSvg} node={node} actions={actions} />
            <Dialog$2 open={openButton} setOpen={setOpenButton} node={node} actions={actions} />
            {/* <LayerSide  node={node} /> */}
            { 
              selected.settings && React.createElement(selected.settings)
            }
          </div>,
          // document.querySelector('.page-container')
          document.getElementById("layer")
        ) : null}
        {render}
        
      </>
    );
};

export default CustomEditorElement
  