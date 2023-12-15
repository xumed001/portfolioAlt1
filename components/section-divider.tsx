'use client';

import React from 'react'
import {motion} from 'framer-motion'

function SectiondDivider() {
  return (
    <motion.div className=' bg-gray-200 mt-8 mb-24 h-28 w-1 rounded-full hidden sm:block dark:bg-opacity-20'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.125 }}
    ></motion.div>
  )
}

export default SectiondDivider