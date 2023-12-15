import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
}

function SectionHeading({ children } : SectionHeadingProps) {
  return (
    <h2 className=' text-xl sm:text-3xl font-medium capitalize mb-4 sm:mb-8 text-center'>{children}</h2>
  )
}

export default SectionHeading