import { styled } from "styled-components";
import FooterNavbar from "./FooterNavbar";
import { ReactComponent as Logo } from "../../../assets/svg/Logo.svg";
import LowerFooter from "./LowerFooter";
import FooterEmail from "./FooterEmail";
import Socials from "./Socials";

const MobileFooter = () => {
  return (
    <Wrapper className="mobile-footer">
      <div className="upper-footer">
        <h4>არ გამოტოვოთ სიახლეები:</h4>
        <FooterEmail />
        <div className="socials-wrapper">
          <Logo style={{ maxWidth: "130px" }} />
          <Socials />
        </div>
      </div>
      <LowerFooter />
      <FooterNavbar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .upper-footer {
    background-color: #fbd70d;
    color: #645e55;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;

    h4 {
      font-weight: normal;
      letter-spacing: 1px;
      padding-left: 1rem;
    }
  }

  .socials-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5rem;
  }
`;

export default MobileFooter;
