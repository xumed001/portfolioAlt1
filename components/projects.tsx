'use client';

import React from 'react'
import SectionHeading from './section-heading'
import {projectsData} from '@/lib/data'
import Project from './project'
import {useSectionInView} from '@/lib/hooks'
import { motion } from 'framer-motion'

function Projects() {
  const {ref} = useSectionInView('Projects')

  return (
    <motion.section 
    ref={ref} 
    id='projects' 
    className=' scroll-mt-24 mb-28'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175 }}
    >
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
        </div>
    </motion.section>
  )
}





export default Projects