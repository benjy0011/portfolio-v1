import Stack from "@/components/Stack";
import { useMediaType } from "@/context/MediaContext/useMediaType";
import { ChevronDown } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all";
import { images } from "@/constants";

export default function About () {
  const { isMobileOrTablet } = useMediaType();

  useGSAP(() => {
    const aboutSplitDesktop = new SplitText('#about-me-desktop', { type: 'chars, words' });

    const aboutSplitMobile = new SplitText('#about-me-mobile', { type: 'chars, words' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: isMobileOrTablet ? '10% bottom' : '40% bottom'
      }
    })

    tl.from(aboutSplitDesktop.chars, {
      yPercent: 100,
      duration: 1,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.06
    }, 0)

    tl.from(aboutSplitMobile.chars, {
      yPercent: 100,
      duration: 1,
      opacity: 0,
      ease: 'expo.out',
      stagger: 0.06
    }, 0)


    tl.from(['.about-description', '.about-img'], {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power1.out',
      stagger: 0.2
    }, "-=0.6")

    gsap.to("#hint", {
      y: -10, duration: 1, repeat: -1, yoyoEase: true
    })
  }, [])


  return (
    <section id="about" className="py-10 md:py-0 md:min-h-screen min-w-full flex justify-center flex-col md:flex-row">
      {/* mobile */}
      <h1 id="about-me-mobile" className="md:hidden text-2xl sticky top-0 z-50 w-full py-4 px-8 bg-retro-lightyellow/90 font-medium">About me</h1>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-18 md:gap-6 px-4 justify-center">
        <div className="md:flex-1 flex flex-col items-center md:items-start justify-center gap-4 md:gap-10 md:h-full px-4">
          {/* desktop */}
          <h1 id="about-me-desktop" className="text-2xl md:text-4xl md:static md:z-0 md:bg-transparent md:w-auto md:px-0 md:py-0 md:block hidden font-medium">About me</h1>

          <p className="about-description md:text-xl font-turret-road font-bold md:mt-0 mt-6">
            Hi, I’m Benjy, a First-Class Honours Mechatronics Engineering graduate with a passion for coding. During university, I won awards in hackathons and challenges despite not coming from an IT background. Now working in software engineering, I continue to sharpen my skills through self-learning and side projects. I’m detail-oriented and committed to creating pixel-perfect websites with great user experiences.
          </p>
        </div>
        <div className="about-img relative md:flex-1 min-w-0 min-h-0 flex items-center justify-center">
          <div id="hint" className="absolute -top-4 right-0 left-8 justify-center items-center text-muted-foreground flex gap-1">Drag and slide <span><ChevronDown className="mb-0.5" size={20} /> </span></div>
          <div>
            <Stack
              cardsData={images}
              // randomRotation={true}
              cardDimensions={isMobileOrTablet ? { width: 208, height: 258 } : { width: 270.2, height: 330.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}