import * as Styles from "./styles";

import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from "../../redux/cart/selector";
import CartItem from "../cart-item/index";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const totalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}

            <Styles.CartTotal>
              Total: R${totalPrice.toFixed(2)}
            </Styles.CartTotal>
          </>
        ) : (
          <Styles.CartSubtitle>
            Seu carrinho está vazio no momento
          </Styles.CartSubtitle>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
