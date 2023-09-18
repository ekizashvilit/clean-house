import { ReactComponent as Facebook } from "../../../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "../../../assets/svg/linkedin.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/youtube.svg";

import { styled } from "styled-components";

const Socials = () => {
  return (
    <Wrapper className="socials-wrapper">
      <Facebook />
      <Instagram />
      <Linkedin />
      <Youtube />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 22px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

export default Socials;
