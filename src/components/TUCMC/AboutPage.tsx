import { Dispatch, FC, SetStateAction } from "react"
import { Zoomable } from "@components/common/Zoomable"
import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export const AboutPage = ({ setZoomOverlay }: { setZoomOverlay: Dispatch<SetStateAction<JSX.Element>> }) => {
  return (
    <>
      <main className="space-y-36 bg-white pb-20 text-TUCMC-pink-500 md:space-y-44">
        <article className="space-y-4">
          <div className="relative">
            <Swiper
              slidesPerView={"auto"}
              centeredSlides
              spaceBetween={30}
              initialSlide={4}
              loop
              pagination={{ clickable: true, bulletActiveClass: "swiper-pink" }}
            >
              {[
                "/assets/images/TUCMC/ClubActivities/IMG_0241.png",
                "/assets/images/TUCMC/ClubActivities/IMG_0503.jpeg",
                "/assets/images/TUCMC/ClubActivities/IMG_0508.png",
                "/assets/images/TUCMC/ClubActivities/IMG_7249.png",
                "/assets/images/TUCMC/ClubActivities/IMG_8053.jpeg",
                "/assets/images/TUCMC/ClubActivities/IMG_7251.png",
                "/assets/images/TUCMC/ClubActivities/IMG_7252.png",
                "/assets/images/TUCMC/ClubActivities/IMG_7253.png",
                "/assets/images/TUCMC/ClubActivities/IMG_7250.png",
              ].map((imgURL) => {
                return (
                  <SwiperSlide key={imgURL} style={{ width: "256px" }}>
                    <div className="w-[256px]">
                      <Zoomable
                        width={456}
                        height={302}
                        updateOverlay={setZoomOverlay}
                        src={imgURL}
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="mx-auto max-w-2xl space-y-5 px-6">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">01</h1>
              <p className="w-min text-center text-xl font-bold leading-5 md:w-max">กิจกรรมชมรม</p>
            </div>
            <p className="text-center">
              ส่วนหนึ่งของกิจกรรมพัฒนาผู้เรียน ดำเนินการโดยงานกิจกรรมพัฒนาผู้เรียน (กช.) ภายใต้การดูแลของฝ่ายวิชาการ
              โรงเรียนเตรียมอุดมศึกษา มีจุดประสงค์ให้นักเรียนที่มีความสนใจเดียวกันได้ทำกิจกรรมร่วมกัน
              เพื่อสนับสนุนให้นักเรียนได้พัฒนาศักยภาพของตนเอง
              การลงทะเบียนชมรมนั้นจะเริ่มขึ้นตั้งแต่ช่วงแรกของการเปิดภาคเรียนที่ 1
              โดยนักเรียนทุกคนจะต้องเป็นสมาชิกชมรมคนละ 1 ชมรม
            </p>
          </div>
        </article>
        <article className="space-y-4">
          <div>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides
              spaceBetween={30}
              initialSlide={5}
              loop
              pagination={{ clickable: true, bulletActiveClass: "swiper-pink" }}
            >
              {[
                "/assets/images/TUCMC/CharityActivities/IMG_7254.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7255.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7256.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7257.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7258.JPG",
                "/assets/images/TUCMC/CharityActivities/IMG_7260.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7259.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7261.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7262.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7301.png",
                "/assets/images/TUCMC/CharityActivities/IMG_7302.png",
              ].map((imgURL) => {
                return (
                  <SwiperSlide key={imgURL} style={{ width: "256px" }}>
                    <div className="w-[256px]">
                      <Zoomable
                        width={456}
                        height={302}
                        updateOverlay={setZoomOverlay}
                        src={imgURL}
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="mx-auto max-w-2xl space-y-5 px-6">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">02</h1>
              <p className="w-min text-center text-xl font-bold leading-5 md:w-max">
                กิจกรรมเพื่อสังคมและสาธารณประโยชน์
              </p>
            </div>
            <p className="text-center">
              กิจกรรมสาธารณประโยชน์เป็นกิจกรรมที่ส่งเสริมให้ผู้เรียนได้สร้างประโยชน์ต่อครอบครัว ชุมชน และสังคม
              ในลักษณะของอาสาสมัคร โดยในแต่ละภาคเรียน
              ทุกห้องเรียนจะต้องมีการทำกิจกรรมสาธารณประโยชน์ให้กับหน่วยงานหรือองค์กรต่าง ๆ
              ไม่ว่าจะเป็นภายในหรือนอกโรงเรียน ซึ่งงานกิจกรรมพัฒนาผู้เรียน (กช.) จะเป็นผู้คอยดูแล
              และประสานงานกับหัวหน้าห้องเรียนต่าง ๆ ในการจัดกิจกรรมเพื่อให้สามารถดำเนินไปด้วยความเรียบร้อย
            </p>
          </div>
        </article>
        <div className="space-y-4">
          <div>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides
              spaceBetween={30}
              initialSlide={5}
              loop
              pagination={{ clickable: true, bulletActiveClass: "swiper-pink" }}
            >
              {[
                "/assets/images/TUCMC/OpenHouse/IMG_7263.png",
                "/assets/images/TUCMC/OpenHouse/IMG_7264.JPG",
                "/assets/images/TUCMC/OpenHouse/IMG_7265.png",
                "/assets/images/TUCMC/OpenHouse/IMG_7266.png",
                "/assets/images/TUCMC/OpenHouse/IMG_7267.JPG",
                "/assets/images/TUCMC/OpenHouse/5802DF05-5722-4164-BBA6-CE4BCB82B0C7-min.jpg",
                "/assets/images/TUCMC/OpenHouse/DSCF4135-min.JPG",
                "/assets/images/TUCMC/OpenHouse/DSCF4309-min.JPG",
                "/assets/images/TUCMC/OpenHouse/DSCF3957-min.JPG",
                "/assets/images/TUCMC/OpenHouse/DSCF4393-min.JPG",
                "/assets/images/TUCMC/OpenHouse/IMG_7286.PNG",
                "/assets/images/TUCMC/OpenHouse/IMG_7269.png",
                "/assets/images/TUCMC/OpenHouse/IMG_7270.JPG",
                "/assets/images/TUCMC/OpenHouse/IMG_7276.PNG",
                "/assets/images/TUCMC/OpenHouse/IMG_7282.PNG",
                "/assets/images/TUCMC/OpenHouse/IMG_7268.png",
              ].map((imgURL) => {
                return (
                  <SwiperSlide key={imgURL} style={{ width: "256px" }}>
                    <div className="w-[256px]">
                      <Zoomable
                        width={456}
                        height={302}
                        updateOverlay={setZoomOverlay}
                        src={imgURL}
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="mx-auto max-w-2xl space-y-5 px-6">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">03</h1>
              <div className="w-min text-center text-xl font-bold leading-5 md:flex md:space-x-1">
                <p className="whitespace-nowrap">Triam Udom</p>
                <p className="whitespace-nowrap">Open House</p>
              </div>
            </div>
            <p className="text-center">
              กิจกรรมเปิดบ้านแนะแนวสายการเรียนและชมรมของโรงเรียนเตรียมอุดมศึกษา
              ให้นักเรียนที่สนใจศึกษาต่อได้รู้แนวทางของตนเองและได้รู้จักโรงเรียนในมุมมองใหม่ ๆ
              เป็นกิจกรรมที่เปิดโอกาสให้ผู้ที่สนใจ ไม่ว่าจะเป็นนักเรียน ผู้ปกครอง หรือคุณครู
              ได้พูดคุยและแลกเปลี่ยนข้อมูลแนวทางการศึกษาต่อกับนักเรียนจากแต่ละสายการเรียนโดยตรง
              เพื่อไขข้อสงสัยที่มีเกี่ยวกับโรงเรียนเตรียมอุดมฯ รวมถึงรับชมผลงานจากชมรมต่าง ๆ ซึ่งจะจัดขึ้นเป็นประจำทุกปี
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides
              spaceBetween={30}
              initialSlide={4}
              loop
              pagination={{ clickable: true, bulletActiveClass: "swiper-pink" }}
            >
              {[
                "/assets/images/TUCMC/ArtWorks/IMG_7272.JPG",
                "/assets/images/TUCMC/ArtWorks/IMG_7275.JPG",
                "/assets/images/TUCMC/ArtWorks/IMG_7274.JPG",
                "/assets/images/TUCMC/ArtWorks/sum_1_2564.jpg",
                "/assets/images/TUCMC/ArtWorks/sum_1_2565.jpg",
                "/assets/images/TUCMC/ArtWorks/final_1_2564.jpg",
                "/assets/images/TUCMC/ArtWorks/final_2_2564.jpg",
                "/assets/images/TUCMC/ArtWorks/saphap.jpg",
                "/assets/images/TUCMC/ArtWorks/MueNgae.png",
                "/assets/images/TUCMC/ArtWorks/IMG_7279.PNG",
                "/assets/images/TUCMC/ArtWorks/IMG_7280.PNG",
                "/assets/images/TUCMC/ArtWorks/IMG_7284.PNG",
                "/assets/images/TUCMC/ArtWorks/IMG_7278.PNG",
                "/assets/images/TUCMC/ArtWorks/IMG_7271.JPG",
              ].map((imgURL) => {
                return (
                  <SwiperSlide key={imgURL} style={{ width: "256px" }}>
                    <div className="w-[256px]">
                      <Zoomable
                        width={456}
                        height={862}
                        updateOverlay={setZoomOverlay}
                        src={imgURL}
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="mx-auto max-w-2xl space-y-5 px-6">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold">04</h1>
              <div className="w-min text-center text-xl font-bold leading-5 md:flex">
                <p className="whitespace-nowrap">ตารางเรียนและ</p>
                <p className="whitespace-nowrap">ตารางสอบ</p>
              </div>
            </div>
            <p className="text-center">
              กช.
              ได้นำตารางเรียนและตารางสอบที่โรงเรียนเป็นผู้จัดทำมาสร้างสรรค์ในรูปแบบใหม่ให้น่าอ่านและเข้าใจง่ายมากยิ่งขึ้น
              โดยนำมาปรับขนาดให้เหมาะกับการตั้งเป็น wallpaper หน้าจอบน Smart Phone / iPad
              ในส่วนของตารางสอบได้มีการทำแยกตามสายการเรียนต่าง ๆ เพื่อให้เกิดความสะดวกต่อการใช้งานของนักเรียน
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
