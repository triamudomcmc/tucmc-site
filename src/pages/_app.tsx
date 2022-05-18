import { useEffect } from "react"

import { AppProps } from "next/app"

import "@styles/init.sass"
import "tailwindcss/tailwind.css"
import PageContainer from "@components/common/PageContainer"
import { AnimateSharedLayout } from "framer-motion"

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.addEventListener("touchstart", () => null, {
      passive: true
    })
  }, [])

  return (
    <PageContainer>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </PageContainer>
  )
}

export default App
