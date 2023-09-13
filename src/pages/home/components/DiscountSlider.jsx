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
              {item.top && <img src="/images/top.png" alt="top product" />}
              {item.bestSeller && (
                <img src="/images/best-seller.png" alt="best seller" />
              )}

              <div className="card">
                <img src={item.img} alt="" />
                <div>
                  <span className="new-price">{item.newPrice}</span>
                  <span className="old-price">{item.oldPrice}</span>
                </div>
                <p>{item.description}</p>
                <DefaultButton icon={<Cart />} text="ყიდვა" />
                {item.freeDelivery && <FreeDelivery />}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    background: violet;
    height: 100px;
    width: 100px;
  }

  .custom-btn {
    height: 40px;
    max-width: 143px;
    border-radius: 8px;
    flex-direction: row;
  }
`;

export default DiscountSlider;
