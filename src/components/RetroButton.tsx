import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode
  className?: string
  variant?: 'default' | 'green' | 'darkblue'
  onClick?: () => void
}

export default function RetroButton({
  children,
  className,
  variant = 'default',
  onClick,
}: Props) {
  const btnTwClassName = 
    variant === 'green'
      ? "bg-retro-green text-retro-paleyellow border-black"
      : variant === 'darkblue'
      ? "bg-retro-darkblue text-retro-paleyellow border-black"
      : "bg-retro-lightyellow text-retro-brown border-retro-brown"

  const wrapperTwClassName = 
    variant !== 'default'
      ? "[background:var(--black)]"
      : "[background:var(--retro-brown)]"

  return (
    <div onClick={onClick} className={cn("rounded-md w-fit relative", wrapperTwClassName, className)}>
      <Button
        variant="retro"
        size="xl"
        className={cn("border-2 filter brightness-100 hover:brightness-95 transform -translate-x-1 -translate-y-1 active:translate-x-0 active:translate-y-0", btnTwClassName)}
      >
        {children}
      </Button>
    </div>
    
  )
}