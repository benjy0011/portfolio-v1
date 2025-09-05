import Programmer from "@/assets/PixelProgrammer.png"
import RetroButton from "@/components/RetroButton"
import RotatingText from "@/components/RotatingText"
import { FileText } from "lucide-react"

export default function Home () {

  return (
    <section id="home" className="min-h-screen w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-6 px-4 justify-center">
        <div className="md:flex-1 flex flex-col items-center md:items-start justify-center gap-4 md:gap-10 md:h-full px-4">
          <h1 className="text-5xl md:text-7xl">Hello, I'm Benjy</h1>
          <div className="hidden md:flex text-3xl md:text-5xl items-center gap-3 flex-wrap md:flex-row">
            <p className="w-fit whitespace-nowrap">A junior</p> 
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
          </div>

          <div className="md:hidden flex text-3xl md:text-5xl items-center gap-3 flex-col">
            <p className="w-fit whitespace-nowrap">A junior</p>

            <div className="flex gap-3">
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
            </div>
          </div>
          

          <div className="mt-8 md:mt-4">
            <RetroButton variant="darkblue">
              <p className="text-xl">Resume</p>
              <FileText className="size-5" />
            </RetroButton>
          </div>
          
        </div>
        <div className="md:flex-1 min-w-0 min-h-0 flex items-center justify-center">
          <img className="w-full max-w-[40vw] h-auto max-h-[50vh] object-contain" src={Programmer} alt="programmer" />
        </div>
      </div>
    </section>
  )
}