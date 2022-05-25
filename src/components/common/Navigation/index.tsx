import { LogoIcon, WhiteLogo } from "@vectors/Logo"
import NavButton from "@components/common/Navigation/NavButton"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { detectOuside } from "@utilities/document"
import Router, { useRouter } from "next/router"
// import { useAuth } from "@client/auth"
import { ClipboardListIcon, HomeIcon, MailIcon, UsersIcon, DocumentSearchIcon } from "@heroicons/react/outline"
import { combine } from "@services/tailwind"

const Navigation = () => {
  const [reveal, setReveal] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [load, setLoad] = useState(true)
  const [initial, setInitial] = useState(true)
  const panel = useRef<HTMLDivElement>(null)
  const accRef = useRef(null)

  const { pathname } = useRouter()

  detectOuside(panel, reveal, () => {
    setReveal(false)
  })

  useEffect(() => {
    setLoad(false)
    if (!initial) {
      if (!animation) {
        setReveal(!reveal)
      }
    } else {
      setInitial(false)
    }
  }, [toggle])

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 100
      }
    },
    close: {
      x: "-100%",
      transition: {
        type: "tween",
        stiffness: 100
      }
    }
  }

  const getClass = (expected: string, part: "font" | "icon" | "bg") => {
    if (pathname === expected) {
      switch (part) {
        case "bg":
          return "bg-TUCMC-pink-100 border-TUCMC-pink-400 text-pink-400"
        case "font":
          return ""
        case "icon":
          return ""
      }
    } else {
      switch (part) {
        case "bg":
          return "hover:bg-TUCMC-gray-100 cursor-pointer"
        case "font":
          return "text-TUCMC-gray-800"
        case "icon":
          return "text-TUCMC-gray-500"
      }
    }
  }

  return (
    <>
      <motion.div
        animate={reveal ? "open" : "closed"}
        className="sticky top-0 z-50 flex h-16 flex-row items-center justify-center bg-TUCMC-gray-900 px-6"
      >
        <div className="flex w-full max-w-6xl flex-row items-center justify-between">
          <Link passHref href="/">
            <a>
              <WhiteLogo />
            </a>
          </Link>
          <div className="flex flex-row">
            <div className="hidden flex-row space-x-10 whitespace-nowrap font-medium md:flex">
              <Link passHref href="/">
                <a className="text-white">หน้าแรก</a>
              </Link>
              <Link passHref href="/work">
                <a className="text-white">ผลงาน</a>
              </Link>
              <Link passHref href="/committee">
                <a className="text-white">บุคลากร</a>
              </Link>
              <Link passHref href="/TUCMC">
                <a className="text-white">กช.</a>
              </Link>
              <Link passHref href="/contact">
                <a className="text-white">ติดต่อ</a>
              </Link>
              <Link passHref href="https://register.clubs.triamudom.ac.th/clubs">
                <a className="text-white">ชมรม</a>
              </Link>
            </div>
            <div className="md:hidden">
              <NavButton
                toggle={() => {
                  setToggle(!toggle)
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        onAnimationStart={() => {
          setAnimation(true)
        }}
        onAnimationComplete={() => {
          setAnimation(false)
        }}
        ref={panel}
        initial={{ x: "-100%" }}
        animate={reveal ? "open" : "close"}
        variants={variants}
        className={combine("fixed top-0 z-50 h-full min-w-[280px] bg-white", load ? "hidden" : "")}
      >
        <div className="bg-TUCMC-gray-800 p-4">
          <Link passHref href="/">
            <a>
              <WhiteLogo />
            </a>
          </Link>
        </div>
        <Link passHref href="/">
          <a className={combine("flex flex-row items-center space-x-4 border-l-2 py-3 pl-4 pr-8", getClass("/", "bg"))}>
            <HomeIcon className={combine("h-7 w-7", getClass("/", "icon"))} />{" "}
            <span className={getClass("/", "font")}>หน้าแรก</span>
          </a>
        </Link>
        <Link passHref href="/work">
          <a
            className={combine(
              "flex flex-row items-center space-x-4 border-l-2 py-3 pl-4 pr-8",
              getClass("/work", "bg")
            )}
          >
            <DocumentSearchIcon className={combine("h-7 w-7", getClass("/work", "icon"))} />{" "}
            <span className={getClass("/work", "font")}>ผลงาน</span>
          </a>
        </Link>
        <Link passHref href="/committee">
          <a
            className={combine(
              "flex flex-row items-center space-x-4 border-l-2 py-3 pl-4 pr-8",
              getClass("/committee", "bg")
            )}
          >
            <UsersIcon className={combine("h-7 w-7", getClass("/committee", "icon"))} />{" "}
            <span className={getClass("/committee", "font")}>บุคลากร</span>
          </a>
        </Link>
        <Link passHref href="/TUCMC">
          <a
            className={combine(
              "flex flex-row items-center space-x-4 border-l-2 py-3 pl-4 pr-8",
              getClass("/TUCMC", "bg")
            )}
          >
            <LogoIcon className={combine("h-7 w-7", getClass("/TUCMC", "icon"))} />{" "}
            <span className={getClass("/TUCMC", "font")}>ทำความรู้จัก กช.</span>
          </a>
        </Link>
        <Link passHref href="/contact">
          <a
            className={combine(
              "flex flex-row items-center space-x-4 border-l-2 py-3 pl-4 pr-8",
              getClass("/contact", "bg")
            )}
          >
            <MailIcon className={combine("h-7 w-7", getClass("/contact", "icon"))} />{" "}
            <span className={getClass("/contact", "font")}>ติดต่อ</span>
          </a>
        </Link>
        <Link passHref href="https://register.clubs.triamudom.ac.th/clubs">
          <a
            className={combine(
              "flex cursor-pointer flex-row items-center space-x-4 border-l-2 py-3 pl-4 pr-8",
              getClass("/clubs", "bg")
            )}
          >
            <ClipboardListIcon className={combine("h-7 w-7", getClass("/clubs", "icon"))} />{" "}
            <span className={getClass("/clubs", "font")}>รายชื่อชมรม</span>
          </a>
        </Link>
      </motion.div>
    </>
  )
}

export default Navigation
