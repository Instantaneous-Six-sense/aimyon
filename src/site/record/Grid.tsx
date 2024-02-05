import AnimateItems from '@/components/AnimateItems';
import { Records } from '@/contents';
import clsx from 'clsx';
import Card from './Card';

export default function RecrodGrid({ records }: { records: Records[] }) {
  return (
    <div className={'font-glacial max-w-7xl'}>
      <AnimateItems
        className={clsx(
          'grid xs:grid-cols-3 grid-cols-1',
          'gap-2 xs:gap-4 sm:gap-12',
          'space-y-1 transition-all'
        )}
        duration={0.7}
        staggerDelay={0.15}
        distanceOffset={0}
        staggerOnFirstLoadOnly
        items={records.map((record, idx) => (
          <Card key={idx} record={record} />
        ))}
      />
    </div>
  );
}