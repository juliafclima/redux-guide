import * as Styles from "./styles";

import ProductItem from "../product-item/index";
import products from "../../data/products";

const Products = () => {
  return (
    <Styles.Container>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Styles.Container>
  );
};

export default Products;
