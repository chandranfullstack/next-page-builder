import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../themes/theme"



export default function App({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
  <Component {...pageProps} theme={theme} />
  </ChakraProvider>
  )
}
