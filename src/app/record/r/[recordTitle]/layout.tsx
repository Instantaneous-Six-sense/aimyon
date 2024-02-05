import { getRecordCached } from '@/cache';
import TrackList from '@/components/TrackList';
import { absolutePathForRecord, getRecordNoByTitle } from '@/site/paths';
import { descriptionForRecord } from '@/site/record';
import { Metadata } from 'next';

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
  children,
}: RecordProps & { children: React.ReactNode }) {
  const recordNo = getRecordNoByTitle(recordTitle);
  const record = await getRecordCached(recordNo);

  return (<div>
    {record.title}
    <TrackList tracks={record.track} />
    {children}
  </div>);
}