import { DesktopComputerIcon, DeviceMobileIcon, DownloadIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { FC } from "react"
import { BackgroundImageType } from "./types"

export const StickerImage = (
  {
    src,
    name
  }: {
    src: string,
    name: string
  }
) => {
  function downloadFile() {
    // @ts-ignore
    window.gtag("event", `download_sticker_${name}`, { name })
    const a = document.createElement("a")
    a.href = src
    a.download = `TUCMC-sticker-${name}`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <button
      onClick={downloadFile}
      className="group flex flex-col items-center justify-center rounded-md border border-gray-300"
    >
      <div className="px-6 py-2">
        <Image
          className="object-contain transition-opacity group-hover:opacity-80"
          width={150}
          height={150}
          src={src}
          alt={name}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-1 rounded-b-md bg-pink-400 py-3 px-4 text-center text-white transition-colors group-hover:bg-pink-500 md:flex-row">
        <DownloadIcon className="h-5 w-5" />
        <p className="text-sm md:text-base">Download</p>
      </div>
    </button>
  )
}

export const BackgroundImage = (
  {
    img
  }: {
    img: BackgroundImageType
  }
) => {
  function downloadFile(src: string, name: string) {
    // @ts-ignore
    window.gtag("event", `download_background_${name}`, { name })
    const a = document.createElement("a")
    a.href = src
    a.download = `TUCMC-background-${name}`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <div className="relative flex flex-col items-center justify-center rounded-md border border-gray-300">
      <div className="relative h-full min-h-[400px] w-full">
        <Image
          className="object-cover"
          layout="fill"
          src={img.find((i) => i.type === "landscape")?.path ?? ""}
          alt={img.find((i) => i.type === "landscape")?.name ?? ""}
        />
      </div>

      <div className="absolute bottom-0 grid w-full grid-cols-2">
        <button
          onClick={() => {
            downloadFile(
              `${img.find((i) => i.type === "landscape")?.path}`,
              `${img.find((i) => i.type === "landscape")?.name}`
            )
          }}
          className="flex w-full flex-col items-center justify-center gap-1 rounded-bl-md border-r border-gray-300 bg-gray-500 bg-opacity-60 py-3 px-4 text-center text-white backdrop-blur-md transition-all hover:brightness-110"
        >
          <DesktopComputerIcon className="h-8 w-8" />
          <p className="text-sm md:text-base">
            Landscape
            <br />
            &#40;คอมพิวเตอร์, iPad&#41;
          </p>
        </button>
        <button
          onClick={() => {
            downloadFile(
              `${img.find((i) => i.type === "portrait")?.path}`,
              `${img.find((i) => i.type === "portrait")?.name}`
            )
          }}
          className="flex w-full flex-col items-center justify-center gap-1 rounded-br-md bg-gray-500 bg-opacity-60 py-3 px-4 text-center text-white backdrop-blur-md transition-all hover:brightness-110"
        >
          <DeviceMobileIcon className="h-8 w-8" />
          <p className="text-sm md:text-base">
            Portrait
            <br />
            &#40;โทรศัพท์&#41;
          </p>
        </button>
      </div>
    </div>
  )
}
