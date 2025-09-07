import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode
}

export default function FlipZoom({
  children
}: Props) {
  const el = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const elem = el.current;
    if (!elem) return;

    const tween = gsap.to(elem, {
      duration: 0.8,
      scale: 1.2,
      rotationY: 360,
      ease: 'power2.inOut',
      paused: true // start paused
    });

    const hoverIn = () => tween.play();
    const hoverOut = () => tween.reverse();

    elem.addEventListener("mouseenter", hoverIn);
    elem.addEventListener("mouseleave", hoverOut);

    return () => {
      elem.removeEventListener("mouseenter", hoverIn);
      elem.removeEventListener("mouseleave", hoverOut);
      tween.kill();
    };
  });

  return (
    <div ref={el} className="rounded-full p-2 hover:bg-retro-brown/5">{children}</div>
  )
}