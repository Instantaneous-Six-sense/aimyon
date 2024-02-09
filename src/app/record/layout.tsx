import Animate from '@/components/Animate';

type RecordLayoutTypes = {
  children: React.ReactNode
}



export default function RecordLayout({ children }: RecordLayoutTypes) {
  return (
    <Animate>
      {children}
    </Animate>
  );
}