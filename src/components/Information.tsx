import { Contents } from '@/contents';
import { formatDateFromOrientalString } from '@/utility/date';
import { GoHorizontalRule } from 'react-icons/go';
import { AiOutlineSwapLeft } from 'react-icons/ai';
import clsx from 'clsx';

type InformationProps = {
  contents: Contents[]
}

export default function Information({ contents }: InformationProps) {
  const news = contents.filter(({ type }) => type === 'news');
  const media = contents.filter(({ type }) => type === 'media');
  const live = contents.filter(({ type }) => type === 'live');
  const section = [
    { title: 'NEWS', contents: news, link: '/news'},
    { title: 'MEDIA', contents: media, link: '/media'},
    { title: 'LIVE', contents: live, link: '/live'}];

  return (
    <section id="information" className={clsx(
      'grid lg:grid-cols-3 grid-cols-1 gap-4',
      'font-glacial',
      'max-w-7xl'
    )}>
      <InformationSection section={section} />
    </section>
  );
}

type InformationSectionProps = {
  section: { title: string; contents: Contents[]; link: string }[]
}

function InformationSection({ section }: InformationSectionProps) {
  return section.map((section, idx) => (
    <div key={idx} className="flex flex-col gap-4">
      <h1 className="text-title">{section.title}</h1>
      <div className="pl-8 flex flex-col gap-8 font-yakuhan">
        {section.contents.map((content, idx) => (
          <InformationItem key={idx} content={content} />
        ))}
      </div>
      <a id="media-view-more" className={clsx(
        'flex justify-end items-end',
        'mt-10 max-w-xl lg:max-w-full',
        'text-dim',
        'transition-colors cursor-pointer'
      )}>
        <AiOutlineSwapLeft size={20} />
        <span>VIEW MORE</span>
      </a>
    </div>
  ));
}

type InformationItemProps = {
  key: React.Key, content: Contents
}
function InformationItem({ key, content }: InformationItemProps) {
  return (
    <div key={key} className="flex flex-col gap-2">
      <h1 className="flex items-center gap-1 font-glacial">
        {content.sub_type && (
          <>
            <span>{content.sub_type}</span>
            <div className="flex">
              <GoHorizontalRule className="relative left-[0.15rem]" />
              <GoHorizontalRule className="relative right-[0.15rem]" />
              <GoHorizontalRule className="relative right-[0.3rem]" />
            </div>
          </>
        )}
        <span>
          {formatDateFromOrientalString(content.published_at)}
        </span>
      </h1>
      <h1 className={clsx(
        'hover:text-rose-600',
        'transition-colors cursor-pointer'
      )}>{content.title}</h1>
    </div>
  );
}