import { twMerge } from "tailwind-merge";

interface Props {
  amount: number;
  className?: string; // کلاس می‌تواند اختیاری باشد
}

function PriceFormat({ amount, className }: Props) {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  
  return (
    <span className={twMerge("font-semibold", className)}>
      {formattedAmount}
    </span>
  );
}

export default PriceFormat;
