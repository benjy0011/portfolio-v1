import Stack from "@/components/Stack";
import Me from "@/assets/Me.png";
import Challenge from "@/assets/Tech4Good.png";
import Hackathon from "@/assets/Hackaten.png";
import { useMediaType } from "@/context/MediaContext/useMediaType";

const images = [
  { id: 2, img: Challenge },
  { id: 3, img: Hackathon },
  { id: 1, img: Me },
]

export default function About () {
  const { isMobileOrTablet } = useMediaType();

  return (
    <section id="about" className="md:min-h-full min-w-full flex justify-center flex-col md:flex-row">
      <h1 className="md:hidden text-2xl sticky top-0 z-50 w-full py-4 px-8 bg-retro-lightyellow/90">About me</h1>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-6 px-4 justify-center">
        <div className="md:flex-1 flex flex-col items-center md:items-start justify-center gap-4 md:gap-10 md:h-full px-4">
          
          <h1 className="text-2xl md:text-4xl md:static md:z-0 md:bg-transparent md:w-auto md:px-0 md:py-0 md:block hidden">About me</h1>

          <p className="md:text-xl">
            Hi, I’m Benjy, a First-Class Honours Mechatronics Engineering graduate with a passion for coding. During university, I won awards in hackathons and challenges despite not coming from an IT background. Now working in software engineering, I continue to sharpen my skills through self-learning and side projects. I’m detail-oriented and committed to creating pixel-perfect designs with great user experiences.
          </p>
        </div>
        <div className="md:flex-1 min-w-0 min-h-0 flex items-center justify-center">
          <Stack
            cardsData={images}
            // randomRotation={true}
            cardDimensions={isMobileOrTablet ? { width: 208, height: 258 } : { width: 312, height: 387 }}
          />
        </div>
      </div>
    </section>
  )
}