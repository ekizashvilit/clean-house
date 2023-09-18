import { useEffect } from "react";

import { styled } from "styled-components";
import { useGlobalContext } from "../../../context";
import { ReactComponent as Loop } from "../../../assets/svg/loop.svg";
import { ReactComponent as RightArrow } from "../../../assets/svg/right-arrow.svg";
import { ReactComponent as CloseBtn } from "../../../assets/svg/close-btn.svg";
import { modalItems } from "../../../utils/constants";
import DefaultButton from "../../../components/DefaultButton";
import { ReactComponent as Cart } from "../../../assets/svg/cart.svg";
import { ReactComponent as PlusHeart } from "../../../assets/svg/plus-heart.svg";

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  const keysToPrevent = [32, 33, 34, 35, 36, 37, 38, 39, 40];

  if (keysToPrevent.includes(e.keyCode)) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener("wheel", preventDefault, { passive: false }); // modern desktop
  window.addEventListener("touchmove", preventDefault, { passive: false }); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener("wheel", preventDefault, { passive: false });
  window.removeEventListener("touchmove", preventDefault, { passive: false });
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  useEffect(() => {
    if (isModalOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [isModalOpen]);

  return (
    <Wrapper
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <div className="modal-header">
          <div>
            <Loop />
            Frosch
          </div>
          <CloseBtn className="close-btn" onClick={closeModal} />
        </div>
        <div className="products-wrapper">
          {modalItems.map((item) => {
            return (
              <div className="product" key={item.id}>
                <div>
                  <img
                    src={item.img}
                    alt={item.desc}
                    style={{ height: "70px" }}
                  />

                  {item.desc}
                  <div>
                    <span>{item.price}</span>
                    <span>{item.oldPrice}</span>
                  </div>
                </div>
                <div>
                  <span>
                    <PlusHeart />
                    სურვილების სია
                  </span>
                  <DefaultButton icon={<Cart />} text="ყიდვა" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="modal-footer">
          23 პროდუქტი | სრულად
          <RightArrow />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal-container {
    color: #645e55;
    background: white;
    border-radius: 23px;
    width: 80vw;
    height: auto;
    max-width: var(--max-width);
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 40px;
  }

  .modal-header {
    border-bottom: 1px solid #645e55;
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    padding: 1.5rem 0 1rem;

    div {
      display: flex;
      gap: 1rem;
      align-items: center;
      position: relative;
    }
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .product {
    display: flex;
    padding: 35px 0;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #645e55;
  }
`;

export default Modal;
