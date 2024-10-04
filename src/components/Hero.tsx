import { ImageCarousel } from "./Carrousel";

export const Hero = () => {
  const images = [
    '/img/banner1.png',
    '/img/banner2.png',
    '/img/banner3.jpg',
  ];
  return (
    <>
      <ImageCarousel images={images} />
    </>
  );
}

