"use client"
import { Grid } from "@chakra-ui/react"

const AppGrid=({
    children,
    customStyle,
    templateColumns,
    gap,
    templateRows,
    margin,
    ...props
    })=>{
    return<Grid 
    sx={customStyle} 
    templateColumns={templateColumns}
    templateRows={templateRows}
    margin={margin}
    gap={gap}
    {...props}
    > 
        {children}
    </Grid>
}
export default AppGrid