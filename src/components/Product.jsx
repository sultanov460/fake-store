export default function Product({ products }) {
  return (
    <>
      <div className="product">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>
              <strong>${product.price}</strong>
            </p>

            <button>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </>
  );
}
