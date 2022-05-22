import NextLayout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <NextLayout>
      <Component {...pageProps} />
    </NextLayout>
  )
}

export default MyApp
