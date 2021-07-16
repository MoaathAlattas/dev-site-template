import '@themes/globals.css'
require(`@themes/${process.env.TEMPLATE_ID}/style.css`);
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
