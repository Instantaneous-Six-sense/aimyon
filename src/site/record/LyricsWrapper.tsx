import React from 'react';

export default function LyricsWrapper(
  { children }: { children: React.ReactNode})
{
  return (
    <p className={'leading-10 tracking-widest'}>
      {children}
    </p>
  );
}