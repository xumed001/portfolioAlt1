'use client';

import React from 'react'
import laptop from '@/public/laptop.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading'

function Intro() {
  const {ref} =  useSectionInView('Home', 0.5)

  return (
    <section 
        ref={ref}
        id='home' 
        className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: 'tween',
                        duration: 0.2,
                    }}
                    >
                    <Image 
                        src={laptop}
                        alt='Person on a laptop'
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                </motion.div>
                <motion.span className='text-2xl absolute bottom-0 right-0'
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                    >
                    🎯
                </motion.span>
            </div>
        </div>

        <motion.h1 
            className='mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
        >
            <p><strong className='text-2xl sm:text-6xl'>Front-end Developer</strong></p>
            <span className=' font-light'>Hello! I&apos;m Xumed, I enjoy transforming ideas into captivating digital experiences and thrive on creating user-friendly interfaces that look great and elevate the overall browsing experience.
            </span>
        </motion.h1>

        <motion.div className='flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{
            delay: 0.1,
        }}
        >
            <Link 
                href='#contact'
                className='group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                > 
                Contact <BsArrowRight className=' opacity-70 group-hover:translate-x-1 transition' /> 
            </Link>
            <a href="https://www.linkedin.com/in/xumed001/" target='_blank' className=' bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 outline-none dark:text-white/60 dark:bg-white/10'>
                <BsLinkedin />
            </a>
            <a href="https://github.com/xumed001" target='_blank'  className='bg-white p-[0.9rem] text-gray-700 flex items-center gap-2 text-[1.55rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 outline-none dark:text-white/60 dark:bg-white/10'>
                <FaGithubSquare  />
            </a>
        </motion.div>

        <motion.section 
        className='mt-14 sm:mt-24 mb-18 max-w-[45rem] text-center mx-auto leading-5 sm:leading-8 sm:mb-20 text-sm'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.175 }}
        >

        <SectionHeading>About me</SectionHeading>
        <p className="mb-3 font-light">
        Hello! I&apos;m a frontend developer based in Austin, TX. Bringing designs to life, ensuring user-friendly and responsive interfaces across devices. With a passion for crafting elegant websites that seamlessly blend functionality and aesthetics.
        </p>
        <p className='font-light'>
        Outside of coding, I enjoy playing video games, watching movies, listening to history podcast and continuously learning to refine my skills. Let&apos;s collaborate and bring your digital vision to life!
        </p>        
        </motion.section>
    </section>
  )
}

export default Intro