import { Records } from '@/contents';
import clsx from 'clsx';
import TrackList from './TrackList';

export type RecordDescriptionProps = {
  record?: Records;
  useTrackList?: boolean;
}

export default function RecordDescription(
  { record, useTrackList = true }: RecordDescriptionProps
) {

  return record && (
    <div className="flex flex-col gap-4">
      <RecordDetail
        price={record.price}
        catalogueNo={record.catalogue_no}
        tracks={record.track}
        useTrackList={useTrackList}
      />
      {
        record.description && (
          <div
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: record.description }}
            className="text-sm"
          />
        )
      }
    </div>
  );
}


type RecordDetailProps = {
  price: Records['price'];
  catalogueNo: Records['catalogue_no']
  tracks: Records['track'];
  useTrackList: boolean;
}


function RecordDetail(
  { price, catalogueNo, tracks, useTrackList }: RecordDetailProps)
{
  const priceFormat =
    ['ja-JP', { style: 'currency', currency: 'JPY' }] as const;

  return (
    <>
      <div className={clsx(
        'flex items-center gap-2',
        'text-neutral-400 text-base pt-4')}
      >
        <p>{
          new Intl.NumberFormat(...priceFormat).format(
            price,
          )
        }(税込)</p>
        <p>/</p>
        <p>{catalogueNo}</p>
      </div>
      {useTrackList && <TrackList tracks={tracks} />}
    </>
  );
}