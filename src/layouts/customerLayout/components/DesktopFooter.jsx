import { styled } from "styled-components";
import LowerFooter from "./LowerFooter";
import DesktopFooterPages from "./DesktopFooterPages";
import { conditions } from "../../../utils/constants";
import { company } from "../../../utils/constants";
import { ReactComponent as FooterLogo } from "../../../assets/svg/footer-logo.svg";
import FooterEmail from "./FooterEmail";
import Socials from "./Socials";

const DesktopFooter = () => {
  return (
    <Wrapper className="desktop-footer">
      <div className="desktop-footer-wrapper">
        <div className="news">
          <FooterLogo />
          <p>არ გამოტოვოთ სიახლეები:</p>
          <FooterEmail />
        </div>
        <DesktopFooterPages items={conditions} title="პირობები" />
        <DesktopFooterPages items={company} title="კომპანია" />
        <div className="for-companies">
          <h4>კომპანიებისთვის</h4>
          <p style={{ cursor: "pointer" }}>შეკვეთის გაფორმება</p>
          <h4>კონტაქტი</h4>
          <Socials />
        </div>
      </div>
      <LowerFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3rem;
  background: #fbd70d;
  color: #645e55;
  font-size: 12px;

  .desktop-footer-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 3rem;
    padding: 65px 1rem;
  }

  .news {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input {
      width: 100%;
      max-width: 436px;
    }
  }

  .for-companies {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .socials-wrapper {
    padding-top: 0;
  }

  @media (min-width: 1088px) {
    font-size: 14px;

    .desktop-footer-wrapper {
      padding-left: 170px;
      padding-right: 170px;
    }
  }
`;

export default DesktopFooter;
