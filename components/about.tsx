// 'use client'

// import React from 'react'
// import SectionHeading from './section-heading'
// import {motion} from 'framer-motion'
// import { useSectionInView } from '@/lib/hooks'

// function About() {
//   const {ref} = useSectionInView('About')

//   return (
//     <motion.section 
//         ref={ref}
//         id='about'
//         className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
//         initial={{ opacity: 0, y: 100}}
//         animate={{ opacity: 1, y: 0}}
//         transition={{ delay: 0.175 }}
//     >
//         <SectionHeading>About me</SectionHeading>
//         <p className="mb-3">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum ipsam esse quod, animi voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquid quo labore atque similique recusandae magni autem voluptatem, dignissimos doloribus earum quos consectetur beatae architecto, ratione, totam praesentium? Corrupti, illo?
//         </p>
//     </motion.section>
//   )
// }

// export default About