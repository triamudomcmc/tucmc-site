import Image from "next/image"
import { FC } from "react"

import announcementSrc from "@images/index/announcement.jpg"
import projectSrc from "@images/index/projects.jpg"
import peopleSrc from "@images/index/people.jpg"
import clubsSrc from "@images/index/clubs.jpg"
import WhatIsTUCMCSrc from "@images/index/whatistucmc.jpg"
import TUCMCSrc from "@images/index/tucmc.jpg"
import TUCMCSQSrc from "@images/index/tucmc-sq.jpg"
import { TopicCard } from "@components/IndexPage/TopicCard"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import Link from "next/link"
import { useWindowDimensions } from "@utilities/document"
import { SM } from "@utilities/constants"
import { AnnouncementSection } from "@components/IndexPage/AnnoucementSection"
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
            title="✶ รายชื่อผู้ผ่านการคัดเลือกคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.) ปีการศึกษา 2565 🍾´ˎ˗"
            body={
              <div>
                <ol className="ml-8 list-decimal">
                  <li>ธณฏฐ์​ หริ่มเจริญ</li>
                  <li>ณัฐฏ์ณิชชา อัครปิยโภคิน</li>
                  <li>จิรัชญา ชุนหชัย</li>
                  <li>กันตภณ พีรเมธางกูร</li>
                  <li>ปกรณ์ อิทธิฉันทกิจ</li>
                  <li>ณภัทร ทรัพย์ธนะอุดม</li>
                  <li>สุทธิชา สีผาย</li>
                  <li>วรกนิษฐ์ ธารสุวรรณวงศ์</li>
                  <li>ธรรม์ฤทัย เหลืองสุรีย์</li>
                  <li>ภาคิน ธนูวัฒนา</li>
                  <li>พัทธ์ธีรา ชัยศิริถาวรกุล</li>
                  <li>ภารัล ศิริตระกูล</li>
                </ol>
                <p className="my-2">
                  ขอแสดงความยินดีกับผู้ผ่านการคัดเลือก และขอบคุณทุกคนที่ให้ความสนใจกับการคัดเลือกในครั้งนี้ ♡
                </p>
              </div>
            }
            actionText="ดูเพิ่มเติม"
            imgSrc={announcementSrc}
            href="https://www.facebook.com/triamudomclubs/posts/pfbid02dEw1F7BoruwMcCnMxhF3rqpmne5AfvLo5KfyrbQ3HmqH4Brfc3NsDMmSPNPyFbMql"
          />
        </section>

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
