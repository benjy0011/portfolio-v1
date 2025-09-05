import { createContext } from "react";

export type MediaContextType = {
  isMobileOrTablet: boolean;
}

export const MediaContext = createContext<MediaContextType | undefined>(undefined);