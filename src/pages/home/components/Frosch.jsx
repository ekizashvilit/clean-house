import { styled } from "styled-components";

const Frosch = () => {
  return (
    <Wrapper>
      <img src="/images/frosch.png" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1088px;

  img {
    height: 200px;
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
`;

export default Frosch;
