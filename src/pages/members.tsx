import { Zoomable } from "@components/common/Zoomable"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { StudentMembers, Teachers } from "@map/members"
import { NextPage } from "next"
import Image from "next/image"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { motion } from "framer-motion"
import { combine } from "@services/tailwind"

const PersonCard: FC<{
  setZoomOverlay: Dispatch<SetStateAction<JSX.Element>>
  imgURL: string
  name: string
  role: string
}> = ({ setZoomOverlay, imgURL, name, role }) => {
  return (
    <div className="space-y-4">
      <Zoomable
        width={256}
        height={256}
        updateOverlay={setZoomOverlay}
        src={imgURL}
        className="rounded-2xl object-cover"
        alt={name}
      />

      <div className="">
        <h3 className="text-lg font-medium text-TUCMC-gray-600">{name}</h3>
        <p className="font-light text-TUCMC-gray-500">{role}</p>
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
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const MembersPage: NextPage = () => {
  const [zoomOverlay, setZoomOverlay] = useState(<></>)
  const [tab, setTab] = useState<string>("2564")

  const getTab = (tabName: string) => {
    return tab === tabName
      ? "transition-all hover:scale-105 hover:bg-TUCMC-pink-500 bg-TUCMC-pink-400 text-white"
      : "transition-all hover:scale-105 hover:bg-TUCMC-gray-100 bg-white text-TUCMC-gray-500 border border-TUCMC-gray-300"
  }

  return (
    <DescribeRoute
      title="บุคลากร"
      description="บุคลากรคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)"
      imgURL="/meta/banner.jpg"
    >
      <div>{zoomOverlay}</div>
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-10 xl:px-48">
        <section className="py-6">
          <h2 className="pb-6 text-2xl font-medium text-TUCMC-gray-600">คณะครูงานกิจกรรมพัฒนาผู้เรียน</h2>

          <article className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            {Teachers.map((teacher) => {
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
          <h2 className="pb-6 text-2xl font-medium text-TUCMC-gray-600">คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน</h2>

          <p className="pb-4 font-light text-TUCMC-gray-600">ปีการศึกษา</p>
          <div className="flex flex-wrap gap-4 pb-8">
            <button
              onClick={() => setTab("2564")}
              className={combine(getTab("2564"), "w-32 rounded-md px-6 py-2 text-center font-light")}
            >
              2564
            </button>
            <button
              onClick={() => setTab("2563")}
              className={combine(getTab("2563"), "w-32 rounded-md px-6 py-2 text-center font-light")}
            >
              2563
            </button>
            <button
              onClick={() => setTab("2562")}
              className={combine(getTab("2562"), "w-32 rounded-md px-6 py-2 text-center font-light")}
            >
              2562
            </button>
            <button
              onClick={() => setTab("2561")}
              className={combine(getTab("2561"), "w-32 rounded-md px-6 py-2 text-center font-light")}
            >
              2561
            </button>
          </div>

          <motion.article
            initial="initial"
            animate="animate"
            variants={variants}
            key={tab}
            className="grid grid-cols-1 gap-8 sm:grid-cols-4"
          >
            {StudentMembers[tab].map((student, i) => {
              return (
                <PersonCard
                  setZoomOverlay={setZoomOverlay}
                  key={`${i}-${student.name}`}
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
