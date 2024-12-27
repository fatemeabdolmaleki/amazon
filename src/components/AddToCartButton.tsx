"use client";
import { Store } from "@/lib/Store";
import { Product } from "@/lib/type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
  product: Product;
  className?: string; // Optional to avoid strict requirements
}

function AddToCartButton({ product, className }: Props) {
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  const { addToCart, cartProduct, decreaseQuantity } = Store();

  useEffect(() => {
    const availableItem = cartProduct?.find((item) => item?.id === product?.id);
    setExistingProduct(availableItem || null); // Set the existing product state
  }, [product, cartProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.title.substring(0, 12)}... added successfully`);
    }
  };

  const handleDecreaseQuantity = () => {
    if (existingProduct && existingProduct.quantity === 1) {
      toast.error("Cannot decrease below 1. Remove from cart instead.");
    } else {
      decreaseQuantity(product.id);
    }
  };

  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center justify-center gap-2 py-2 mb-2">
          <button
            disabled={existingProduct?.quantity === 1}
            onClick={handleDecreaseQuantity}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-sky-600 rounded-full text-sm 
            hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center ">
            {existingProduct?.quantity || 0}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-sky-600 rounded-full text-sm 
            hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            "text-sm tracking-wide font-medium mb-2 border-[1px] border-amazonBlue/50 py-2 rounded-full bg-amazonLight/10 hover:bg-amazonYellowDark duration-200 ",
            className
          )}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}

export default AddToCartButton;
