import { cn } from "@/lib/utils"

type colorType = "green" | "blue" | "red" | "yellow" | "purple"

export interface SkillTagProps {
  color?: colorType
  text: string
}

function getColorClass (color: colorType):string {
  const base = color === "blue"
    ? "shadow-[0px_4px_0px_0px_var(--retro-darkblue)] border-2 border-retro-darkblue text-retro-darkblue bg-retro-lightblue selection:bg-retro-darkblue selection:text-white"
    : color === "red"
    ? "shadow-[0px_4px_0px_0px_var(--retro-red)] border-2 border-retro-red text-retro-red bg-retro-lightpink selection:bg-retro-red selection:text-white"
    : color === "yellow"
    ? "shadow-[0px_4px_0px_0px_var(--retro-orange)] border-2 border-retro-orange text-retro-orange bg-retro-lightyellow selection:bg-retro-orange selection:text-white"
    : color === "purple"
    ? "shadow-[0px_4px_0px_0px_var(--retro-violet)] border-2 border-retro-violet text-retro-violet bg-retro-lightpurple selection:bg-retro-violet selection:text-white"
    : "shadow-[0px_4px_0px_0px_var(--retro-darkgreen)] border-2 border-retro-darkgreen text-retro-darkgreen bg-retro-lightgreen selection:bg-retro-darkgreen selection:text-white"
  
  return base;
}

export default function RetroTag({
  color = "green",
  text
}: SkillTagProps) {
  const colorClass = getColorClass(color);
  
  return (
    <div className={cn("rounded-md w-fit h-fit px-1.5 py-0.5 font-semibold", colorClass)}>
      {text}
    </div>
  )
}