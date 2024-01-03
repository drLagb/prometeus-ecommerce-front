import React from 'react'
import reportAccessibility from '../utils/reportAccessibility'
import type { AppProps } from 'next/app'
 
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
 
reportAccessibility(React)
 
export default MyApp