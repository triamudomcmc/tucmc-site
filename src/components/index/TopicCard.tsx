import { combine } from "@services/tailwind"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"

export const TopicCard: FC<{
  title: string
  actionText: string
  imgSrc: StaticImageData
  href: string
}> = ({ title, actionText, imgSrc, href }) => {
  return (
    <article className={combine("mb-6 flex flex-col items-center justify-center space-y-4 py-16 px-4")}>
      <h2 className="text-center text-xl text-TUCMC-gray-600">{title}</h2>

      <div className="group relative block cursor-pointer rounded-3xl">
        <div className="overflow-hidden rounded-3xl">
          <Link href={href} passHref>
            <a>
              <Image
                className="h-full w-full rounded-3xl shadow-md"
                // style={{ borderRadius: "0.5rem" }}
                src={imgSrc}
                layout="intrinsic"
                width={400}
                height={400}
                placeholder="blur"
                blurDataURL={imgSrc.blurDataURL}
                alt={title}
              />
            </a>
          </Link>
        </div>

        <Link href={href} passHref>
          <a className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-12 py-3 text-center text-2xl font-semibold text-TUCMC-pink-600 shadow-md transition-all group-hover:scale-105 group-hover:bg-gray-100 sm:px-8 sm:text-lg lg:px-10 lg:text-2xl">
            {actionText}
          </a>
        </Link>
      </div>
    </article>
  )
}
