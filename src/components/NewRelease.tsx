import { Records } from '@/contents';
import { formatDateFromOrientalString } from '@/utility/date';
import clsx from 'clsx';
import Image from 'next/image';
import ViewMore from './ViewMore';

import dynamic from 'next/dynamic';
import TrackList from './TrackList';
import RecordDescription from './RecordDescription';

const NewReleaseDescription = dynamic(() =>
  import('./RecordDescription'), { ssr: false });

export type NewReleaseProps = {
  record: Records
}


export default function NewRelease({ record }: NewReleaseProps) {
  return (
    <section id="new-release" className={'font-glacial max-w-7xl'}>
      <div className="flex flex-col gap-4">
        <h1 className="text-title">NEW RELEASE</h1>
        <div className={clsx(
          'pl-8 justify-start gap-4 font-yakuhan',
          'grid grid-cols-1 lg:grid-cols-2'
        )}>
          <div>
            <Image
              src={record.image}
              alt="あのね"
              width={500}
              height={500}
            />
          </div>
          <div className="text-xl">
            <p className="font-glacial">{record.type}</p>
            <h3 className={clsx(
              'text-[32px] font-[800]',
              'leading-[3rem] tracking-wider mb-2')}
            >{record.title}</h3>
            <p className="text-2xl font-glacial">
              {formatDateFromOrientalString(record.release_at)} RELEASE
            </p>
            <RecordDescription record={record} />
            <ViewMore href={'/record'} />
          </div>
        </div>
      </div>
    </section>
  );
}