import { getRecordCached } from '@/cache';
import Animate from '@/components/Animate';
import TrackList from '@/components/TrackList';
import { findRecordByTrackName } from '@/contents';
import { SITE_DOMAIN } from '@/site/config';
import { PREFIX_TRACK } from '@/site/paths';
import { formatDateFromOrientalString } from '@/utility/date';
import clsx from 'clsx';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

type TrackProps = {
  params: { trackTitle: string; }
}

const noLyrics = () => <p className="text-xl">歌詞が見つかりませんでした。</p>;
const loading = () => <p className="text-xl">読み込み中...</p>;

export async function generateMetadata(
  { params: { trackTitle }}: TrackProps): Promise<Metadata>
{
  const record = await getRecordCached(findRecordByTrackName(trackTitle));

  const title = decodeURI(trackTitle);
  // eslint-disable-next-line max-len
  const description = `${record.vocalist} - ${title} (${formatDateFromOrientalString(record.release_at)})`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: record.image,
          width: 300,
          height: 300,
          alt: title,
        },
      ],
      url: `${SITE_DOMAIN}${PREFIX_TRACK}/${trackTitle}`,
    },
    twitter: {
      images: [
        {
          url: record.image,
          width: 300,
          height: 300,
          alt: title,
        },
      ],
      description: description,
      card: 'summary_large_image',
    },
  };
}

export default async function RecordTrackLayout(
  { params: { trackTitle }}: TrackProps)
{
  const Track = dynamic(() =>
    import('@/contents/tracks/' + decodeURI(trackTitle)).catch(() => noLyrics),
  { loading });

  const record = await getRecordCached(findRecordByTrackName(trackTitle));

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
        <aside className="hidden sm:block col-span-4 self-start sticky top-16">
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