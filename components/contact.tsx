import React from 'react'
import SectionHeading from './section-heading'
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section 
    id='contact'
    className='mt-10 mb-20 sm:mb-28 sm:text-xl'
    >
        <SectionHeading>Contact me</SectionHeading>
        <div className=' flex items-center gap-2'>
            <p className='text-gray-700 font-light dark:text-white/70'>Get in Touch</p>
            <MdEmail />
            <a href="mailto:xumed001@gmail.com" className=' hover:text-blue-400  hover:underline'>xumed001@gmail.com</a>    
        </div>
    </section>
  )
}

export default Contact