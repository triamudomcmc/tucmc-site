import Image from "next/image"
import { FC } from "react"

import announcementSrc from "@images/index/announcement.jpg"
import projectSrc from "@images/index/projects.jpg"
import peopleSrc from "@images/index/people.jpg"
import TUCMCSrc from "@images/index/tucmc.jpg"
import { TopicCard } from "@components/index/TopicCard"

const Landing: FC = () => {
  return (
    <div className="flex min-h-screen flex-col pb-8">
      <main className="relative">
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-6xl font-bold text-white">กช.</h1>

          <p className="mt-4 text-center text-2xl font-medium text-white">
            คณะกรรมการงานกิจกรรมพัฒนาผู้เรียน โรงเรียนเตรียมอุดมศึกษา
          </p>
        </div>

        <Image
          className="max-h-6xl w-full object-cover"
          src={TUCMCSrc}
          layout="responsive"
          // width={400}
          height={450}
          placeholder="blur"
          blurDataURL={TUCMCSrc.blurDataURL}
          alt="ประชาสัมพันธ์"
        />
      </main>

      <TopicCard mode="announcement" title="ประชาสัมพันธ์" actionText="เข้าชมงาน" imgSrc={announcementSrc} />

      <TopicCard title="กิจกรรม​สุดพิเศษ​" actionText="ดูผลงาน" imgSrc={projectSrc} />
      <TopicCard title="ทำความรู้จักพวกเรา" actionText="บุคลากร" imgSrc={peopleSrc} />
    </div>
  )
}

export default Landing
