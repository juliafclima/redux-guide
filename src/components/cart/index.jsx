import * as Styles from "./styles";

import CartItem from "../cart-item/index";
import { useSelector } from "react-redux";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.length > 0 ? (
          products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <Styles.CartSubtitle>Seu carrinho está vazio no momento</Styles.CartSubtitle>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
