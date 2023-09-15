import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, FreeMode } from "swiper/modules";
import { news } from "../../../utils/constants";

import { ReactComponent as RightArrow } from "../../../assets/svg/right-arrow.svg";
import { ReactComponent as NewsIcon } from "../../../assets/svg/news-icon.svg";

const NewsSlider = () => {
  return (
    <Wrapper className="wrapper">
      <div className="header">
        <NewsIcon />
        სიახლეები
      </div>
      <Swiper
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation, FreeMode]}
        spaceBetween={30}
        className="mySwiper"
        freeMode
      >
        {news.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt="news image" />
              <div className="info">
                <p>{item.text}</p>
                <div className="date">
                  <span>02/08/2023</span>
                  <span>
                    იხილე სრულად <RightArrow />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  color: #645e55;
  font-weight: bold;

  .header {
    padding-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .swiper-slide {
    min-width: 282px;
    max-width: 350px;
    box-shadow: 0px 3px 14px #00000029;
    border-radius: 1rem;
  }

  .swiper-slide img {
    width: 100%;
  }

  .date {
    font-weight: normal;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }

  .date:last-child {
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 26px;
  }

  .swiper-button-disabled {
    opacity: 0;
    transition: 300ms ease-out;
  }

  .MySwapper {
    position: relative;
    /* z-index: 0 !important; */
  }

  .swiper {
    padding-bottom: 1rem;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #5d9431;
    color: white;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    z-index: 999 !important;
  }

  .swiper-button-next {
    right: 15px;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1rem;
    font-weight: bolder;
  }
`;

export default NewsSlider;
