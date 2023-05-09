import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex h-[534px] flex-col items-center justify-center bg-transparent px-7 text-center text-white">
        <div className="mb-4 text-[14px] uppercase leading-[19px] tracking-[10px] opacity-50">
          New Product
        </div>
        <h1 className="mb-6 text-4xl font-bold uppercase tracking-[1.28px]">
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
      <section className="flex flex-col gap-4 my-10">
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

// const ShopCategory = ({ children, ...props }: { children: React.ReactNode }) => (
// 		<div>

// 		</div>
// 	);
