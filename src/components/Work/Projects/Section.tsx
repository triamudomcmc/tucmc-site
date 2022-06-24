import { TUCMCWork } from "@map/tucmcWork"
import { combine } from "@services/tailwind"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"

const YEARS = ["2564", "2563", "2562"]

export const TUCMCProjectsSection: FC = () => {
  const [tab, setTab] = useState("2564")

  const getTab = (tabName: string) => {
    return tab === tabName
      ? "transition-all hover:scale-105 hover:bg-TUCMC-pink-500 bg-TUCMC-pink-400 text-white"
      : "transition-all hover:scale-105 hover:bg-TUCMC-gray-100 bg-white text-TUCMC-gray-500 border border-TUCMC-gray-300"
  }

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

      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-6 sm:max-w-[750px] sm:grid-cols-2">
        {TUCMCWork[tab].map((work, i) => {
          return (
            <Link key={`${work}_${i}`} href={work.link} passHref>
              <a target="_blank" className="group">
                <article key={work.name} className="mx-auto flex max-w-[350px] flex-col rounded-lg shadow-md">
                  <div className="relative h-48 w-full rounded-t-lg">
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
                    <p className="mt-2 text-TUCMC-gray-500">{work.description}</p>
                  </div>
                </article>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
