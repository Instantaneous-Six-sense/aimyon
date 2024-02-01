import AnimateItems from '@/components/AnimateItems';
import { Records } from '@/contents';
import clsx from 'clsx';
import Image from 'next/image';

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
          <div key={idx} className={clsx(
            'relative w-full h-full overflow-hidden max-w-[300px]',
            'rounded-lg shadow-lg hover:shadow-2xl',
            'transition-all duration-300 ease-in-out',
            'cursor-pointer'
          )}>
            <Image
              src={record.image}
              width={300}
              height={300}
              objectFit='cover'
              alt={record.title}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        ))}
      />
    </div>
  );
}