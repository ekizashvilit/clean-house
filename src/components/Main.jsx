import { styled } from "styled-components";
import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default Main;
