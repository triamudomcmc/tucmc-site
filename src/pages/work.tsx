import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { NextPage } from "next"

const WorkPage: NextPage = () => {
  return (
    <DescribeRoute
      title="ผลงานของเรา"
      description="ผลงานทั้งหมดของคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)"
      imgURL="/meta/work.jpg"
    >
      <h1>ผลงานของเรา</h1>
    </DescribeRoute>
  )
}

export default WorkPage
