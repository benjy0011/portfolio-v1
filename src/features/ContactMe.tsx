import { contactMeList } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function ContactMe() {
  useGSAP(() => {
    const connectH1Split = new SplitText('#connectH1', { type: "chars" });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#contactMe',
        start: "top 45%"
      }
    })

    tl1.from(connectH1Split.chars, {
      scale: 0,
      duration: 1.5,
      ease: 'bounce.out',
      stagger: 0.06
    })

    tl1.from(".contact-me-div a", {
      opacity: 0,
      yPercent: -80,
      ease: 'bounce.out',
      duration: 1.5,
      stagger: 0.2,
    }, "-=0.5")
  })
  return (
    <section id="contactMe" className="flex flex-col gap-7 md:gap-10 flex-1 h-dvh justify-center items-center">
      <h1 id="connectH1" className="text-4xl md:text-6xl lg:text-7xl">Let's Connect</h1>
      <div className="contact-me-div flex gap-4 md:gap-8">
        {contactMeList.map(( { icon: Icon, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer"><Icon className="transition-all duration-300 hover:scale-110 hover:-translate-y-3 size-8 md:size-13" /></a>
        ))}
      </div>
    </section>
  )
}