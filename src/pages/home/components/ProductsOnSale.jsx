import { styled } from "styled-components";
import { ReactComponent as Percent } from "../../../assets/svg/percent.svg";

import DiscountSlider from "./DiscountSlider";

const ProductsOnSale = () => {
  return (
    <Wrapper>
      <div className="section-title">
        <h3>
          <Percent />
          სააქციო პროდუქტები
        </h3>
        <span></span>
      </div>
      <DiscountSlider />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ProductsOnSale;
