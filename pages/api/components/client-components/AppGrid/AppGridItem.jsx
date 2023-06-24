"use client"
import { GridItem } from "@chakra-ui/react";


const AppGridItem=({
    children,
    colspan,
    bg,
    rowSpan,
    rowStart,
    customStyle,
    h,
    border,
    ...props
})=>{
    return<GridItem
    colSpan={colspan}
    rowSpan={rowSpan}
    rowStart={rowStart}
    sx={customStyle}
    border={border}
    bg={bg}
    h={h}
    {...props}
    >
        {children}
    </GridItem>
}
export default AppGridItem;

