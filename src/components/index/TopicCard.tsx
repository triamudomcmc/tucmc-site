import { combine } from "@services/tailwind"
import Image, { StaticImageData } from "next/image"
import { FC } from "react"

export const TopicCard: FC<{ title: string; actionText: string; imgSrc: StaticImageData; mode?: "announcement" }> = ({
  title,
  actionText,
  imgSrc,
  mode
}) => {
  return (
    <section
      className={combine(
        "mb-6 flex flex-col items-center justify-center space-y-4 py-16 px-4",
        mode === "announcement" ? "announcement-section" : ""
      )}
    >
      <h2 className="text-center text-xl text-TUCMC-gray-600">{title}</h2>

      <div className="group relative block cursor-pointer rounded-lg">
        <div className="overflow-hidden rounded-lg">
          <Image
            className="h-full w-full shadow-md"
            src={imgSrc}
            layout="intrinsic"
            width={400}
            height={400}
            placeholder="blur"
            blurDataURL={imgSrc.blurDataURL}
            alt={title}
          />
        </div>

        <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-16 py-3 text-2xl font-semibold text-TUCMC-pink-600 shadow-md transition-colors group-hover:bg-gray-100">
          {actionText}
        </button>
      </div>
    </section>
  )
}
