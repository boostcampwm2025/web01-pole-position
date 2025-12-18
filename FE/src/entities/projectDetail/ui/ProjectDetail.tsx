import Image from 'next/image';
import paint from '/assets/paint.png';
export default function ProjectDetail() {
  return (
    <div>
      <Image src={paint} alt="Project Thumbnail" width={300} height={300} />
    </div>
  );
}
