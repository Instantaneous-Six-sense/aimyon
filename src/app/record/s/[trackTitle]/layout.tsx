import { getRecordCached } from '@/cache';
import TrackList from '@/components/TrackList';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';

type TrackProps = {
  params: { trackTitle: string; }
}

export default async function RecordTrackLayout(
  { params: { trackTitle }}: TrackProps)
{
  const Track = await dynamic(() =>
    import('@/contents/tracks/' + decodeURI(trackTitle)));
  const record = await getRecordCached(5);

  return (
    <section className={clsx(
      'flex flex-col max-w-full sm:max-w-[80%] items-center mx-0 sm:mx-auto',
      'font-yakuhan'
    )}>
      <div className="flex flex-col sm:flex-row gap-10 w-full pb-4 sm:pb-10">
        <Image
          src={record.image}
          alt={record.title}
          width={300}
          height={300}
          className="rounded-xl w-full sm:max-w-[300px] h-full sm:max-h-[300px]"
        />
        <div className="flex flex-col gap-2">
          <p className="text-neutral-600 dark:text-neutral-400">楽曲</p>
          <h1 className={clsx(
            'text-6xl font-bold'
          )}>
            {decodeURI(trackTitle)}
          </h1>
          <h3 className={clsx('text-xl')}>
            {record.vocalist}
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-12 w-full pt-4 sm:pt-10">
        <aside className="hidden sm:block col-span-4">
          <p className="text-2xl font-bold">収録アルバム</p>
          <TrackList tracks={record.track} />
        </aside>
        <div className="col-span-12 sm:col-span-8">
          <Track />
        </div>
      </div>
    </section>
  );
}