import { Product } from "@/lib/type";
import ProductCart from "./ProductCart";
import Container from "./Container";

interface Props {
  products: Product[];
}

function ProductsList({ products }: Props) {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default ProductsList;
