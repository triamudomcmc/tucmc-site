import { Accordion } from "@components/common/Accordion"
import { AccordionIcon } from "@components/common/Accordion/Icons"
import { Zoomable } from "@components/common/Zoomable"
import { PositionData, Positions, Review } from "@map/positions"
import Image from "next/image"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { combine } from "@services/tailwind"
import { useRouter } from "next/router"

const ReviewItem: FC<{ review: Review }> = ({ review }) => {
  return (
    <>
      <div>
        <div className="flex flex-wrap-reverse md:flex-row md:flex-nowrap">
          <div className="mt-6 ml-4 flex flex-row md:mt-0 md:flex-col">
            <div className="h-20 w-20 md:h-24 md:w-24">
              <Image
                priority={true}
                quality={50}
                placeholder="blur"
                src={review.profileURL}
                blurDataURL={review.profileURL}
                width="128"
                height="128"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-1 flex flex-col pl-2 text-gray-500 md:mt-3 md:pl-0">
              <p className="text-xl font-black md:text-2xl">{review.name}</p>
              <span className="w-max text-xs">{review.contact}</span>
              <span className="text-xs">กช.64</span>
            </div>
          </div>
          <div className="flex flex-col md:ml-8">
            <div className="relative hidden md:block">
              <span className="absolute left-10 top-6 text-7xl text-gray-300">“</span>
            </div>
            <div className="bg-whtie rounded-xl px-6 shadow-lg md:px-16 md:pt-12 md:pb-16">
              <div className="h-12 pt-2 text-center text-6xl text-gray-300 md:hidden">
                <span className="absolute">“</span>
              </div>
              <article
                dangerouslySetInnerHTML={{
                  __html: review.reviewText
                }}
                className="club-article ql-container ql-editor font-texts text-[1.05rem] text-gray-500"
              ></article>
              <p className="mt-4 h-14 w-full text-center text-6xl text-gray-300 md:hidden">”</p>
            </div>
            <div className="relative hidden md:block">
              <span className="absolute right-16 -top-16 text-7xl text-gray-300">”</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

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

export const PositionsPage: FC<{ setZoomOverlay: Dispatch<SetStateAction<JSX.Element>> }> = ({ setZoomOverlay }) => {
  const [tab, setTab] = useState<string>("GeneralCommittee")
  const [positionData, setPositionData] = useState<PositionData>(Positions["GeneralCommittee"])
  const { query, replace } = useRouter()

  useEffect(() => {
    if (Positions.hasOwnProperty(tab)) {
      setPositionData(Positions[tab])
    }
  }, [tab])

  useEffect(() => {
    if (Positions.hasOwnProperty(query?.pos as string)) {
      setTab(query?.pos as string)
    }
  }, [query])

  const getTab = (tabName: string) => {
    return tab === tabName
      ? "bg-TUCMC-pink-400 text-white hover:bg-TUCMC-pink-500"
      : "bg-white text-TUCMC-pink-400 hover:bg-TUCMC-gray-100"
  }

  return (
    <>
      <section className="mx-auto grid grid-cols-2 gap-2 px-4 sm:px-24 lg:grid-cols-3 lg:gap-6 2xl:max-w-[1050px]">
        {Object.keys(Positions).map((pos, i) => {
          return (
            <button
              key={`${pos}-${i}`}
              onClick={() => {
                setTab(pos)
                replace({ query: { ...query, pos: pos } }, undefined, { shallow: true })
              }}
              className={combine(
                getTab(pos),
                "rounded-lg px-6 py-4 text-center shadow-md transition-all hover:scale-105"
              )}
            >
              <p className="text-lg font-normal">{Positions[pos].nameEN}</p>
              <p className="font-light">{Positions[pos].nameTH}</p>
            </button>
          )
        })}
      </section>

      <hr className="my-6" />
      <motion.div initial="initial" animate="animate" variants={variants} key={tab}>
        <main className="relative mx-auto flex max-w-[1440px] flex-col space-y-8 bg-white px-4 pb-10 font-light text-TUCMC-gray-600 sm:px-10 xl:px-48">
          <section className="flex flex-col items-center">
            <h2 className="text-2xl font-normal text-TUCMC-gray-700">{positionData.nameEN}</h2>
            <p className="mb-6 text-center text-lg font-light text-TUCMC-gray-600">
              {positionData.nameTH} | {positionData.count} ตำแหน่ง
            </p>

            <Zoomable
              width={350}
              height={350}
              updateOverlay={setZoomOverlay}
              src="/assets/images/placeholder/position.jpg"
              className="rounded-2xl object-cover"
              alt="Graphic Designerer"
            />
          </section>

          <p>
            <em>{positionData.nameEN} (n.)</em>
            <br />
            {positionData.foreword}
          </p>

          <section>
            <h3 className="mb-3 text-xl font-normal text-TUCMC-gray-700">หน้าที่</h3>
            <ol className="list-decimal space-y-2 pl-10">
              {positionData.job_description.map((d, i) => (
                <li key={`${d}-${i}`}>{d}</li>
              ))}
            </ol>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-normal text-TUCMC-gray-700">คุณสมบัติ</h3>
            <ol className="list-decimal space-y-2 pl-10">
              {positionData.requirements.map((d, i) => (
                <li key={`${d}-${i}`}>{d}</li>
              ))}
            </ol>

            {positionData?.note && <p className="mt-4">{positionData?.note}</p>}
          </section>

          <section>
            <h3 className="mb-3 text-xl font-normal text-TUCMC-gray-700">คำถามที่พบบ่อย</h3>
            <div className="space-y-2">
              {positionData.FAQ.map((faq, i) => (
                <Accordion
                  key={`${faq.question}-${faq.answer}-${i}`}
                  Icon={AccordionIcon.Chevron}
                  id={`${faq.question}-${faq.answer}-${i}`}
                  title={faq.question}
                >
                  <Accordion.Answer>{faq.answer}</Accordion.Answer>
                </Accordion>
              ))}
            </div>
          </section>

          {positionData.reviews.length > 0 && (
            <section>
              <h3 className="mb-3 text-xl font-normal text-TUCMC-gray-700">รีวิวจากรุ่นพี่</h3>
              <div className="space-y-4">
                {positionData.reviews.map((review, i) => (
                  <ReviewItem key={`${review.name}-${i}`} review={review} />
                ))}
              </div>
            </section>
          )}
        </main>
      </motion.div>
    </>
  )
}
