
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectiondDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4">
      <Intro />
      <SectiondDivider />
      <Projects />
      <Skills />
      <SectiondDivider />
      <Contact />
    </main>
  )
}
