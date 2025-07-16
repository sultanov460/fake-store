import { useState } from "react";
import { useEffect } from "react";
import Product from "./components/Product/Product";
import { PacmanLoader } from "react-spinners";
import Nav from "./components/Navbar/Nav";
export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

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

  function increment() {
    setCount((num) => num + 1);
  }

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // чтобы центр был по всей высоте экрана
        }}
      >
        <PacmanLoader color="#32cd32" size={50} />
      </div>
    );

  if (error) return <p>Ошибка: {error}</p>;
  return (
    <>
      <Nav counter={count} />
      <Product products={products} onIncrement={increment} />
    </>
  );
}
