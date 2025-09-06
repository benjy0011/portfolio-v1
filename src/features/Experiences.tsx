import RetroTag, { type SkillTagProps } from "@/components/RetroTag"
import { ExperiencesInfo } from "@/constants"
import { cn } from "@/lib/utils"
import { Ghost } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all";
import { useMediaType } from "@/context/MediaContext/useMediaType"
import { useRef } from "react"


export interface ExperienceObj {
  timeline: string
  position: string
  company: string
  companyCSSClassName?: string
  experienceDescriptions: string[]
  skillTags?: SkillTagProps[]
}

interface ExperienceProp extends ExperienceObj {
  className?: string
}


const Experience = ({
  className = "",
  timeline,
  position,
  company,
  companyCSSClassName = "text-retro-darkblue",
  experienceDescriptions,
  skillTags,
}: ExperienceProp) => {
  return (
    <div className={cn("flex flex-col md:flex-row", className)}>
      {/* Timeline */}
      <div className="flex-1 text-lg mb-2 md:mb-0">
        {timeline}
      </div>
      {/* Description */}
      <div className="flex-4">
        <h1 className="font-medium text-xl">{position} <span className={companyCSSClassName}>@{company}</span></h1>
        <div className="flex flex-col gap-2 mt-5">
          {experienceDescriptions.map((desc, idx) => (
            <div key={idx} className="flex gap-4 md:gap-6 text-lg">
              <span><Ghost className="mt-1.5" size={20}/></span>
              <p>{desc}</p>
            </div>
          ))}

          <div className="flex gap-3 flex-wrap mt-4">
            {skillTags && skillTags.length > 0 &&
              skillTags.map((skill, idx) => (
                <RetroTag
                  key={idx}
                  {...skill}
                />
              ))
            }
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default function Experiences () {
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const { isMobileOrTablet } = useMediaType();

  useGSAP(() => {
    const experienceH1 = new SplitText('#experience-h1', { type: 'chars, words' });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#experiences',
        start: isMobileOrTablet ? '10% bottom' : '25% bottom'
      }
    })

    tl1.from(experienceH1.chars, {
      yPercent: 100,
      duration: 1,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.06
    }, 0)

  }, [isMobileOrTablet])

  useGSAP(() => {
    if (experiencesRef.current === null) return;

    const experienceDivs = gsap.utils.toArray(
      Array.from((experiencesRef.current as HTMLDivElement).children)
    ) as HTMLElement[];;

    experienceDivs.forEach((div) => {
      gsap.from(div, {
        opacity: 0,
        yPercent: 100,
        ease: 'expo.out',
        duration: 2,
        scrollTrigger: {
          trigger: div,
          start: isMobileOrTablet ? '0% bottom' : '0% bottom',
          // end: isMobileOrTablet ? '20% bottom' : '50% bottom',
          // scrub: 1,
        }
      })
    })
    
    
  }, { scope: experiencesRef })

  return (
    <section id="experiences" className="py-20 md:py-25 px-8 md:px-0 md:min-h-screen min-w-full flex justify-center flex-col md:flex-row">
      <div className="max-w-7xl">
        <h1 id="experience-h1" className="sticky md:static bg-retro-lightyellow/90 md:bg-transparent z-50 top-0 text-2xl md:text-4xl py-4 md:py-0 md:px-0 font-medium md:text-center">Experience</h1>

        <div ref={experiencesRef} className="flex flex-col mt-10 md:mt-20 gap-18">

          {ExperiencesInfo.map((exp, idx) => (
            <Experience
              key={idx}
              {...exp}
            />
          ))}


        </div>
      </div>
    </section>
  )
}