"use client";

import { Store } from "@/lib/Store";
// import { Product } from "@/lib/type";
import Image from "next/image";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

function CartPage() {
  const { cartProduct, addToCart, decreaseQuantity, removeFromCart, resetCart } =
    Store();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const calculateTotal = cartProduct.reduce((acc, item) => {
      return acc + (item.price || 0) * (item.quantity || 1);
    }, 0);
    setTotalPrice(calculateTotal);
  }, [cartProduct]);

  const handleClearCart = () => {
    resetCart();
  };

  if (cartProduct.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
        <Link href="/">
          <button className="px-6 py-2 bg-amazonYellow hover:bg-amazonYellowDark text-white rounded-md">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      <div className="flex flex-col gap-6">
        {cartProduct.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 border-b pb-4"
          >
            <Image
              src={product.thumbnail || ""}
              alt={product.title}
              width={80}
              height={80}
              className="rounded-md"
              loading="lazy"
              unoptimized={true}
            />
            <div className="flex-grow">
              <h2 className="text-lg font-medium">{product.title}</h2>
              <p className="text-sm text-gray-500">
                Price: ${product.price?.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                Total: ${(product.price * (product.quantity || 1)).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <FaMinus />
              </button>
              <span className="w-8 text-center font-medium">
                {product.quantity || 1}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <FaPlus />
              </button>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleClearCart}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Clear Cart
        </button>
        <div className="text-xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
        <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
