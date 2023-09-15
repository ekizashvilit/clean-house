import Discount from "../assets/svg/25-discount.svg";
import RightArrow from "../assets/svg/right-arrow.svg";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

const Banner = () => {
  return (
    <div style={{ width: "100%" }}>
      <Swiper
        style={{ maxWidth: "1088px" }}
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            style={{
              height: "250px",
              width: "100%",
              background: "#ECEDF2",
              borderRadius: "20px",
              position: "relative",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <div
              className="ad-text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1.5rem 1rem",
              }}
            >
              <img
                src="/images/schwarzkof-logo-mob.png"
                style={{ height: "55px", width: "108px", paddingLeft: "5px" }}
                alt=""
              />
              <img src={Discount} style={{ height: "66px", width: "129px" }} />
              <span style={{ paddingLeft: "5px", fontWeight: "bold" }}>
                მხოლოდ <br />
                20-22 აპრილი!
              </span>
              <div
                style={{
                  paddingLeft: "5px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                გაიგე მეტი <img src={RightArrow} style={{ height: "8px" }} />
              </div>
            </div>
            <div className="ad-picture">
              <img src="/images/mobile-banner.png" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "250px",
              width: "100%",
              background: "#ECEDF2",
              borderRadius: "20px",
              position: "relative",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <div
              className="ad-text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1.5rem 1rem",
              }}
            >
              <img
                src="/images/schwarzkof-logo-mob.png"
                style={{ height: "55px", width: "108px", paddingLeft: "5px" }}
                alt=""
              />
              <img src={Discount} style={{ height: "66px", width: "129px" }} />
              <span style={{ paddingLeft: "5px", fontWeight: "bold" }}>
                მხოლოდ <br />
                20-22 აპრილი!
              </span>
              <div
                style={{
                  paddingLeft: "5px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                გაიგე მეტი <img src={RightArrow} style={{ height: "8px" }} />
              </div>
            </div>
            <div className="ad-picture">
              <img src="/images/mobile-banner.png" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "250px",
              width: "100%",
              background: "#ECEDF2",
              borderRadius: "20px",
              position: "relative",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <div
              className="ad-text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1.5rem 1rem",
              }}
            >
              <img
                src="/images/schwarzkof-logo-mob.png"
                style={{ height: "55px", width: "108px", paddingLeft: "5px" }}
                alt=""
              />
              <img src={Discount} style={{ height: "66px", width: "129px" }} />
              <span style={{ paddingLeft: "5px", fontWeight: "bold" }}>
                მხოლოდ <br />
                20-22 აპრილი!
              </span>
              <div
                style={{
                  paddingLeft: "5px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                გაიგე მეტი <img src={RightArrow} style={{ height: "8px" }} />
              </div>
            </div>
            <div className="ad-picture">
              <img src="/images/mobile-banner.png" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "250px",
              width: "100%",
              background: "#ECEDF2",
              borderRadius: "20px",
              position: "relative",
              display: "flex",
              overflow: "hidden",
            }}
          >
            <div
              className="ad-text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1.5rem 1rem",
              }}
            >
              <img
                src="/images/schwarzkof-logo-mob.png"
                style={{ height: "55px", width: "108px", paddingLeft: "5px" }}
                alt=""
              />
              <img src={Discount} style={{ height: "66px", width: "129px" }} />
              <span style={{ paddingLeft: "5px", fontWeight: "bold" }}>
                მხოლოდ <br />
                20-22 აპრილი!
              </span>
              <div
                style={{
                  paddingLeft: "5px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                გაიგე მეტი <img src={RightArrow} style={{ height: "8px" }} />
              </div>
            </div>
            <div className="ad-picture">
              <img src="/images/mobile-banner.png" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
