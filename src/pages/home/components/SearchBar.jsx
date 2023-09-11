import { styled } from "styled-components";
import Logo from "../../../assets/svg/Logo.svg";
import Barcode from "../../../assets/svg/card-barcode.svg";
import Toggle from "../../../assets/svg/toggle.svg";
import Loop from "../../../assets/svg/loop.svg";
import Cart from "../../../assets/svg/cart.svg";
import Profile from "../../../assets/svg/prof-desktop.svg";

const SearchBar = () => {
  return (
    <Wrapper>
      <img src={Toggle} className="hidden toggle pointer" alt="" />
      <img src={Logo} alt="" className="logo pointer" />

      <div className="search-bar hidden">
        <img src={Loop} alt="" className="pointer" />
        <input type="text" placeholder="პროდუქციის ძებნა" />
      </div>

      <div className="cart-profile hidden">
        <div className="pointer">
          <img src={Cart} alt="cart logo" />
        </div>
        <img src={Profile} alt="" className="pointer" />
      </div>

      <div className="coins">
        <p>
          207.80
          <span>ქულა</span>
        </p>
        <img src={Barcode} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  width: 90%;

  .hidden {
    display: none;
  }

  .logo {
    height: 50px;
  }

  .coins {
    display: flex;
    gap: 10px;
    align-items: center;

    img {
      height: 100;
    }

    p {
      display: flex;
      flex-direction: column;
      text-align: right;
      font-size: 19px;
      color: #645e55;
      font-family: "Noto Sans Georgian", sans-serif;

      span {
        font-size: 13px;
        margin-top: -8px;
      }
    }
  }

  @media (min-width: 768px) {
    margin: 1rem 0 1.6rem 0;
    width: 76%;
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    gap: 1.5rem;

    .pointer {
      cursor: pointer;
    }

    .coins {
      display: none;
    }

    align-items: center;
    position: relative;

    .toggle {
      display: block;
      margin-top: 11px;
    }

    .search-bar {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      padding-top: 7px;

      input {
        width: 100%;
        max-width: 738px;
        height: 45px;
        padding-left: 3rem;
        border-radius: 23px;
        border: none;
        background-color: #ecf2f0;
      }

      img {
        position: absolute;
        margin-left: 1rem;
      }
    }

    .cart-profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-top: 6px;
    }

    .cart-profile div {
      background-color: #5d9431;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        position: absolute;
        top: 55%;
        left: 47%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export default SearchBar;