import { TTUCMCWork, TUCMCWork } from "@map/tucmcWork"
import { combine } from "@services/tailwind"
import { SM } from "@utilities/constants"
import { useWindowDimensions } from "@utilities/document"
import { splitArray } from "@utilities/splitArray"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"

const YEARS = ["2564", "2563", "2562"]

const dateSortFunc = (a: TTUCMCWork, b: TTUCMCWork) => {
  const [d1, m1, y1] = a.date.split("/")
  const [d2, m2, y2] = b.date.split("/")

  const date1 = new Date(+y1, +m1 - 1, +d1)
  const date2 = new Date(+y2, +m2 - 1, +d2)

  return date1.getTime() - date2.getTime()
}

const sortByDate = (works: TTUCMCWork[]) => {
  return works.sort(dateSortFunc)
}

export const TUCMCProjectsSection: FC = () => {
  const [tab, setTab] = useState("2564")

  const getTab = (tabName: string) => {
    return tab === tabName
      ? "transition-all hover:scale-105 hover:bg-TUCMC-pink-500 bg-TUCMC-pink-400 text-white"
      : "transition-all hover:scale-105 hover:bg-TUCMC-gray-100 bg-white text-TUCMC-gray-500 border border-TUCMC-gray-300"
  }

  const { width } = useWindowDimensions()
  const allWorks = splitArray(sortByDate(TUCMCWork[tab]), width < SM ? 1 : 2)

  return (
    <div className="flex flex-col items-center">
      <p className="pt-4 pb-2 text-center font-light text-TUCMC-gray-600">ปีการศึกษา</p>
      <div className="flex flex-wrap justify-center gap-4 pb-8 sm:justify-start">
        {YEARS.map((year) => {
          return (
            <button
              key={year}
              onClick={() => {
                setTab(year)
              }}
              className={combine(getTab(year), "w-32 rounded-md px-6 py-2 text-center font-light")}
            >
              {year}
            </button>
          )
        })}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 justify-center gap-6 sm:max-w-[750px] sm:grid-cols-2">
        {allWorks.map((works, index) => {
          return (
            <div key={works[0].id} className="flex flex-col items-center gap-4">
              {works.map((work) => {
                return (
                  <Link key={work.id} href={work.link} passHref>
                    <a target="_blank" className="group w-full">
                      <article key={work.name} className="mx-auto flex max-w-[350px] flex-col rounded-lg shadow-md">
                        <div className="relative h-80 w-full rounded-t-lg">
                          <Image
                            alt={work.name}
                            src={work.thumbnailURL}
                            layout="fill"
                            priority
                            className="rounded-t-lg object-cover transition-opacity group-hover:opacity-75"
                          />
                        </div>

                        <div className="relative p-4">
                          <h3 className="mb-2 text-xl text-TUCMC-gray-800">{work.name}</h3>
                          <p className="text-TUCMC-gray-600">{work.date}</p>
                          <p className="mt-2 whitespace-pre-wrap text-TUCMC-gray-500">{work.description}</p>
                        </div>
                      </article>
                    </a>
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
