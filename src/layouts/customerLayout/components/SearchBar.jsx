import { styled } from "styled-components";
import Logo from "../../../assets/svg/Logo.svg";
import Barcode from "../../../assets/svg/card-barcode.svg";
import Toggle from "../../../assets/svg/toggle.svg";
import Loop from "../../../assets/svg/loop.svg";
import Cart from "../../../assets/svg/cart.svg";
import { ReactComponent as Profile } from "../../../assets/svg/prof-desktop.svg";
import { useGlobalContext } from "../../../context";
import Modal from "./Modal";

const SearchBar = () => {
  const { openModal } = useGlobalContext();

  return (
    <Wrapper>
      <Modal />
      <div className="searchbar-container">
        <img src={Toggle} className="hidden toggle pointer" alt="navbar icon" />
        <img src={Logo} alt="clean house logo" className="logo pointer" />

        <div className="search-bar hidden" onClick={openModal}>
          <img src={Loop} alt="loop icon" className="pointer" />
          <input type="text" placeholder="პროდუქციის ძებნა" />
        </div>

        <div className="cart-profile hidden">
          <div className="pointer">
            <img
              src="/src/assets/svg/cart.svg"
              className="cart"
              alt="cart icon"
            />
          </div>
          <div className="pointer profile-icon">
            <img src="/src/assets/svg/profile-icon.svg" alt="profile icon" />
          </div>
        </div>

        <div className="coins">
          <p>
            207.80
            <span>ქულა</span>
          </p>
          <img src={Barcode} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .searchbar-container {
    display: flex;
    justify-content: space-between;
    padding: var(--padding-mobile);
    width: 100%;
  }

  .modal-overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: grid;
    justify-items: center;
    padding-top: 3rem;
    visibility: hidden;
    z-index: 100;
    transition: all 0.3s linear;
  }

  .show-modal {
    visibility: visible;
    z-index: 100;
  }

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
    display: flex;
    justify-content: center;
    width: 100%;

    .searchbar-container {
      margin: 1rem 0 1.6rem 0;
      padding: var(--padding-desktop);
      max-width: var(--max-width);
      display: grid;
      place-items: center;
      grid-template-columns: auto auto 1fr auto;
      gap: 1.5rem;
    }

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
    }

    .cart {
      position: absolute;
      top: 55%;
      left: 47%;
      transform: translate(-50%, -50%);
    }

    .cart-profile div:hover {
      background-color: #54852c;
    }
  }

  @media (min-width: 1160px) {
    .searchbar-container {
      padding: 0;
    }
  }
`;

export default SearchBar;
