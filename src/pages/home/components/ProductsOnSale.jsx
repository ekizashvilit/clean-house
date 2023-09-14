import { styled } from "styled-components";

import ProductsSlider from "./ProductsSlider";

const ProductsOnSale = ({ icon, text }) => {
  return (
    <Wrapper>
      <div className="section-title">
        <h3>
          {icon}
          {text}
        </h3>
        <span></span>
      </div>
      <ProductsSlider />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: var(--max-width);
  width: 100%;

  .section-title h3 {
    display: flex;
    gap: 1rem;
    color: #645e55;
  }
`;

export default ProductsOnSale;
