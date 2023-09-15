import { styled } from "styled-components";
import FooterNavbar from "./FooterNavbar";
import { ReactComponent as Logo } from "../../../assets/svg/Logo.svg";
import { ReactComponent as Facebook } from "../../../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "../../../assets/svg/linkedin.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/youtube.svg";

const MobileFooter = () => {
  return (
    <Wrapper className="mobile-footer">
      <div className="upper-footer">
        <h4>არ გამოტოვოთ სიახლეები:</h4>
        <form>
          <input type="email" placeholder="ელ-ფოსტა" />
          <button>გამოწერა</button>
        </form>
        <div className="socials-wrapper">
          <Logo style={{ maxWidth: "130px" }} />
          <div className="socials">
            <Facebook />
            <Instagram />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>
      <div className="lower-footer">© 2023. ყველა უფლება დაცულია</div>
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

  .lower-footer {
    background-color: #5d9431;
    color: white;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    letter-spacing: 1px;
  }

  .socials-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .socials {
    padding-top: 22px;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  form {
    display: flex;
    position: relative;
  }

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

export default MobileFooter;
