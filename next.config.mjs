import nextPwa from "next-pwa"
import { join } from "path"

const withPWA = nextPwa({
  dest: "public",
  swSrc: "service-worker.js",
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withPWA(nextConfig)
