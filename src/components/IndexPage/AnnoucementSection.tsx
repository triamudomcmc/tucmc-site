import { SM } from "@utilities/constants"
import { useWindowDimensions } from "@utilities/document"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"

export const AnnouncementSection = ({
  title,
  body,
  actionText,
  imgSrc,
  href,
}: {
  title: string
  body: string | JSX.Element
  actionText: string
  imgSrc: StaticImageData
  href: string
}) => {
  const { width } = useWindowDimensions()

  return (
    <article className="py-16 px-4">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-center space-y-4">
        <h2 className="mb-4 text-center text-xl text-TUCMC-gray-600">ประชาสัมพันธ์</h2>

        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
          <div className="group relative block cursor-pointer rounded-3xl">
            <div className="flex items-center justify-center overflow-hidden rounded-3xl">
              <Link href={href} passHref>
                <a>
                  <Image
                    className="h-full w-full rounded-3xl object-contain"
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

            {width <= SM && (
              <Link href={href} passHref>
                <a className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-12 py-3 text-center text-2xl font-semibold text-TUCMC-pink-600 shadow-md transition-colors group-hover:bg-gray-100 sm:px-8 sm:text-lg lg:px-10 lg:text-2xl">
                  {actionText}
                </a>
              </Link>
            )}
          </div>

          <div className="flex flex-col space-y-4 px-6 pt-10 sm:px-0 sm:pt-0">
            <h3 className="text-lg font-medium">{title}</h3>
            <div className="font-texts leading-loose text-TUCMC-gray-600">{body}</div>
            {width > SM && (
              <Link href={href} passHref>
                <a className="w-64 whitespace-nowrap rounded-full bg-white px-12 py-3 text-center text-2xl font-semibold text-TUCMC-pink-600 shadow-md transition-all hover:scale-105 hover:bg-TUCMC-gray-100 sm:px-8 sm:text-lg lg:w-72 lg:px-10 lg:text-2xl">
                  {actionText}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
