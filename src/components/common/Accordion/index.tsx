import React, { Children, ReactElement, ReactNode, useEffect }  from "react"
import { ChevronUpIcon } from "@heroicons/react/outline"
import { motion, Variants } from "framer-motion"
import { useState } from "react"
import { AccordionIcon, AccordionIconProps } from "./Icons"

const DURATION = 0.2

const DivVariants: Variants = {
  hidden: {
    height: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: "hidden",
    transition: { duration: DURATION, type: "tween" },
  },
  active: {
    height: "unset",
    overflow: "auto",
    paddingTop: "unset",
    paddingBottom: "unset",
    transition: { duration: DURATION, type: "tween" },
  },
}

export const Accordion = ({
  defaultExpanded,
  children,
  title,
  id,
  Icon = AccordionIcon.Chevron,
}: {
  defaultExpanded?: boolean
  title: string
  id?: string
  Icon?: React.ComponentType<AccordionIconProps>
  children: ReactNode
}) => {
  const [expanded, setExpand] = useState(defaultExpanded ?? false)

  return (
    <div className="mb-2 w-full rounded-lg bg-white" id={id ? `${id}-parent` : undefined}>
      <button
        aria-expanded={expanded}
        aria-controls={id ? `${id}-panel` : id}
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setExpand((c) => !c)
        }}
        id={id ? `${id}-header` : undefined}
        className="mb-1 flex w-full items-start justify-between rounded-lg bg-white px-8 py-6 shadow-md"
      >
        <p className="mr-3 text-left" id={id}>
          {title}
        </p>
        <Icon expanded={expanded} />
      </button>
      <motion.div
        role="region"
        id={id ? `${id}-panel` : undefined}
        aria-labelledby={id ? `${id}-header` : undefined}
        animate={expanded ? "active" : "hidden"}
        variants={DivVariants}
        className="hidden h-0 rounded-lg rounded-t-none bg-[#f7fafc] py-0 text-gray-500 shadow-md"
      >
        {children}
      </motion.div>
    </div>
  )
}

const Answer = ({ children }: { children: string }) => (
  <div
    className="accordion-text px-8 py-4 text-TUCMC-gray-600"
    dangerouslySetInnerHTML={{ __html: String(children) }}
  />
)
Answer.displayName = "Answer"
Accordion.Answer = Answer

const NestedAnswer = ({ children }: { children: ReactNode }) => <div className="">{children}</div>
Answer.displayName = "NestedAnswer"
Accordion.NestedAnswer = NestedAnswer
