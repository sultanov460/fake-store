import { useState } from "react";
import { useEffect } from "react";
import Product from "./components/Product/Product";
import { PacmanLoader } from "react-spinners";
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <PacmanLoader color="#32cd32" />;
  if (error) return <p>Ошибка: {error}</p>;
  return (
    <>
      <Product products={products} />
    </>
  );
}
