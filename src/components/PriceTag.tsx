import { twMerge } from "tailwind-merge";
import PriceFormat from "./PriceFormat";

interface Props {
  regularPrice: number;
  discountedPrice: number;
  className?: string;  // Make className optional by adding a '?' here
}

function PriceTag({ regularPrice, discountedPrice, className = '' }: Props) {
return (
  <div className={twMerge("flex items-center gap-2", className)}>
      <PriceFormat className="line-through text-gray-500 font-medium" amount={regularPrice} />
      <PriceFormat className=" text-sky-600 font-bold" amount={discountedPrice} />
  </div>
)
}

export default PriceTag;
