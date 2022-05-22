import Image from "next/image"
import { FC } from "react"

import announcementSrc from "@images/index/announcement.jpg"
import projectSrc from "@images/index/projects.jpg"
import peopleSrc from "@images/index/people.jpg"
import TUCMCSrc from "@images/index/tucmc.jpg"
import { TopicCard } from "@components/index/TopicCard"
import { DescribeRoute } from "@components/Meta/DescribeRoute"
import Link from "next/link"

const Landing: FC = () => {
  return (
    <DescribeRoute
      title="TUCMC"
      description="คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน โรงเรียนเตรียมอุดมศึกษา"
      imgURL="/meta/banner.jpg"
    >
      <div className="flex min-h-screen flex-col pb-8">
        <main className="relative">
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col justify-center space-y-12 space-x-0 text-center sm:flex-row sm:space-x-4 sm:space-y-0 sm:text-left">
              <h1 className="text-center text-[14rem] font-bold leading-[0.5] text-white">กช.</h1>

              <div className="mt-4 flex flex-col justify-center">
                <p className="text-center text-4xl font-medium text-white sm:text-left">คืออะไร ?</p>
                <p className="whitespace-nowrap text-center text-lg font-light text-white sm:text-left">
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
              className="w-full object-cover blur-[1.5px] brightness-95"
              src={TUCMCSrc}
              layout="fill"
              // layout="responsive"
              // width={400}
              // height={450}
              placeholder="blur"
              blurDataURL={TUCMCSrc.blurDataURL}
              alt="ประชาสัมพันธ์"
            />
          </div>
        </main>

        <TopicCard mode="announcement" title="ประชาสัมพันธ์" actionText="เข้าชมงาน" imgSrc={announcementSrc} />

        <section className="grid grid-cols-1 sm:grid-cols-3 sm:px-6 md:px-24 lg:px-48">
          <TopicCard title="กิจกรรม​สุดพิเศษ​" actionText="ดูผลงาน" imgSrc={projectSrc} />
          <TopicCard title="ทำความรู้จักพวกเรา" actionText="บุคลากร" imgSrc={peopleSrc} />
          <TopicCard title="กิจกรรมชมรม" actionText="ดูชมรมทั้งหมด" imgSrc={peopleSrc} />
        </section>
      </div>
    </DescribeRoute>
  )
}

export default Landing
