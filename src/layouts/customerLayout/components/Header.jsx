import { styled } from "styled-components";
import { ReactComponent as Phone } from "../../../assets/svg/header-phone.svg";
import { ReactComponent as Mail } from "../../../assets/svg/header-mail.svg";
import { pages } from "../../../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Wrapper>
      <nav className="header-wrapper">
        <div className="nav-container">
          <div className="contact">
            <Link to="tel:+995322611151">
              <Phone />
              <span>995 (32) 2 61 11 51</span>
            </Link>
            <Link to="mailto:contact@ch.ge">
              <Mail />
              <span>CONTACT@CH.GE</span>
            </Link>
          </div>
          <div className="pages">
            {pages.map((page) => {
              return (
                <Link to={page.url} key={page.id}>
                  {page.text}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <div className="yellow-line"></div>
      <SearchBar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  font-family: "Noto Sans Georgian", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1.5rem;

  .header-wrapper {
    display: none;
  }

  .yellow-line {
    background-color: #fbd70d;
    height: 1rem;
  }

  .contact,
  .pages {
    display: none;
  }

  /* 1095 */

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    font-size: 10px;
    height: auto;
    color: #645e55;
    gap: 0.5rem;
    position: fixed;

    .yellow-line {
      display: none;
    }

    .header-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      background: #fbd70d;
      padding: 0.7rem 0;
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: var(--max-width);
      padding: var(--padding-desktop);
    }

    .contact {
      display: flex;
      gap: 1rem;
    }

    .contact a {
      display: flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      color: #645e55;
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
      bottom: -11px;
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

  @media (min-width: 1160px) {
    font-size: 12px;

    .nav-container {
      padding: 0;
    }
  }
`;

export default Header;
