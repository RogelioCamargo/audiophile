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
					<source srcSet="/home/tablet/image-header.jpg" media="(min-width: 768px)" />
					<img src="/home/mobile/image-header.jpg" alt="xx99 mark ii headphones" />
				</picture>
      </section>
			<section>
				<ShopCategory />
			</section>
    </main>
  );
}

const ShopCategory = () => (
		<div className="uppercase">
			<h2 className="">Headphones</h2>
			<div>
				<div className="">Shop</div>
				<Image src="/shared/desktop/icon-arrow-right.svg" alt="" width={10} height={10} />
			</div>
		</div>
	);

	// const ShopCategory = ({ children, ...props }: { children: React.ReactNode }) => (
// 		<div>

// 		</div>
// 	);