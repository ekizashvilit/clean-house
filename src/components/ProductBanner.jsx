import { styled } from "styled-components";

const ProductBanner = ({ src }) => {
  return <Wrapper src={src} alt="banner" className="wrapper" />;
};

const Wrapper = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export default ProductBanner;
