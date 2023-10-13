import MenuProvider from "@/context/store"
import "../assets/scss/main.scss"
export default function App({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}
