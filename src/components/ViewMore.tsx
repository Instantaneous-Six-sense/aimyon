import clsx from 'clsx';
import { AiOutlineSwapLeft } from 'react-icons/ai';

export default function ViewMore() {
  return (
    <a id="media-view-more" className={clsx(
      'flex justify-end items-end',
      'mt-10 max-w-xl lg:max-w-full',
      'text-dim text-lg font-yakuhan',
      'transition-colors cursor-pointer'
    )}>
      <AiOutlineSwapLeft size={20} className={`
        relative top-1
      `} />
      <span>VIEW MORE</span>
    </a>
  );
}