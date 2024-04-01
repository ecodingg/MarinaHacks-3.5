import { Contact, Faq, Info, PastWinners, Pillars, Sponsors, Team} from "@/views"
import { Prizes } from "@/views/Prizes"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-mhblue via-mhpink-200 to-mhpurple-100">
      <Info />
      <Pillars />
      <Prizes />
      <PastWinners />
      <Team />
      <Sponsors />
      <Faq />
      <Contact />
    </div>
  )
}
