import { Zoomable } from "@components/common/Zoomable"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { StudentMembers, Teachers } from "@map/members"
import { NextPage } from "next"
import Image from "next/image"
import { Dispatch, FC, SetStateAction, useState } from "react"

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

const MembersPage: NextPage = () => {
  const [zoomOverlay, setZoomOverlay] = useState(<></>)
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

          <article className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            {StudentMembers["64"].map((student) => {
              return (
                <PersonCard
                  setZoomOverlay={setZoomOverlay}
                  key={student.name}
                  imgURL={student.imgURL}
                  name={student.name}
                  role={student.role}
                />
              )
            })}
          </article>
        </section>
      </div>
    </DescribeRoute>
  )
}

export default MembersPage
