import Image from "next/image";


const AppImage=({src,width,height})=>{
    return(
        <Image
        src={src}
        width={width}
        height={height}
        alt="image"
        />
    )
}
export default AppImage