import Button, { OutlineButton, SecondaryButton } from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex h-[534px] flex-col items-center justify-center bg-transparent px-7 text-center text-white">
        <div className="mb-4 text-[14px] uppercase leading-[19px] tracking-[10px] opacity-50">
          New Product
        </div>
        <h1 className="mb-6 text-4xl font-bold uppercase tracking-[1px]">
          XX99 Mark II Headphones
        </h1>
        <p className="mb-7 text-[15px] leading-[25px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button>See Product</Button>
        <picture className="absolute top-0 -z-10">
          <source
            srcSet="/home/tablet/image-header.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="/home/mobile/image-header.jpg"
            alt="xx99 mark ii headphones"
          />
        </picture>
      </section>
      <section className="my-10 flex flex-col gap-4">
        <ShopCategory
          imageUrl="/shared/desktop/image-category-thumbnail-headphones.png"
          categoryName="Headphones"
        />
        <ShopCategory
          imageUrl="/shared/desktop/image-category-thumbnail-speakers.png"
          categoryName="Speakers"
        />
        <ShopCategory
          imageUrl="/shared/desktop/image-category-thumbnail-earphones.png"
          categoryName="Earphones"
        />
      </section>
      <section className="relative mx-auto mb-6 h-[600px] w-[327px] overflow-hidden rounded-lg bg-primary px-6 text-center text-white">
        <Image
          className="absolute -left-[147px] -top-[135px] max-w-max"
          src="/home/desktop/pattern-circles.svg"
          alt=""
          height={620}
          width={620}
        />
        <picture>
          <source
            srcSet="/home/tablet/image-speaker-zx9.png"
            media="(min-width: 768px)"
          />
          <img
            src="/home/mobile/image-speaker-zx9.png"
            alt="zx9 speaker"
            className="mx-auto mb-8 mt-[55px] h-[200px] w-[170px]"
          />
        </picture>
        <h2 className="mb-6 text-4xl font-bold uppercase tracking-[1px]">
          ZX9 <br />
          SPEAKER
        </h2>
        <p className="mb-6 text-[15px] leading-[25px] opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SecondaryButton>See Product</SecondaryButton>
      </section>
      <section className="relative mx-auto mb-6 flex h-[320px] w-[327px] flex-col items-start justify-center overflow-hidden rounded-lg p-6">
        <picture className="absolute left-0 top-0 -z-10">
          <source
            srcSet="/home/tablet/image-speaker-zx7.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="/home/mobile/image-speaker-zx7.jpg"
            alt="zx7 speaker"
            className="mx-auto"
          />
        </picture>
        <h2 className="z-10 mb-8 text-[28px] font-bold uppercase leading-[38px] tracking-[2px]">
          ZX7 SPEAKER
        </h2>
        <OutlineButton>See Product</OutlineButton>
      </section>
      <section className="mb-[120px]">
        <picture>
          <source
            srcSet="/home/tablet/image-earphones-yx1.jpg"
            media="(min-width: 768px)"
          />
          <img
            src="/home/mobile/image-earphones-yx1.jpg"
            alt="zx7 speaker"
            className="mx-auto mb-6 h-[200px] w-[327px] rounded-lg"
          />
        </picture>
        <div className="mx-auto flex h-[200px] w-[327px] flex-col items-start justify-center rounded-lg bg-gray-light p-6">
          <h2 className="mb-8 text-[28px] font-bold uppercase leading-[28px] tracking-[2px]">
            YX1 EARPHONES
          </h2>
          <OutlineButton>See Product</OutlineButton>
        </div>
      </section>
    </main>
  );
}

const ShopCategory = ({
  imageUrl,
  categoryName,
}: {
  imageUrl: string;
  categoryName: string;
}) => (
  <div className="relative mx-auto h-56 w-[327px] font-bold uppercase">
    <Image
      src={imageUrl}
      alt="headphone category"
      height={160}
      width={160}
      className="mx-auto"
    />
    <h2 className="mb-4 text-center text-[15px] leading-[20px] tracking-[1px]">
      {categoryName}
    </h2>
    <div className="flex items-center justify-center">
      <div className="mr-3 text-[13px] leading-[18px] tracking-[1px] opacity-50">
        Shop
      </div>
      <Image
        src="/shared/desktop/icon-arrow-right.svg"
        alt=""
        width={10}
        height={10}
      />
    </div>
    <div className="absolute bottom-0 -z-10 h-[165px] w-[327px] rounded-lg bg-gray-light"></div>
  </div>
);
