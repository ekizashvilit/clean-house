import { styled } from "styled-components";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Categories from "./Categories";
import DefaultButton from "../../../components/buttons/DefaultButton";
import { ReactComponent as ToggleBtn } from "../../../assets/svg/categories-toggle-icon.svg";
import { ReactComponent as Percent } from "../../../assets/svg/percent.svg";

import ProductBrands from "./ProductBrands";
import ProductsOnSale from "./ProductsOnSale";

const Main = () => {
  return (
    <Wrapper>
      <Banner />
      <section className="categories-wrapper">
        <DefaultButton icon={<ToggleBtn />} text="ყველა კატეგორია" />
        <Categories />
      </section>
      <ProductBrands />
      <ProductsOnSale icon={<Percent />} text="სააქციო პროდუქტები" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: var(--padding-mobile);
  gap: 2rem;

  .custom-btn {
    height: 48px;
    margin-bottom: 2rem;
    padding: 1rem;
  }

  .categories-wrapper {
    width: 100%;
    max-width: var(--max-width);
  }

  @media (min-width: 768px) {
    padding: var(--padding-desktop);

    .categories-wrapper {
      display: grid;
      grid-template-columns: 1fr auto;
    }

    .custom-btn {
      height: 120px;
      min-width: 115px;
      flex-direction: column;
      line-height: 1.5;
    }

    .categories-wrapper {
      grid-gap: 1rem;
    }
  }

  @media (min-width: 965px) {
    .custom-btn {
      height: 148px;
      min-width: 142px;
    }
  }

  @media (min-width: 1160px) {
    padding: 0;
  }
`;

export default Main;
