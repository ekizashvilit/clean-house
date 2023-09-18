import { styled } from "styled-components";

const FooterEmail = () => {
  return (
    <Wrapper>
      <input type="email" placeholder="ელ-ფოსტა" />
      <button>გამოწერა</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  position: relative;

  input {
    width: 100%;
    border: none;
    border-radius: 23px;
    height: 45px;
    font-size: 15px;
    padding-left: 1.5rem;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    height: 100%;
    background: #5d9431;
    min-width: 100px;
    color: white;
    border-radius: 23px;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  button:hover {
    background: #54852c;
  }
`;

export default FooterEmail;
