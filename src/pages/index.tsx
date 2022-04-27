import tw, { combine } from "@tailwind"
import { FC } from "react"

const Landing: FC = () => {
  return (
    <div className={combine(tw`p-10`, "something")}>
      <h1 className={tw`text-TUCMC-gray-600`}>bruh</h1>
    </div>
  )
}

export default Landing
