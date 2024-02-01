import { getRecordsCached } from '@/cache';
import SectionTitle from '@/components/SectionTitle';
import RecrodGrid from '@/site/record/Grid';

export default async function RecordPage() {
  const [
    records,
  ] = await Promise.all([
    getRecordsCached(),
  ]);

  return (
    <section id="record-page" className="flex flex-col items-center">
      <SectionTitle title={'RECORD'} />
      <RecrodGrid records={records} />
    </section>
  );
}