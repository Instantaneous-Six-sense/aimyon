import clsx from 'clsx';

export default function SectionTitle({
  title,
  lan = 'en',
  noPadding,
}: { title: string, lan?: 'en' | 'ja', noPadding?: boolean }) {
  return (
    <div className={clsx(
      'flex items-center justify-between',
      lan === 'en' ? 'font-glacial' : 'font-yakuhan',
      noPadding ? 'py-0' : 'py-8',
    )}>
      <h1 className="tracking-wider text-6xl sm:text-title">{title}</h1>
    </div>
  );
}