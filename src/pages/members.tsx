import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { NextPage } from "next"

const MembersPage: NextPage = () => {
  return (
    <DescribeRoute
      title="บุคลากร"
      description="บุคลากรคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)"
      imgURL="/meta/banner.jpg"
    >
      <h1>บุคลากร</h1>
    </DescribeRoute>
  )
}

export default MembersPage
