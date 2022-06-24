import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { GetStaticProps, NextPage } from "next"
import path from "path"
import { readdir } from "fs/promises"
import { BackgroundImageType } from "@components/Work/Giveaway/types"
import { GiveawaySection } from "@components/Work/Giveaway/Section"
import { TUCMCProjectsSection } from "@components/Work/Projects/Section"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { StarIcon } from "@heroicons/react/solid"
import { combine } from "@services/tailwind"

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

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

type TabType = "projects" | "giveaway"

const WorkPage: NextPage<{
  stickerImgPaths: { name: string; path: string }[]
  backgroundImgPaths: Array<BackgroundImageType>
}> = ({ stickerImgPaths, backgroundImgPaths }) => {
  const { replace, query } = useRouter()

  const [workTab, setWorkTab] = useState<TabType>("projects")

  useEffect(() => {
    if (query?.type && ["projects", "giveaway"].includes(query?.type as string)) {
      setWorkTab(query?.type as TabType)
    }
  }, [query?.type])

  const getTab = (tabName: TabType) => {
    return workTab === tabName
      ? "bg-TUCMC-pink-500 text-white hover:bg-TUCMC-pink-600"
      : "bg-white text-TUCMC-pink-500 hover:bg-TUCMC-gray-100"
  }

  return (
    <DescribeRoute title="From TUCMC ♡" description="ผลงานทั้งหมดจาก กช." imgURL="/meta/work.jpg">
      <main className="relative mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-10 xl:px-48">
        <h1 className="text-center text-2xl font-medium text-TUCMC-gray-700">From TUCMC ♡</h1>
        <div className="relative mt-4 bg-white">
          <div className="mx-auto max-w-xl py-2 px-2">
            <div className="grid grid-cols-2 items-center justify-center rounded-lg border border-TUCMC-gray-400">
              <button
                type="button"
                onClick={() => {
                  setWorkTab("projects")
                  replace({ query: { type: "projects" } }, undefined, { shallow: true })
                }}
                className={combine(
                  getTab("projects"),
                  "flex h-full items-center justify-center space-x-2 rounded-l-lg px-2 py-3 text-center transition-all sm:px-12"
                )}
              >
                {workTab === "projects" && <StarIcon className="h-5 w-5" />}
                <span>ผลงานทั้งหมด</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setWorkTab("giveaway")
                  replace({ query: { type: "giveaway" } }, undefined, { shallow: true })
                }}
                className={combine(
                  getTab("giveaway"),
                  "flex h-full items-center justify-center space-x-2 rounded-r-lg px-2 py-3 text-center transition-all sm:px-12"
                )}
              >
                {workTab === "giveaway" && <StarIcon className="h-5 w-5" />}
                <span>กิจกรรมแจกของ</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative min-h-[500px] w-full bg-white">
          <motion.div initial="initial" animate="animate" variants={variants} key={workTab}>
            {workTab === "projects" && <TUCMCProjectsSection />}
            {workTab === "giveaway" && (
              <GiveawaySection stickerImgPaths={stickerImgPaths} backgroundImgPaths={backgroundImgPaths} />
            )}
          </motion.div>
        </div>
      </main>
    </DescribeRoute>
  )
}

export default WorkPage
