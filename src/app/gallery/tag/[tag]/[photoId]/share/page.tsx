import { getPhotoCached } from '@/cache';
import PhotoShareModal from '@/photo/PhotoShareModal';
import { PATH_GALLERY } from '@/site/paths';
import { redirect } from 'next/navigation';

export default async function Share({
  params: { photoId, tag },
}: {
  params: { photoId: string, tag: string }
}) {
  const photo = await getPhotoCached(photoId);

  if (!photo) { return redirect(PATH_GALLERY); }

  return <PhotoShareModal {...{ photo, tag }} />;
}
