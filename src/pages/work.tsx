import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { NextPage } from "next"

const WorkPage: NextPage = () => {
  // add gtag for link click
  return (
    <DescribeRoute
      title="ผลงานของเรา"
      description="ผลงานทั้งหมดของคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)"
      imgURL="/meta/work.jpg"
    >
      <main className="relative mx-auto min-h-screen max-w-[1440px] px-4 py-10 sm:px-10 xl:px-48">
        <h1 className="text-2xl font-medium text-TUCMC-gray-700">ผลงานของเรา</h1>
        <p className="font-light text-TUCMC-gray-600">Coming Soon...</p>
      </main>
    </DescribeRoute>
  )
}

export default WorkPage
