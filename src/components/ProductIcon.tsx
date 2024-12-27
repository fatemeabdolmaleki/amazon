"use client"
import { Product } from '@/lib/type';
import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Store } from '@/lib/Store';
import toast from 'react-hot-toast';

function ProductIcon({ product }: { product: Product }) {
  const { favoriteProduct, addToFavorite, removeFromFavorite } = Store();

  const isFavorite = favoriteProduct.some((fav) => fav.id === product.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(product.id);
      toast.error(`${product.title.substring(0, 12)}... removed from favorites`);
    } else {
      addToFavorite(product);
      toast.success(`${product.title.substring(0, 12)}... added to favorites`);
    }
  };

  return (
    <div className="absolute top-2 right-2 flex items-center gap-2">
      {product.discountPercentage > 0 && (
        <p
          className="bg-transparent text-amazonBlue border border-amazonBlue group-hover:bg-amazonBlue group-hover:text-white 
        duration-200 text-xs rounded-full py-1 px-2"
        >
          {product.discountPercentage}%
        </p>
      )}
      <span
        onClick={handleToggleFavorite}
        className="text-xl z-40 cursor-pointer hover:text-red-600 duration-200"
      >
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </span>
    </div>
  );
}

export default ProductIcon;
