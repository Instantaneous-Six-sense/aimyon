export type NewReleaseDescriptionProps = {
    description?: string;
    }

export default function NewReleaseDescription(
  { description }: NewReleaseDescriptionProps
) {
  return  description && (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: description }}
      className="text-sm"
    />
  );
}