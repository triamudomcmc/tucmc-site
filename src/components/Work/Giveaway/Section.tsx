import { ChevronDownIcon } from "@heroicons/react/outline"
import { FC, useState } from "react"
import { BackgroundImage, StickerImage } from "./Elements"
import { BackgroundImageType } from "./types"
import { AnimatePresence, motion } from "framer-motion"
import { DownloadIcon } from "@heroicons/react/solid"

const PNGGiveaway: FC<{ stickerImgPaths: { name: string; path: string }[] }> = ({ stickerImgPaths }) => {
  const [show, setShow] = useState(true)

  function downloadFile() {
    // @ts-ignore
    window.gtag("event", `download_all_stickers`)

    const a = document.createElement("a")
    a.href = "/api/stickers"
    a.download = `TUCMC-stickers`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <>
      <div className="flex items-end justify-between">
        <div className="mt-6 flex items-center gap-4">
          <h2 className="text-lg font-light text-TUCMC-gray-600">แจก PNG Sticker</h2>
          <button
            onClick={downloadFile}
            className="flex items-center justify-center gap-1 rounded-md bg-TUCMC-pink-500 px-6 py-2 text-white transition-colors hover:bg-TUCMC-pink-600"
          >
            <DownloadIcon className="h-5 w-5" />
            Download All
          </button>
        </div>

        <motion.button
          variants={{
            show: {
              rotate: 0
            },
            hide: {
              rotate: 180
            }
          }}
          animate={show ? "show" : "hide"}
          onClick={() => setShow(!show)}
        >
          <ChevronDownIcon className="h-6 w-6 text-TUCMC-gray-500" />
        </motion.button>
      </div>

      <hr className="mt-4 text-TUCMC-gray-600" />

      <AnimatePresence>
        {show && (
          <motion.section
            initial={{
              opacity: 0,
              height: "0"
            }}
            animate={{
              opacity: 1,
              height: "auto"
            }}
            exit={{
              opacity: 0,
              height: "0"
            }}
            className="my-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
          >
            {stickerImgPaths.map((img) => {
              return <StickerImage key={img.path} src={img.path} name={img.name} />
            })}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

const BGGiveaway: FC<{ backgroundImgPaths: BackgroundImageType[] }> = ({ backgroundImgPaths }) => {
  const [show, setShow] = useState(true)

  return (
    <>
      <div className="flex items-end justify-between">
        <h2 className="mt-6 text-lg font-light text-TUCMC-gray-600">แจก Wallpaper/Background</h2>

        <motion.button
          variants={{
            show: {
              rotate: 0
            },
            hide: {
              rotate: 180
            }
          }}
          animate={show ? "show" : "hide"}
          onClick={() => setShow(!show)}
        >
          <ChevronDownIcon className="h-6 w-6 text-TUCMC-gray-500" />
        </motion.button>
      </div>

      <hr className="mt-8 text-TUCMC-gray-600" />

      <AnimatePresence>
        {show && (
          <motion.section
            initial={{
              opacity: 0,
              height: "0"
            }}
            animate={{
              opacity: 1,
              height: "auto"
            }}
            exit={{
              opacity: 0,
              height: "0"
            }}
            className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {backgroundImgPaths.map((img) => {
              return <BackgroundImage key={img[1].path} img={img} />
            })}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export const GiveawaySection: FC<{
  stickerImgPaths: { name: string; path: string }[]
  backgroundImgPaths: BackgroundImageType[]
}> = ({ stickerImgPaths, backgroundImgPaths }) => {
  return (
    <>
      <PNGGiveaway stickerImgPaths={stickerImgPaths} />
      <BGGiveaway backgroundImgPaths={backgroundImgPaths} />
    </>
  )
}
