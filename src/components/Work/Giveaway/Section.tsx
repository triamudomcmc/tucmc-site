import { FC } from "react"
import { BackgroundImage, StickerImage } from "./Elements"
import { BackgroundImageType } from "./types"

export const GiveawaySection: FC<{
  stickerImgPaths: { name: string; path: string }[]
  backgroundImgPaths: Array<BackgroundImageType>
}> = ({ stickerImgPaths, backgroundImgPaths }) => {
  return (
    <div>
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
    </div>
  )
}
