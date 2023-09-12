import { styled } from "styled-components";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Categories from "./Categories";

const Main = () => {
  return (
    <Wrapper>
      <Banner />
      <Categories />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--max-width);
  padding: var(--padding-mobile);

  @media (min-width: 768px) {
    padding: var(--padding-desktop);
  }

  @media (min-width: 1160px) {
    padding: 0;
  }
`;

export default Main;
