import Programmer from "@/assets/PixelProgrammer.png"
import ProgrammerWebp from "@/assets/WorkingProgrammer_1.webp"
import RetroButton from "@/components/RetroButton"
import RotatingText from "@/components/RotatingText"
import { FileText } from "lucide-react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Home () {

  useGSAP(() => {
    const h1Split = new SplitText('#intro-h1', { type: 'chars, words' });

    const tl = gsap.timeline();

    tl.from(h1Split.chars, {
      yPercent: 100,
      duration: 1,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.06
    })

    tl.from(['.other-text', '.home-buttons', '.video'], {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.2
    }, "-=0.7")
  })

  return (
    <section id="home" className="py-8 md:py-15 md:pt-15 md:min-h-screen w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-6 px-4 md:px-14 justify-center">
        <div className="md:flex-1 flex flex-col items-center md:items-start justify-center gap-7 md:gap-10 md:h-full px-4">
          <h1 id="intro-h1" className="text-4xl md:text-5xl lg:text-7xl">Hello, I'm Benjy</h1>
          {/* desktop */}
          <div className="other-text hidden md:flex text-3xl md:text-3xl lg:text-4xl xl:text-5xl items-center gap-3 flex-wrap md:flex-row">
            <p className="w-fit whitespace-nowrap">A junior</p> 
            <span>
              <RotatingText
                texts={['Full-stack', 'Front-end', 'Back-end']}
                mainClassName="w-fit px-4 sm:px-2 md:px-6 bg-retro-red text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg selection:bg-white selection:text-retro-red"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />  
            </span> 
            <p>developer</p>
          </div>

          {/* mobile */}
          <div className="other-text md:hidden flex text-3xl md:text-5xl items-center gap-3 flex-col">
            <p className="w-fit whitespace-nowrap">A junior</p>

            {/* <div className="flex flex-col gap-3"> */}
              <span>
                <RotatingText
                  texts={['Full-stack', 'Front-end', 'Back-end']}
                  mainClassName="w-fit px-4 sm:px-2 md:px-6 bg-retro-red text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />  
              </span> 
              <p>developer</p>
            {/* </div> */}
          </div>
          
          {/* Button */}
          <div className="home-buttons mt-5 md:mt-4">
            <RetroButton variant="darkblue">
              <p className="text-xl">Resume</p>
              <FileText className="size-5" />
            </RetroButton>
          </div>
          
        </div>
        <div className="video md:flex-1 min-w-0 min-h-0 flex items-center justify-center pt:7 md:pt-8">
          {/* <img className="w-full max-w-[40vw] h-auto max-h-[50vh] object-contain" src={Programmer} alt="programmer" /> */}
          {/* <video
            src={ProgrammerWorking}
            poster={Programmer}
            className="w-[69%] h-auto bg-transparent"
            autoPlay
            loop
            // playsInline
            muted
          /> */}

          <picture className="w-[69%] h-auto bg-transparent">
            <source srcSet={ProgrammerWebp} type="image/webp" />
            <img src={Programmer} alt="programmer coding" />
          </picture>
        </div>
      </div>
    </section>
  )
}