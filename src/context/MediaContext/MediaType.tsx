import { type ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive'
import { MediaContext } from './MediaContext';

interface Props {
  children: ReactNode;
}

export default function MediaType({
  children
}: Props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <MediaContext.Provider value={{
      isMobileOrTablet,
    }}>
      {children}
    </MediaContext.Provider>
  )
}