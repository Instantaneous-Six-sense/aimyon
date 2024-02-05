import { Records } from '@/contents';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { pathForRecord } from '../paths';

export default function Card({
  record,
}: { record: Records}) {
  return (
    <Link href={pathForRecord(record.title)}>
      <div className={clsx(
        'w-full h-full overflow-hidden max-w-[300px]',
        'rounded-lg shadow-lg hover:shadow-2xl',
        'transition-all duration-300 ease-in-out',
        'cursor-pointer relative hover:scale-105',
      )}>
        <Image
          src={record.image}
          width={300}
          height={300}
          alt={record.title}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </Link>
  );
}