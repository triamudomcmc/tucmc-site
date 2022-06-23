import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { DesktopComputerIcon, DeviceMobileIcon, DeviceTabletIcon, DownloadIcon } from "@heroicons/react/solid"
import { GetStaticProps, NextPage } from "next"
import Image from "next/image"
import { FC } from "react"
import path from "path"
import { readdir } from "fs/promises"
import { BackgroundImageType } from "@components/Work/Giveaway/types"
import { GiveawaySection } from "@components/Work/Giveaway/Section"

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

        <GiveawaySection stickerImgPaths={stickerImgPaths} backgroundImgPaths={backgroundImgPaths} />
      </main>
    </DescribeRoute>
  )
}

export default WorkPage
