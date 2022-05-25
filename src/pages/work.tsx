import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { NextPage } from "next"

const WorkPage: NextPage = () => {
  return (
    <DescribeRoute
      title="ผลงานของเรา"
      description="ผลงานทั้งหมดของคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)"
      imgURL="/meta/work.jpg"
    >
      <main className="min-h-screen p-6">
        <h1 className="text-2xl font-medium text-TUCMC-gray-700">ผลงานของเรา</h1>
        <p className="font-light text-TUCMC-gray-600">Work In Progress...</p>
      </main>
    </DescribeRoute>
  )
}

export default WorkPage
