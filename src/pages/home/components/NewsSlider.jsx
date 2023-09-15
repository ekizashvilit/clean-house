import { styled } from "styled-components";
import ProductsSlider from "../../../components/ProductsSlider";

const NewsSlider = () => {
  return (
    <Wrapper className="wrapper">
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  div {
    width: 100%;
    height: 200px;
    background-color: red;
  }
`;

export default NewsSlider;
