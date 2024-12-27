"use client";

import { Store } from "@/lib/Store";
// import { Product } from "@/lib/type";
import Image from "next/image";
import { FaHeartBroken } from "react-icons/fa";
import Link from "next/link";

function FavoritePage() {
    const { favoriteProduct, removeFromFavorite, resetFavorite } = Store();

    const handleClearFavorites = () => {
        resetFavorite();
    };

    if (favoriteProduct.length === 0) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-semibold mb-4">Your Favorites List is Empty</h1>
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
            <h1 className="text-3xl font-semibold mb-6">Your Favorites</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteProduct.map((product) => (
                    <div
                        key={product.id}
                        className="border p-4 rounded-md shadow-sm hover:shadow-lg duration-200"
                    >
                        <Image
                            src={product.thumbnail || ""}
                            alt={product.title}
                            width={300}
                            height={200}
                            className="rounded-md object-cover"
                            loading="lazy"
                            unoptimized={true}
                        />
                        <div className="mt-4">
                            <h2 className="text-lg font-medium">{product.title}</h2>
                            <p>
                                Price: $
                                {product?.price !== undefined ? product.price.toFixed(2) : "0.00"}
                            </p>

                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <button
                                onClick={() => removeFromFavorite(product.id)}
                                className="flex items-center text-red-500 hover:text-red-600 duration-200"
                            >
                                <FaHeartBroken className="mr-1" />
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-right">
                <button
                    onClick={handleClearFavorites}
                    className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                >
                    Clear Favorites
                </button>
            </div>
        </div>
    );
}

export default FavoritePage;
