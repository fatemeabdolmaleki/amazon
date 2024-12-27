"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; 
import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/Container';
import PriceFormat from '@/components/PriceFormat';
import PriceTag from '@/components/PriceTag';
import ProductImage from '@/components/ProductImage';
import { fetchData } from '@/lib';
import { Product } from '@/lib/type';
import { FaRegEye } from 'react-icons/fa6';
import { MdStar } from 'react-icons/md';

function SingleProductPage() {
    const searchParams = useSearchParams(); // Using the hook to access searchParams
    const id = searchParams.get('id'); // Accessing the 'id' query param
    
    // Ensure 'id' is available before proceeding
    if (!id) {
        return <div>Product not found</div>;
    }

    const [product, setProduct] = useState<Product | null>(null);
    const endpoint = `https://dummyjson.com/products/${id}`;

    // Fetching product data when component mounts or 'id' changes
    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await fetchData(endpoint);
            setProduct(productData);
        };
        fetchProduct();
    }, [endpoint]); // Use 'endpoint' as a dependency here

    if (!product) {
        return <div>Loading...</div>; // Show loading state until product is fetched
    }

    return (
        <Container>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
                <ProductImage product={product} />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl font-bold'>{product.title}</h2>
                    <div className='flex justify-between items-center gap-2'>
                        <PriceTag 
                            regularPrice={product.price + product.discountPercentage / 100} 
                            discountedPrice={product.price - product.discountPercentage / 100} 
                        />
                        <div className='flex items-center gap-1'>
                            <div className='text-base flex items-center'>
                                {
                                    Array.from({ length: 5 }).map((_, index) => {
                                        const filled = index + 1 <= Math.floor(product.rating)
                                        const halfFilled = index + 1 > Math.floor(product.rating) && index < Math.ceil(product.rating)
                                        return (
                                            <MdStar key={index} className={`${filled ? "text-amazonOrangeDark" : halfFilled ? "text-amazonYellowDark" : "text-lightText"}`} />
                                        )
                                    })
                                }
                            </div>
                            <p className='text-base font-semibold'>{`(${product.rating.toFixed(1)} reviews)`}</p>
                        </div>
                    </div>
                    <p className='flex items-center'>
                        <FaRegEye className='mr-1' />
                        <span className='font-semibold mr-1'>250+</span> people are viewing this right now
                    </p>
                    <p>You are saving {''}
                        <span className='text-base font-semibold text-green-500'>
                            <PriceFormat amount={product.discountPercentage / 100} />
                        </span> {''}
                        upon purchase
                    </p>
                    <div>
                        <p className='text-sm tracking-wide'>
                            {product.description}
                        </p>
                        <p className='text-base '>{product.warrantyInformation}</p>
                    </div>
                    <p>Brand: <span className='font-medium'>{product.brand}</span></p>
                    <p>Category: {''} <span className='font-medium capitalize'>{product.category}</span></p>
                    <p>Tags: {''}
                        {product.tags.map((val, index) => {
                            return (
                                <span key={index} className='font-medium capitalize'>{val}{index < product.tags.length - 1 && ", "}</span>
                            )
                        })}
                    </p>
                    <AddToCartButton product={product} />
                </div>
            </div>
            {/* reviews */}
            <div className='p-5 md:p-10 bg-[#f7f7f7] w-full flex items-center flex-wrap gap-5 md:gap-10'>
                {product.reviews.map((item) => {
                    return (
                        <div key={item.reviewerName} className='bg-white/80 p-5 border-[1px] border-amazonOrangeDark/50 rounded-md hover:border-amazonOrangeDark hover:bg-white duration-200 flex flex-col gap-1'>
                            <p className='text-base font-semibold'>{item.comment}</p>
                            <div className='text-xs'>
                                <p className='font-semibold'>{item.reviewerName}</p>
                                <p>{item.reviewerEmail}</p>
                            </div>
                            <div className='flex items-center'>
                                {Array.from({ length: 5 }).map((_, index) => 
                                    <MdStar key={index} className={`${index < item.rating ? "text-amazonOrangeDark" : "text-lightText"}`} />
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default SingleProductPage;
