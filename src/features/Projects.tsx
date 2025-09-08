import FlipZoom from "@/components/FlipZoom";
import { ProjectsInfo } from "@/constants";
import { useMediaType } from "@/context/MediaContext/useMediaType";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all";
import { Github, Link, Medal } from "lucide-react";
import { Fragment, useRef, type ReactNode } from "react";


export interface ProjectObj {
  projectImg: string
  projectTitle: string
  projectDescription: string

  highlightWords?: string[]
  githubLink?: string
  projectLink?: string
  wonAward?: boolean

}

interface ProjectProps extends ProjectObj {
  index: number
}

const autoStrongWords = (originalString: string, wordsToBeStrong: string[] ): ReactNode => {
  if (originalString.length < 1 ) return "";
  if (wordsToBeStrong.length < 1) return <p>{originalString}</p>;

  const oriArray = originalString.split(" ");
  let checkStrong: string[] = [];
  let checkStrongIndex = 0;

  wordsToBeStrong.forEach(w => {
    const words = w.split(" ");
    checkStrong = [...checkStrong, ...words]
  });

  return (
    <p>
      {oriArray.map((word, i) => {
        if (checkStrong?.[0] && checkStrongIndex < checkStrong.length && word.includes(checkStrong[checkStrongIndex])) {
          checkStrongIndex++;
          
          if (word[word.length-1] === ",") {
            return (
              <Fragment key={i}>
                <strong>{word.slice(0, word.length-1)}</strong>{`, `}
              </Fragment>
            )
          }

          if (word[word.length-1] === ".") {
            return (
              <Fragment key={i}>
                <strong>{word.slice(0, word.length-1)}</strong>{`. `}
              </Fragment>
            )
          }
          
          return (
            <strong key={i}>
              {word}
              {i !== oriArray.length-1 ? " " : ""}
            </strong>
          );
        }
        return (
          <Fragment key={i}>
            {word}
            {i !== oriArray.length-1 ? " " : ""}
          </Fragment>
        )
      })}
    </p>
  );
}

const Project = ({
  projectImg,
  projectTitle,
  projectDescription,
  highlightWords,
  githubLink,
  projectLink,
  wonAward,
  index,
}: ProjectProps) => {
  const hasLinks = githubLink || projectLink;

  const isEvenProject = index % 2 === 0;

  const processedDescription = highlightWords && highlightWords.length > 0
    ? autoStrongWords(projectDescription, highlightWords)
    : (<p>{projectDescription}</p>)

  return (
    <div className={cn("flex flex-col lg:flex-row gap-4 lg:gap-10", isEvenProject && "lg:flex-row-reverse")}>
      
      {/* Project Image */}
      <div className="flex-1 overflow-hidden bg-retro-paleyellow rounded-xl p-4 w-fit h-fit">
        <img className="w-md h-auto lg:w-full lg:h-full object-contain" src={projectImg} alt={projectTitle} />
      </div>

      <div className="flex-1 md:flex-3 flex flex-col gap-3">

        {/* Project Title */}
        <h2 className="font-semibold text-xl">
          {projectTitle}
          {wonAward && <span className="ml-4 mb-0.5 inline-flex items-center align-middle"><Medal /></span>}
        </h2>

        {/* Project Description */}
        <div className="font-turret-road font-medium text-[1rem] leading-7">
          {processedDescription}
        </div>

        {hasLinks &&
          <div className="flex gap-2 md:mt-2.5">
            {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer"><FlipZoom><Github size={26} /></FlipZoom></a>}
            {projectLink && <a href={projectLink} target="_blank" rel="noopener noreferrer"><FlipZoom><Link size={26} /></FlipZoom></a>}
          </div>
        }
      </div>

    </div>
  )
}

export default function Projects () {
  const { isMobileOrTablet } = useMediaType();
  const projectsRef = useRef<null | HTMLDivElement>(null); 

  useGSAP(() => {
    const projectsH1 = new SplitText('#projects-h1', { type: 'chars, words' });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: isMobileOrTablet ? '10% bottom' : '25% bottom'
      }
    })

    tl1.from(projectsH1.chars, {
      yPercent: 100,
      duration: 1,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.06
    }, 0)


    if (projectsRef.current) {
      const projectDivs = gsap.utils.toArray<HTMLDivElement>(projectsRef.current?.children);

      projectDivs.forEach((project) => {
        gsap.from(project, {
          opacity: 0,
          yPercent: 100,
          ease: 'expo.out',
          duration: 2,
          stagger: 0.5,
          scrollTrigger: {
            trigger: project,
            start: isMobileOrTablet ? 'top 165%' : 'top bottom',
          }
        })
      })
    }

  }, [])

  return (
    <section id="projects" className="py-20 md:py-25 px-8 lg:px-2 xl:px-0 md:min-h-screen min-w-full flex justify-center flex-col md:flex-row">
      <div className="max-w-7xl">
        <h1 id="projects-h1" className="sticky md:static bg-retro-lightyellow/90 md:bg-transparent z-50 top-0 text-2xl md:text-4xl py-4 md:py-0 md:px-0 font-medium md:text-center">Projects</h1>

        {/* Projects Div */}
        <div ref={projectsRef} className="flex flex-col gap-16 mt-20 md:mt-25">
          
          {ProjectsInfo.map((project, idx) => (
            <Project 
              key={idx}
              index={idx + 1}
              {...project}
            />
          ))}
          
        </div>
      </div>
    </section>
  )
}