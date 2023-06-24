"use client"
import { UnorderedList ,ListItem} from "@chakra-ui/react";


const AppUnOrderList=({children,customStyle,list})=>{

    return(
        <UnorderedList sx={customStyle} >

          {
            list?.map((item,index)=>
              <ListItem key={index}>{item}</ListItem>            
            )
          }
        </UnorderedList>
    )
}
export default AppUnOrderList;