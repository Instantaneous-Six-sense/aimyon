export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between font-glacial py-8">
      <h1 className="tracking-wider text-title">{title}</h1>
    </div>
  );
}