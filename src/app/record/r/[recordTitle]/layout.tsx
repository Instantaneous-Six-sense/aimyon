import { getRecordCached } from '@/cache';
import RecordDescription from '@/components/RecordDescription';
import TrackList from '@/components/TrackList';
import { absolutePathForRecord, getRecordNoByTitle } from '@/site/paths';
import { descriptionForRecord } from '@/site/record';
import { formatDateFromOrientalString } from '@/utility/date';
import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';

type RecordProps = {
  params: { recordTitle: string; }
}

export async function generateMetadata({
  params: { recordTitle },
} : RecordProps): Promise<Metadata> {
  const recordNo = getRecordNoByTitle(recordTitle);
  const record = await getRecordCached(recordNo);

  if (!record) { return {}; }

  const title = record.title;
  const description = descriptionForRecord(record);
  const images = ''; // absolutePathForPhotoImage(record);
  const url = absolutePathForRecord(recordNo);

  return {
    title,
    description,
    openGraph: {
      title,
      images: '',
      description,
      url,
    },
    twitter: {
      title,
      description,
      images,
      card: 'summary_large_image',
    },
  };
}

export default async function RecordDetailLayout({
  params: { recordTitle },
}: RecordProps) {
  const recordNo = getRecordNoByTitle(recordTitle);
  const record = await getRecordCached(recordNo);

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
        <div>
          <h3 className="font-bold font-glacial">{record.type}</h3>
          <h1 className='text-5xl font-bold py-3'>{record.title}</h1>
          <h4 className="font-bold font-glacial text-3xl">
            {formatDateFromOrientalString(record.release_at)}
          </h4>
          <RecordDescription record={record} useTrackList={false} />
        </div>
      </div>
      <TrackList tracks={record.track} />
    </section>
  );
}