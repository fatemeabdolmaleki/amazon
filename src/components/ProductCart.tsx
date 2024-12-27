import Image from "next/image";
import { Product } from "@/lib/type";
import ProductIcon from "./ProductIcon";
import PriceFormat from "./PriceFormat";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";

interface Props {
  product: Product;
}

function ProductCart({ product }: Props) {
  return (
    <div className="border border-gray-200 rounded-md bg-white overflow-hidden">
      <div className="relative group overflow-hidden h-72">
      <Link href={{ pathname: `product/${product.id}`,query:{id:product.id}}}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={600}
            height={600}
            className="w-full h-full object-contain bg-[#f8f8f8] group-hover:scale-110 duration-200"
            loading="lazy"
            unoptimized={true}
          />
          <ProductIcon product={product} />
        </Link>
      </div>
      <div className="py-2 px-4 flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-1 h-36">
          <h2 className="line-clamp-1 font-semibold">{product.title}</h2>
          <p className="text-sm text-amazonBlue/90 line-clamp-3">{product.description}</p>
          <PriceFormat amount={product.price} />
          <p className="text-sm">Category: <span className="font-semibold">{product.category}</span></p>
        </div>
        <AddToCartButton product={product} />
      </div>

    </div>
  );
}

export default ProductCart;
