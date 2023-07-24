import { Provider,Root,Trigger,Content } from "@radix-ui/react-tooltip";

const SimpleTooltip=({text,children,side,offset})=><Provider>
    <Root delayDuration={0}>
      <Trigger asChild={true}>
        {children}
      </Trigger>
      <Content side={side} sideOffset={offset} style={{zIndex:"1e5"}}>
       <div className="bg-gray-600 rounded text-white p-2 text-sm">
        {text}
       </div>
      </Content>
    </Root>
</Provider>

export default SimpleTooltip
  