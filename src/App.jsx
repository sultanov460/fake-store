import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./components/Product/Product";
import { PacmanLoader } from "react-spinners";
import Nav from "./components/Navbar/Nav";
import { useFetchProduct } from "./hooks/useFetchProduct";

export default function App() {
  const { products, loading, error } = useFetchProduct();
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
      <Product products={products} />
    </>
  );
}
