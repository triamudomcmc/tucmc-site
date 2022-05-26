import Image from "next/image"
import { motion } from "framer-motion"

import { DescribeRoute } from "@components/Meta/DescribeRoute"
import { NextPage } from "next"
import { AboutPage } from "@components/TUCMC/AboutPage"
import { useEffect, useState } from "react"
import { SocialFacebook, SocialInstagram } from "@vectors/icons/Socials"
import { RefreshIcon } from "@heroicons/react/outline"
import { ChartBarIcon, StarIcon, WifiIcon } from "@heroicons/react/solid"
import { combine } from "@services/tailwind"
import { useRouter } from "next/router"
import { PositionsPage } from "@components/TUCMC/PositionsPage"

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

type TabType = "about" | "positions"

const TUCMC: NextPage = () => {
  const [zoomOverlay, setZoomOverlay] = useState(<></>)
  const [tab, setTab] = useState<TabType>("about")

  const { query, replace } = useRouter()

  useEffect(() => {
    if (query?.type && ["about", "positions"].includes(query?.type as string)) {
      setTab(query?.type as TabType)
    }
  }, [query])

  const getTab = (tabName: TabType) => {
    return tab === tabName
      ? "bg-TUCMC-pink-500 text-white hover:bg-TUCMC-pink-600"
      : "bg-white text-TUCMC-pink-500 hover:bg-TUCMC-gray-100"
  }

  return (
    <DescribeRoute
      title="(กช.) คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน"
      description="คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.) คือ องค์กรนักเรียนที่บริหารจัดการดูแลชมรมทุกชมรม (ตามชื่อเดิม กช. =
      คณะกรรมการกิจกรรมชมรม) กช. จึงเป็นผู้ดูแลระบบลงทะเบียนชมรม
      และกิจกรรมที่เกี่ยวกับชมรมในโรงเรียนเตรียมอุดมศึกษา รวมถึงดูแลเกี่ยวกับกิจกรรมเพื่อสังคมและสาธารณประโยชน์
      ซึ่งเป็นงานที่ทุกห้องเรียนจะทำเป็นประจำทุกภาคเรียน นอกจากนี้ กช. ยังเป็นผู้จัดนิทรรศการวิชาการ (Triam Udom
      Open House) ซึ่งเป็นงานที่จัดแสดงผลงานของชมรมทุกปีอีกด้วย"
      imgURL="/assets/images/TUCMC/bg.jpg"
    >
      <div>{zoomOverlay}</div>
      <div className="bg-TUCMC-pink-500">
        <header className="flex flex-col items-center space-y-12 px-6 text-white md:space-y-16">
          <Image
            src="/assets/images/TUCMC/bg.jpg"
            placeholder="blur"
            blurDataURL="/assets/images/TUCMC/bg.jpg"
            objectFit="cover"
            layout="fill"
            quality={100}
          />
          <h1 className="z-10 pt-6 text-center text-4xl text-[5rem] font-bold">กช.</h1>
          <p className="text-md z-10 mx-auto max-w-lg text-center md:text-lg">
            คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.) คือ องค์กรนักเรียนที่บริหารจัดการดูแลชมรมทุกชมรม (ตามชื่อเดิม กช. =
            คณะกรรมการกิจกรรมชมรม) กช. จึงเป็นผู้ดูแลระบบลงทะเบียนชมรม
            และกิจกรรมที่เกี่ยวกับชมรมในโรงเรียนเตรียมอุดมศึกษา รวมถึงดูแลเกี่ยวกับกิจกรรมเพื่อสังคมและสาธารณประโยชน์
            ซึ่งเป็นงานที่ทุกห้องเรียนจะทำเป็นประจำทุกภาคเรียน นอกจากนี้ กช. ยังเป็นผู้จัดนิทรรศการวิชาการ (Triam Udom
            Open House) ซึ่งเป็นงานที่จัดแสดงผลงานของชมรมทุกปีอีกด้วย
          </p>
        </header>

        <div className="relative mt-36 bg-white">
          <div className="mx-auto max-w-xl py-12 px-2">
            <div className="grid grid-cols-2 items-center justify-center rounded-lg border border-TUCMC-gray-400">
              <button
                type="button"
                onClick={() => {
                  setTab("about")
                  replace({ query: { type: "about" } }, undefined, { shallow: true })
                }}
                className={combine(
                  getTab("about"),
                  "flex h-full items-center justify-center space-x-2 rounded-l-lg px-2 py-3 text-center transition-all sm:px-12"
                )}
              >
                {tab === "about" && <StarIcon className="h-5 w-5" />}
                <span>กช. คืออะไร ?</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab("positions")
                  replace({ query: { type: "positions" } }, undefined, { shallow: true })
                }}
                className={combine(
                  getTab("positions"),
                  "flex h-full items-center justify-center space-x-2 rounded-r-lg px-2 py-3 text-center transition-all sm:px-12"
                )}
              >
                {tab === "positions" && <StarIcon className="h-5 w-5" />}
                <span>ตำแหน่ง</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] w-full bg-white">
          <motion.div initial="initial" animate="animate" variants={variants} key={tab}>
            {tab === "about" && <AboutPage setZoomOverlay={setZoomOverlay} />}
            {tab === "positions" && <PositionsPage setZoomOverlay={setZoomOverlay} />}
          </motion.div>
        </div>

        <article className="space-y-6 pt-10">
          <h1 className="text-center text-2xl font-bold text-white">อยากเป็น กช. ต้องทำยังไง ?</h1>
          <p className="mx-auto max-w-2xl px-5 pb-4 text-center text-white">
            คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.) ประจำปีการศึกษา 2565 จะเปิดรับสมัครในเร็ว ๆ นี้ !
            โดยจะมีการคัดเลือกผ่านการกรอกฟอร์ม และสัมภาษณ์รายบุคคล
            รอติดตามรายละเอียดการรับสมัครได้จากช่องทางการติดต่อข้างล่างนี้เลย
          </p>
          <div className="mx-auto h-[232px] w-[312px] rounded-t-[48px] bg-TUCMC-gray-900">
            <div className="relative left-[14px] top-[14px] h-[218px] w-[284px] rounded-t-[34px] bg-white">
              <div className="absolute top-0 flex w-full justify-center">
                <div className="z-10 h-[26px] w-[140px] rounded-b-[16px] bg-TUCMC-gray-900" />
              </div>
              <div className="relative h-[77px] w-[284px] rounded-t-[34px] bg-[#F6F6F6]">
                <span className="absolute left-6 top-1.5 text-[14px] font-medium tracking-tight">12.00</span>
                <span className="absolute right-5 top-2.5 flex items-center space-x-[2px] text-[14px] font-medium tracking-tight">
                  <ChartBarIcon className="h-3.5 w-3.5" />
                  <WifiIcon className="h-3.5 w-3.5" />
                  <svg width="16" height="7.38" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="10" height="4" rx="1" fill="#111827" />
                    <path
                      d="M13 3.5C13 3.77614 12.7761 4 12.5 4L12 4L12 2L12.5 2C12.7761 2 13 2.22386 13 2.5L13 3.5Z"
                      fill="#111827"
                    />
                    <rect x="0.1" y="0.1" width="11.8" height="5.8" rx="0.9" stroke="#111827" strokeWidth="0.2" />
                  </svg>
                </span>
                <div className="relative top-9 h-[30px] w-full px-2">
                  <div className="flex h-full w-full items-center justify-between rounded-[8px] bg-[#E3E3E4] px-2">
                    <span className="font-medium">
                      <span className="text-[11px]">A</span>
                      <span className="text-[15px]">A</span>
                    </span>
                    <span className="text-[13px]">ติดตาม กช. ได้ที่</span>
                    <RefreshIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="mx-12 mt-8 space-y-4">
                <div className="flex space-x-4">
                  <SocialFacebook className="h-6 w-6" />
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/triamudomclubs"
                    className="hover:underline"
                  >
                    TUCMC
                  </a>
                </div>
                <div className="flex space-x-4">
                  <SocialInstagram className="h-6 w-6" />
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://instagram.com/tucmc_official"
                    className="hover:underline"
                  >
                    tucmc_official
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </DescribeRoute>
  )
}

export default TUCMC
