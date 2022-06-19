import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { DesktopComputerIcon, DeviceMobileIcon, DeviceTabletIcon, DownloadIcon } from "@heroicons/react/solid"
import { GetStaticProps, NextPage } from "next"
import Image from "next/image"
import { FC } from "react"
import path from "path"
import { readdir } from "fs/promises"

const StickerImage: FC<{ src: string; name: string }> = ({ src, name }) => {
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

type BackgroundImageType = [
  { name: string; type: "landscape"; path: string },
  { name: string; type: "portrait"; path: string }
]

const BackgroundImage: FC<{ img: BackgroundImageType }> = ({ img }) => {
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
      <div className="relative h-full min-h-[150px] w-full">
        <Image
          className="object-cover"
          layout="fill"
          src={img.find((i) => i.type === "landscape")?.path ?? ""}
          alt={img.find((i) => i.type === "landscape")?.name ?? ""}
        />
      </div>
      <div className="grid w-full grid-cols-2">
        <button
          onClick={() => {
            downloadFile(
              `${img.find((i) => i.type === "landscape")?.path}`,
              `${img.find((i) => i.type === "landscape")?.name}`
            )
          }}
          className="flex w-full flex-col items-center justify-center gap-1 rounded-bl-md border-r border-gray-300 bg-pink-400 py-3 px-4 text-center text-white transition-colors hover:bg-pink-500"
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
          className="flex w-full flex-col items-center justify-center gap-1 rounded-br-md bg-pink-400 py-3 px-4 text-center text-white transition-colors hover:bg-pink-500"
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

export const getStaticProps: GetStaticProps = async (context) => {
  const stickerDirectory = path.join(process.cwd(), "public/assets/images/work/stickers")
  const stickerFolderNames = await readdir(stickerDirectory)

  const allStickerFileNames = (
    await Promise.all(
      stickerFolderNames.map(async (folderName) => {
        const currFolderPath = path.join(stickerDirectory, folderName)
        const currFileNames = await readdir(currFolderPath)

        return currFileNames.map((f) => {
          return { name: path.parse(f).name, path: path.join("/assets/images/work/stickers", folderName, f) }
        })
      })
    )
  ).flat(2)

  const backgroundDirectory = path.join(process.cwd(), "public/assets/images/work/backgrounds")
  const backgroundFolderNames = await readdir(backgroundDirectory)

  const allBackgroundFileNames = await Promise.all(
    backgroundFolderNames
      .filter((folderName) => folderName !== ".DS_Store")
      .map(async (folderName) => {
        const currFolderPath = path.join(backgroundDirectory, folderName)
        const currFileNames = await readdir(currFolderPath)

        return currFileNames.map((f) => {
          return {
            name: `${folderName}-${path.parse(f).name}`,
            type: path.parse(f).name,
            path: path.join("/assets/images/work/backgrounds", folderName, f)
          }
        })
      })
  )

  return {
    props: {
      stickerImgPaths: allStickerFileNames,
      backgroundImgPaths: allBackgroundFileNames
    }
  }
}

const WorkPage: NextPage<{
  stickerImgPaths: { name: string; path: string }[]
  backgroundImgPaths: Array<BackgroundImageType>
}> = ({ stickerImgPaths, backgroundImgPaths }) => {
  return (
    <DescribeRoute title="From TUCMC ♡" description="ผลงานทั้งหมดจาก กช." imgURL="/meta/work.jpg">
      <main className="relative mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-10 xl:px-48">
        <h1 className="text-2xl font-medium text-TUCMC-gray-700">From TUCMC ♡</h1>

        <h2 className="mt-6 text-lg font-light text-TUCMC-gray-600">แจก PNG Sticker</h2>

        <section className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {stickerImgPaths.map((img) => {
            return <StickerImage key={img.path} src={img.path} name={img.name} />
          })}
        </section>

        <h2 className="mt-12 text-lg font-light text-TUCMC-gray-600">แจก Wallpaper/Background</h2>

        <section className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {backgroundImgPaths.map((img) => {
            return <BackgroundImage key={img[1].path} img={img} />
          })}
        </section>
      </main>
    </DescribeRoute>
  )
}

export default WorkPage
