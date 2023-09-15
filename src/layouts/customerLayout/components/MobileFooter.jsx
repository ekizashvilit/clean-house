import { styled } from "styled-components";
import FooterNavbar from "./FooterNavbar";
import { ReactComponent as Logo } from "../../../assets/svg/Logo.svg";

const MobileFooter = () => {
  return (
    <Wrapper className="mobile-footer">
      <div className="upper-footer">
        <h4>არ გამოტოვოთ სიახლეები:</h4>
        <form>
          <input type="email" />
          <button>btn</button>
        </form>
        <div>
          <Logo />
          <div className="socials">
            <img src="" alt="" />
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
  }

  .lower-footer {
    background-color: #5d9431;
    color: white;
  }
`;

export default MobileFooter;
