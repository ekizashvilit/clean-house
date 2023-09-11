import { styled } from "styled-components";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import Categories from "./Categories";

const Main = () => {
  return (
    <Wrapper>
      <SearchBar />
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
`;

export default Main;
