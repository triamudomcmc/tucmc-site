import { motion } from "framer-motion"
import { useWindowDimensions } from "@utilities/document"
import { FC } from "react"
import Image from "next/image"

export const Loader = (
  {
    display
  }: {
    display: boolean
  }
) => {
  const { width } = useWindowDimensions()

  return (
    <div
      style={{ zIndex: 9999, display: display ? "flex" : "none" }}
      className="fixed top-0 left-0 flex min-h-screen w-full items-center justify-center bg-TUCMC-gray-100 bg-opacity-80"
    >
      <div className="absolute top-0 h-1.5 w-full bg-blue-300" />
      <motion.div
        initial={{ x: -1000 }}
        animate={display && { x: width }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute top-0 left-0 h-1.5 w-5/12 bg-blue-500"
      />
      <div className="flex animate-pulse flex-col items-center font-display">
        <Image alt="loading..." width={128} height={128} src="/assets/1481.gif" />
        <h1 className="text-xl font-bold">Preparing...</h1>
      </div>
    </div>
  )
}
