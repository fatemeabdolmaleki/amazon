"use client";

import Link from "next/link";
import React from "react";
import { Store } from "@/lib/Store";

function FavoriteButton() {
  const { favoriteProduct } = Store(); // دسترسی به محصولات مورد علاقه از استور

  return (
    <Link
      href={"/favorite"}
      className="headerItem text-xs text-gray-100 hidden lg:inline-flex flex-col justify-center items-start relative"
    >
      <p>Marked</p>
      <p className="text-white font-bold">& Favorite</p>
      <span
        className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 headerItem px-0 text-xs text-amazonOrangeDark
        font-medium rounded-sm"
      >
        {favoriteProduct.length} {/* تعداد محصولات مورد علاقه */}
      </span>
    </Link>
  );
}

export default FavoriteButton;
