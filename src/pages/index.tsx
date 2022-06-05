import Image from "next/image"
import { FC } from "react"

import announcementSrc from "@images/index/announcement.jpg"
import projectSrc from "@images/index/projects.jpg"
import peopleSrc from "@images/index/people.jpg"
import clubsSrc from "@images/index/clubs.jpg"
import WhatIsTUCMCSrc from "@images/index/whatistucmc.jpg"
import TUCMCSrc from "@images/index/tucmc.jpg"
import TUCMCSQSrc from "@images/index/tucmc-sq.jpg"
import { TopicCard } from "@components/index/TopicCard"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import Link from "next/link"
import { useWindowDimensions } from "@utilities/document"
import { SM } from "@utilities/constants"
import { AnnouncementSection } from "@components/index/AnnoucementSection"
import { KorChor } from "@vectors/KorChor"

const Landing: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <DescribeRoute
      title="TUCMC"
      description="คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน โรงเรียนเตรียมอุดมศึกษา"
      imgURL="/meta/banner.jpg"
    >
      <div className="flex min-h-screen flex-col pb-8">
        <main className="relative">
          <h1 className="hidden">กช.</h1>
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col justify-center space-y-4 space-x-0 text-center sm:flex-row sm:items-center sm:space-x-10 sm:space-y-0 sm:text-left">
              <Link href="/TUCMC" passHref>
                <a className="transition-transform hover:scale-105">
                  <KorChor className="h-full w-[250px] text-white sm:w-[300px] xl:w-[350px]" />
                </a>
              </Link>

              <div className="flex flex-col justify-center">
                <p className="mt-4 text-center text-4xl font-medium text-white sm:text-left">คืออะไร ?</p>
                <p className="mb-4 whitespace-nowrap text-center text-lg font-light text-white sm:text-left">
                  ทำอะไร ? มีตำแหน่งอะไรบ้าง ?
                </p>
                <Link href="/TUCMC" passHref>
                  <a className="mt-4 rounded-full bg-white py-3 px-6 text-center text-xl font-medium text-TUCMC-pink-500 transition-all hover:scale-105 hover:bg-gray-100">
                    หาคำตอบได้ที่นี่
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-h-6xl h-[75vh]">
            <Image
              className="w-full object-cover brightness-95"
              src={width > SM ? TUCMCSrc : TUCMCSQSrc}
              layout="fill"
              // layout="responsive"
              // width={400}
              // height={450}
              placeholder="blur"
              blurDataURL={(width > SM ? TUCMCSrc : TUCMCSQSrc).blurDataURL}
              alt="กช. background"
            />
          </div>
        </main>

        <section className="announcement-section py-6">
          <AnnouncementSection
            title="รับสมัคร กช.65"
            body={
              <div>
                <h3 className="mb-4">⌜ ⎯ 🫴🏻 𝐏𝐈𝐂𝐊 𝐘𝐎𝐔𝐑 𝐑𝐈𝐆𝐇𝐓 𝐃𝐑𝐈𝐍𝐊 𝐀𝐍𝐃 𝐒𝐄𝐈𝐙𝐄 𝐓𝐇𝐄 𝐎𝐏𝐏𝐎𝐑𝐓𝐔𝐍𝐈𝐓𝐘 🍾 ⌝.</h3>
                <p className="my-2">
                  Insert coin ✧˖° เลือกเครื่องดื่มของคุณในการคัดเลือก ✱ คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)
                  ประจำปีการศึกษา 2565
                </p>
                <p className="my-2">กรอกใบสมัครได้ตั้งแต่วันนี้ - 3 มิถุนายน 2565</p>
                <p className="my-2">🕹 สอบถามข้อมูลเกี่ยวกับการคัดเลือกเพิ่มเติมได้ที่</p>
                <p className="mt-2">IG: tucmc_official</p>
                <p className="mb-2">FB: TUCMC</p>
              </div>
            }
            actionText="สมัครเลย"
            imgSrc={announcementSrc}
            href="https://forms.gle/YvCJNK1gZzr12pbJ9"
          />
        </section>

        {/* <article className="grid grid-cols-1 sm:grid-cols-5 sm:px-6 md:px-24 lg:px-48">
          <div />
          <TopicCard
            className="sm:col-span-3"
            href="/TUCMC"
            title="กช. คืออะไร​ ?"
            actionText="หาคำตอบได้ที่นี่"
            imgSrc={clubsSrc}
          />
          <div />
        </article> */}

        {/* <section className="grid grid-cols-1 sm:grid-cols-3 sm:px-6 md:px-24 lg:px-48"> */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 sm:px-6 md:px-24 lg:px-80">
          <TopicCard href="/TUCMC" title="กช. คืออะไร​ ?" actionText="หาคำตอบได้ที่นี่" imgSrc={WhatIsTUCMCSrc} />
          <TopicCard href="/committee" title="ทำความรู้จักพวกเรา" actionText="บุคลากร" imgSrc={peopleSrc} />
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 sm:px-6 md:px-24 lg:px-80">
          <TopicCard href="/work" title="ผลงานของเรา" actionText="ดูผลงาน" imgSrc={projectSrc} />
          <TopicCard
            href="https://register.clubs.triamudom.ac.th/clubs"
            title="กิจกรรมชมรม"
            actionText="ดูชมรมทั้งหมด"
            imgSrc={clubsSrc}
          />
        </section>
      </div>
    </DescribeRoute>
  )
}

export default Landing
