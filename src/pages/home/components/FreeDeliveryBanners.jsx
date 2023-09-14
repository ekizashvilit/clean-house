import { styled } from "styled-components";
import ProductBanner from "./ProductBanner";
import TwoCards from "./TwoCards";

const FreeDeliveryBanners = () => {
  return (
    <Wrapper>
      <ProductBanner src="/images/venus-banner.png" />
      <TwoCards
        headingOne="უფასო მიტანა"
        paragraphOne="100₾-ზე მეტ შენაძენზე"
        headingTwo="ქულების დაგროვება"
        paragraphTwo="გაიგე რომელ პროდუქტზე შეგიძლია"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  max-width: 1088px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .info-cards {
    background-color: #fbd70d;
    color: #645e55;
  }

  .info-cards:last-child {
    background: #5d9431;
    color: white;
  }
`;

export default FreeDeliveryBanners;
