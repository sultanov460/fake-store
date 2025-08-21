import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Nav({ counter }) {
  return (
    <div className="nav">
      <h3>
        <span>FAKE</span> STORE
      </h3>
      <div className="cart">
        <button>
          <FontAwesomeIcon icon={faCartShopping} color="#fff" size="2x" />
          {counter > 0 && (
            <p className="cart-counter">{counter > 9 ? "9+" : counter}</p>
          )}
        </button>
      </div>
    </div>
  );
}
