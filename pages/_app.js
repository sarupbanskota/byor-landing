import '../styles/globals.css'
import {Footer} from 'components'

export default App

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
