import { SocialFacebook, SocialInstagram } from "@vectors/icons/Socials"
import { WhiteLogo } from "@vectors/Logo"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="flex select-none flex-col items-center justify-center space-y-24 bg-TUCMC-gray-900 py-14 md:space-y-0 md:py-8">
        <div className="flex flex-col items-center space-y-4 text-xl text-white md:hidden">
          <Link passHref href="/">
            <a>หน้าแรก</a>
          </Link>
          <Link passHref href="/work">
            <a>ผลงาน</a>
          </Link>
          <Link passHref href="/committee">
            <a>บุคลากร</a>
          </Link>
          <Link passHref href="/TUCMC">
            <a>ทำความรู้จัก กช.</a>
          </Link>
          <Link passHref href="/contact">
            <a>ติดต่อ</a>
          </Link>
          <Link passHref href="https://register.clubs.triamudom.ac.th/clubs">
            <a>ชมรม</a>
          </Link>
        </div>
        <div className="md:flex md:w-full md:justify-center">
          <div className="flex flex-col items-center space-y-8 md:w-full md:max-w-6xl md:flex-row-reverse md:justify-between md:space-y-0 md:px-6">
            <div className="flex flex-row space-x-6 md:space-x-3">
              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/triamudomclubs">
                <SocialFacebook className="h-10 w-10 text-white md:h-6 md:w-6" />
              </a>
              <a rel="noreferrer" target="_blank" href="https://instagram.com/tucmc_official">
                <SocialInstagram className="h-10 w-10 text-white md:h-6 md:w-6" />
              </a>
            </div>
            <div className="hidden flex-row space-x-10 whitespace-nowrap font-medium text-white md:flex">
              <Link passHref href="/">
                <a>หน้าแรก</a>
              </Link>
              <Link passHref href="/work">
                <a>ผลงาน</a>
              </Link>
              <Link passHref href="/committee">
                <a>บุคลากร</a>
              </Link>
              <Link passHref href="/TUCMC">
                <a>กช.</a>
              </Link>
              <Link passHref href="/contact">
                <a>ติดต่อ</a>
              </Link>
              <Link passHref href="https://register.clubs.triamudom.ac.th/clubs">
                <a>ชมรม</a>
              </Link>
            </div>
            <Link passHref href="/">
              <a>
                <WhiteLogo />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
