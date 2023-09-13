import { productsOnSale } from "../../../utils/constants";
import DefaultButton from "../../../components/buttons/DefaultButton";
import { ReactComponent as FreeDelivery } from "../../../assets/svg/free-delivery.svg";
import { ReactComponent as Cart } from "../../../assets/svg/cart.svg";
import { styled } from "styled-components";

import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

const DiscountSlider = () => {
  return (
    <Wrapper>
      <Swiper
        style={{ maxWidth: "1088px" }}
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        {productsOnSale.map((item) => {
          return (
            <SwiperSlide className="products-wrapper" key={item.id}>
              <span className="discount-rate">{item.discount}</span>
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
                <img src={item.img} alt="" />
                <div>
                  <span className="new-price">{item.newPrice}</span>
                  <span className="old-price">{item.oldPrice}</span>
                </div>
                <p>{item.description}</p>
                <DefaultButton icon={<Cart />} text="ყიდვა" />
                {item.freeDelivery && (
                  <FreeDelivery style={{ width: "100%" }} />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .custom-btn {
    height: 40px;
    max-width: 143px;
    border-radius: 8px;
    flex-direction: row;
    margin-bottom: 0;
    /* padding: 0; */
  }

  .products-wrapper {
    max-width: 143px;
    max-height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .discount-rate,
  .top-product,
  .best-seller {
    position: absolute;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default DiscountSlider;
