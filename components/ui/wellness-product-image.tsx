import Image from "next/image";

export function WellnessProductImage({ image }: {
  image: { src: string; alt: string };
}) {
  return <Image src={image.src} alt={image.alt} fill quality={90} sizes="(min-width: 1304px) 556px, (min-width: 1024px) calc((100vw - 192px) / 2), (min-width: 640px) calc(100vw - 114px), calc(100vw - 82px)" className="option-image wellness-image" />;
}
