import { getContentsCached, getPhotosCached } from '@/cache';
import { generateOgImageMetaForPhotos } from '@/photo';
import { PaginationParams } from '@/site/pagination';
import { Metadata } from 'next';
import { MAX_PHOTOS_TO_SHOW_OG } from '@/photo/image-response';
import Animate from '@/components/Animate';
import ImageLarge from '@/components/ImageLarge';
import Information from '@/components/Information';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  // Make homepage queries resilient to error on first time setup
  const photos = await getPhotosCached({ limit: MAX_PHOTOS_TO_SHOW_OG })
    .catch(() => []);
  return generateOgImageMetaForPhotos(photos);
}

const alt = 'banner';
const blurData = 'data:image/jpeg;base64,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';

export default async function HomePage({ searchParams }: PaginationParams) {
  const [
    contents,
  ] = await Promise.all([
    getContentsCached(),
  ]);

  return (
    <div className="space-y-4 flex flex-col justify-center">
      <Animate
        className="space-y-1"
        duration={0.7}
        staggerDelay={0.15}
        distanceOffset={0}
        staggerOnFirstLoadOnly
      >
        <ImageLarge
          href="/"
          src={'/banner2.jpg'}
          alt={alt}
          aspectRatio={1.4}
          blurData={blurData}
          isFull
        />
      </Animate>
      <Animate
        duration={0.7}
        staggerDelay={0.15}
        distanceOffset={0}
      >
        <Information contents={contents} />
      </Animate>
    </div>
  );
}
