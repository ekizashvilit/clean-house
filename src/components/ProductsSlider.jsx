import { productsOnSale } from "../utils/constants";
import DefaultButton from "./DefaultButton";
import { ReactComponent as FreeDelivery } from "../assets/svg/free-delivery.svg";
import { ReactComponent as Cart } from "../assets/svg/cart.svg";
import { styled } from "styled-components";
import { A11y, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";

const ProductsSlider = () => {
  const calculateDiscount = (newPrice, oldPrice) => {
    const discount = ((oldPrice - newPrice) / oldPrice) * 100;
    return Math.round(discount);
  };

  const calculateNewPrice = (discount, oldPrice) => {
    const newPrice = oldPrice - (oldPrice * discount) / 100;
    return newPrice.toFixed(2);
  };

  const calculateOldPrice = (newPrice, discount) => {
    const oldPrice = (newPrice * 100) / (100 - discount);
    return oldPrice.toFixed(2);
  };

  return (
    <Wrapper>
      <Swiper
        style={{ minWidth: "100%" }}
        modules={[A11y, FreeMode]}
        spaceBetween={50}
        slidesPerView={"auto"}
        freeMode
      >
        {productsOnSale.map((item) => {
          return (
            <SwiperSlide className="products-wrapper" key={item.id}>
              <span className="discount-rate">
                -
                {item.discount ||
                  calculateDiscount(item.newPrice, item.oldPrice)}
                %
              </span>
              {item.top && (
                <img
                  src="/images/top.png"
                  alt="top product"
                  className="top-product"
                />
              )}
              {item.bestSeller && (
                <img
                  src="/images/best-seller.png"
                  alt="best seller"
                  className="best-seller"
                />
              )}

              <div className="card">
                <img
                  src={item.img}
                  alt="product image"
                  className="product-image"
                />
                <div className="price-wrapper">
                  <span className="new-price">
                    {item.newPrice ||
                      calculateNewPrice(item.oldPrice, item.discount)}{" "}
                    ₾
                  </span>
                  <span className="old-price">
                    {item.oldPrice ||
                      calculateOldPrice(item.newPrice, item.discount)}{" "}
                    ₾
                  </span>
                </div>
                <p>{item.description}</p>
                <DefaultButton
                  className={"product-btn"}
                  icon={<Cart />}
                  text="ყიდვა"
                />
              </div>
              {item.freeDelivery && <FreeDelivery style={{ width: "100%" }} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .top-product {
    top: -2px;
    right: -10px;
  }

  .best-seller {
    top: 40px;
    right: -10px;
  }

  .discount-rate {
    background-color: #d63a80;
    border-radius: 14px;
    width: 60px;
    height: 28px;
    top: 0;
    left: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding-top: 3px;
  }

  .products-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    gap: 1rem;
  }

  .discount-rate,
  .top-product,
  .best-seller {
    position: absolute;
  }

  .card,
  .products-wrapper,
  .swiper-slide {
    width: 143px !important;
    height: 315px !important;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #645e55;
  }

  .card p {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 13px;
    max-height: 55px;
    padding-bottom: 7px;
  }

  .product-image {
    height: 143px;
    width: 143px;
  }

  .price-wrapper {
    display: flex;
    gap: 7px;
    flex-direction: row;
    align-items: center;
  }

  .price-wrapper span:last-child {
    flex: 1;
    padding-top: 1px;
  }

  .new-price {
    font-size: 18px;
    font-weight: bold;
  }

  .old-price {
    font-size: 16px;
    text-decoration: line-through;
  }

  .custom-btn.product-btn {
    height: 40px;
    max-width: 143px;
    border-radius: 8px;
    flex-direction: row !important;
    margin-bottom: 0;
    padding: 8px;
  }
`;

export default ProductsSlider;
