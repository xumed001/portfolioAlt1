import Header from '@/components/header'
import './globals.css'
import { Outfit } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/themeSwitch'
import ThemeContextProvider from '@/context/theme-context'

const outfit = Outfit({subsets: ['latin']})

export const metadata = {
  title: 'Xumed | Portfolio',
  description: 'Xumed\'s front-end developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' !scroll-smooth'>
      <body 
      className={`${outfit.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-800 dark:text-gray-200 dark:text-opacity-90`}
      >
      <div className=" bg-rose-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className=" bg-indigo-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
       <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
       </ThemeContextProvider>
      </body>
    </html>
  )
}
