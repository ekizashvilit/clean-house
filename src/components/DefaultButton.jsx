import { styled } from "styled-components";

const DefaultButton = ({ icon, text, className }) => {
  return (
    <Wrapper className={`custom-btn ${className}`}>
      {icon}
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: none;
  background: #5d9431;
  color: white;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export default DefaultButton;
