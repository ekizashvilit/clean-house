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
  max-width: var(--max-width);
  padding: var(--padding-mobile);
`;

export default Main;
