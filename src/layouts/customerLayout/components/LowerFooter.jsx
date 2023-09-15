import { styled } from "styled-components";

const LowerFooter = () => {
  return <Wrapper>© 2023. ყველა უფლება დაცულია</Wrapper>;
};

const Wrapper = styled.div`
  background-color: #5d9431;
  color: white;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 1px;
`;

export default LowerFooter;
