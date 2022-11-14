import { useEffect } from "react"

import { AppProps } from "next/app"

import "@styles/init.sass"
import "tailwindcss/tailwind.css"
import PageContainer from "@components/common/PageContainer"
import { AnimateSharedLayout } from "framer-motion"
import Head from "next/head"
import Script from "next/script"

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.addEventListener("touchstart", () => null, {
      passive: true,
    })
  }, [])

  return (
    <PageContainer>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M6QG2P5KQQ" />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-M6QG2P5KQQ');
          `,
        }}
      />
    </PageContainer>
  )
}

export default App
