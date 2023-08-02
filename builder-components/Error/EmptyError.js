import { Message } from "primereact/message";

const EmptyError=({text,color})=>{
    return <Message severity={color} text={text} />
}
export default EmptyError