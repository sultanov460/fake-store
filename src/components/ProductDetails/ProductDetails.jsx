import { useParams } from "react-router-dom";
import { useFetchProduct } from "../../hooks/useFetchProduct";

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useFetchProduct();

  const product = products.find((p) => p.id == id);
  if (!product) return <div>Product not Found</div>;
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <span>$ {product.price}</span>
      </div>
    </div>
  );
}
