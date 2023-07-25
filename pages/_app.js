import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../themes/theme"
import React from 'react';
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';



 export default function App({ Component, pageProps }) {
   return (
   <ChakraProvider theme={theme}>
     <LayoutProvider>
      {/* <Layout> */}
      <Component {...pageProps} theme={theme} />
      {/* </Layout> */}
       </LayoutProvider>
      </ChakraProvider>
   )
 }


 