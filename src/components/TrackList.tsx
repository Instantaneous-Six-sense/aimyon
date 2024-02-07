import { Records } from '@/contents';
import { IGNORE_SIDE } from '@/site/record';
import Link from 'next/link';

export default function TrackList({ tracks }: { tracks: Records['track']}) {
  if (!Object.keys(tracks!).length) {
    return null;
  }

  return (
    <div id="tracks" className="py-8 flex flex-col gap-1.5 w-full">
      {Object.entries(tracks!).map(([side, tracks], sideIndex) => (
        <div key={sideIndex}>
          {
            side && side !== IGNORE_SIDE &&
            <p className="font-glacial text-2xl">{side}</p>
          }
          {tracks.map((track, trackIndex) => (
            <div key={trackIndex}>
              <Link href={'/record/s/' + track.title}>
                <p className="flex items-center gap-2">
                  <span>{trackIndex + 1}.</span>
                  {track.title}
                </p>
              </Link>
            </div>
          ))}
        </div>))}
    </div>
  );
}