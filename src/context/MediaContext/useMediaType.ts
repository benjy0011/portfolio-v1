import { useContext } from "react"
import { MediaContext } from "./MediaContext"

export const useMediaType = () => {
  const ctx = useContext(MediaContext);
  if (!ctx) throw new Error("Must use within <MediaType>");
  return ctx;
}