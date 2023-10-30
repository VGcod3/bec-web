import Organizers from "@/components/Organizers";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";
import About from '@/components/About'
import Aim from "@/components/Aim";
import CSID from "@/components/CSID";
import Partners from '@/components/Partners'
import Team from "@/components/Team";
import ForYou from "@/components/ForYou";


export default function Home() {
  return (
    <main className="bg-bec-bg">
      <Hero />
      <Aim />
      <About />
      <CSID />
      <ForYou />
      <Team />
      <Organizers />
      <Partners />
      <Footer />
    </main>
  )
}
