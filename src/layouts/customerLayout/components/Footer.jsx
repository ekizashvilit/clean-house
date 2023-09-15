import { styled } from "styled-components";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <Wrapper>
      <MobileFooter />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .mobile-footer {
    margin-bottom: 85.72px;
  }
  @media (min-width: 768px) {
    .mobile-footer {
      display: none;
    }
  }
`;

export default Footer;
