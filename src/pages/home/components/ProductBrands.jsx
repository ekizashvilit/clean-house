import { styled } from "styled-components";
import { brands } from "../../../utils/constants";

const ProductBrands = () => {
  return (
    <Wrapper>
      <div className="items">
        {brands.map((item) => {
          return (
            <div className="brand" key={item.id}>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  max-width: var(--max-width);

  .items {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    gap: 1rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    .brand {
      display: flex;
      align-items: center;
      min-width: 70px;
      min-height: 64px;
      flex-grow: 1;

      img {
        width: 100%;
        height: auto;
        border-radius: 12px;
      }
    }
  }
`;

export default ProductBrands;
