import { IMAGE_LARGE_WIDTH, IMAGE_FULL_WIDTH } from '@/site';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string
  href: string
  src: string
  alt: string
  aspectRatio: number
  blurData: string
  priority?: boolean
  isFull?: boolean
}

export default function ImageLarge({
  className,
  href,
  src,
  alt,
  aspectRatio,
  blurData,
  priority,
  isFull,
}: Props) {
  return (
    <Link
      href={href}
      className="active:brightness-75"
    >
      <Image {...{
        className,
        src,
        alt,
        priority,
        blurDataURL: blurData,
        placeholder: 'blur',
        width: isFull ? IMAGE_FULL_WIDTH : IMAGE_LARGE_WIDTH,
        height: Math.round(
          isFull ? IMAGE_FULL_WIDTH : IMAGE_LARGE_WIDTH / aspectRatio
        ),
      }} />
    </Link>
  );
};
