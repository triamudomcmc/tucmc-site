import { Zoomable } from "@components/common/Zoomable"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { StudentMembers, Teachers } from "@map/committee"
import { NextPage } from "next"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { combine } from "@services/tailwind"
import { Router, useRouter } from "next/router"
import { SM } from "@utilities/constants"
import { useWindowDimensions } from "@utilities/document"

const PersonCard = ({
  setZoomOverlay,
  imgURL,
  name,
  role,
}: {
  setZoomOverlay: Dispatch<SetStateAction<JSX.Element>>
  imgURL: string
  name: string
  role: string
}) => {
  return (
    <div className="flex flex-col items-center space-y-4 md:items-start">
      <Zoomable
        width={256}
        height={256}
        updateOverlay={setZoomOverlay}
        src={imgURL}
        className="rounded-2xl object-cover"
        alt={name}
      />

      <div className="">
        <h3 className="text-center text-lg font-medium text-TUCMC-gray-600 md:text-left">{name}</h3>
        <p className="text-center font-light text-TUCMC-gray-500 md:text-left">{role}</p>
      </div>
    </div>
  )
}

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const YEARS = Object.keys(StudentMembers).sort((a, b) => +b - +a)

const MembersPage: NextPage = () => {
  const [zoomOverlay, setZoomOverlay] = useState(<></>)
  const { query, replace } = useRouter()
  const [tab, setTab] = useState<string>(YEARS[0])
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (query?.year && YEARS.includes(query?.year as string)) {
      setTab(query?.year as string)
    }
  }, [query])

  const getTab = (tabName: string) => {
    return tab === tabName
      ? "transition-all hover:scale-105 hover:bg-TUCMC-pink-500 bg-TUCMC-pink-400 text-white"
      : "transition-all hover:scale-105 hover:bg-TUCMC-gray-100 bg-white text-TUCMC-gray-500 border border-TUCMC-gray-300"
  }

  return (
    <DescribeRoute
      title="บุคลากร"
      description="บุคลากรคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)"
      imgURL="/meta/people.jpg"
    >
      <div>{zoomOverlay}</div>
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-10 xl:px-48">
        <section className="py-6">
          <h2 className="pb-2 text-center text-lg font-medium text-TUCMC-gray-600 sm:pb-6 sm:text-left sm:text-2xl">
            ครูงานกิจกรรมพัฒนาผู้เรียน
          </h2>

          <div className="mb-6 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
            <Zoomable
              width={width > SM ? 240 : 256}
              height={width > SM ? 240 : 256}
              updateOverlay={setZoomOverlay}
              src={Teachers[0].imgURL}
              className="rounded-2xl object-cover"
              alt={Teachers[0].name}
            />

            <div className="">
              <h3 className="text-center text-lg font-medium text-TUCMC-gray-600 sm:text-2xl md:text-left">
                {Teachers[0].name}
              </h3>
              <p className="text-center font-light text-TUCMC-gray-500 md:text-left">{Teachers[0].role}</p>
            </div>
          </div>
          <article className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {Teachers.slice(1).map((teacher) => {
              return (
                <PersonCard
                  setZoomOverlay={setZoomOverlay}
                  key={teacher.name}
                  imgURL={teacher.imgURL}
                  name={teacher.name}
                  role={teacher.role}
                />
              )
            })}
          </article>
        </section>

        <hr className="border border-TUCMC-gray-400" />

        <section className="py-6">
          <h2 className="pb-2 text-center text-lg font-medium text-TUCMC-gray-600 sm:pb-6 sm:text-left sm:text-2xl">
            นักเรียนงานกิจกรรมพัฒนาผู้เรียน
          </h2>

          <p className="pb-4 text-center font-light text-TUCMC-gray-600 sm:text-left">ปีการศึกษา</p>
          <div className="flex flex-wrap justify-center gap-4 pb-8 sm:justify-start">
            {YEARS.map((year) => {
              return (
                <button
                  key={year}
                  onClick={() => {
                    setTab(year)
                    replace({ query: { year } }, undefined, { shallow: true })
                  }}
                  className={combine(getTab(year), "w-32 rounded-md px-6 py-2 text-center font-light")}
                >
                  {year}
                </button>
              )
            })}
          </div>

          <motion.article
            initial="initial"
            animate="animate"
            variants={variants}
            key={tab}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
          >
            {StudentMembers[tab].map((student) => {
              return (
                <PersonCard
                  setZoomOverlay={setZoomOverlay}
                  key={`${student.role}-${student.name}`}
                  imgURL={student.imgURL}
                  name={student.name}
                  role={student.role}
                />
              )
            })}
          </motion.article>
        </section>
      </div>
    </DescribeRoute>
  )
}

export default MembersPage
