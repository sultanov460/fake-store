import "./style.scss";
export default function Product({ products, onIncrement }) {
  return (
    <>
      <div className="product">
        {products.map((product) => (
          <div className="product--wrapper" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product--img"
            />
            <h3 className="product--title">{product.title}</h3>
            <p className="product-price">
              <strong>${product.price}</strong>
            </p>

            <button onClick={onIncrement} className="product--btn">
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
