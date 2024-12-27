import CarouselBanner from "@/components/CarouselBanner";
import ProductsList from "@/components/ProductsList";
import { Metadata } from "next";
import { fetchData } from "@/lib";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home | Amazon",
  description: "Discover the latest products and deals on Amazon.",
  keywords: ["Amazon", "Products", "E-commerce"],
};

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  let products = [];

  try {
    const data = await fetchData(endpoint);
    products = data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <main>
      <CarouselBanner />
      <div className="-mt-10 md:-mt-20 lg:-mt-60  flex items-center justify-center pb-10">
        <Suspense fallback={<p className="text-center">Loading products...</p>}>
          {products.length > 0 ? (
            <ProductsList products={products} />
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </Suspense>
      </div>
    </main>
  );
}
