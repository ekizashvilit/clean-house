import { styled } from "styled-components";
import Phone from "../assets/header-phone.svg";
import Mail from "../assets/../assets/header-mail.svg";
import { pages } from "../constants";

const Header = () => {
  return (
    <Wrapper>
      <div className="header-wrapper">
        <div className="contact">
          <div>
            <img src={Phone} alt="" />
            <span>995 (32) 2 61 11 51</span>
          </div>
          <div>
            <img src={Mail} alt="" />
            <span>CONTACT@CH.GE</span>
          </div>
        </div>
        <div className="pages">
          {pages.map((page) => {
            return (
              <a href={page.url} key={page.id}>
                {page.text}
              </a>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: #fbd70d;
  width: 100%;
  height: 1rem;
  font-family: "Noto Sans Georgian", sans-serif;

  .contact,
  .pages {
    display: none;
  }

  /* 1095 */

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 10px;
    padding: 12px 0;
    height: auto;
    color: #645e55;

    .header-wrapper {
      min-width: 76%;
      display: flex;
      justify-content: space-between;
    }

    .contact {
      display: flex;
      gap: 1rem;
    }

    .contact div {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .pages {
      display: flex;
      gap: 1rem;
    }

    .pages a {
      text-decoration: none;
      display: inline-block;
      position: relative;
      color: #645e55;
      cursor: pointer;
      text-transform: uppercase;
    }

    .pages a::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 3px;
      bottom: -12px;
      left: 0;
      background-color: #645e55;
      transform-origin: bottom;
      transition: transform 0.25s ease-out;
    }

    .pages a:hover::after {
      transform: scaleX(1);
      transform-origin: bottom;
    }
  }

  @media (min-width: 1095px) {
    font-size: 12px;

    .header-wrapper {
      min-width: 65%;
    }
  }
`;

export default Header;
