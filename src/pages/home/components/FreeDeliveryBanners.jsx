import { styled } from "styled-components";

const FreeDeliveryBanners = () => {
  return (
    <Wrapper>
      <img src="/images/venus-banner.png" alt="venus banner" />
      <div className="free-delivery">
        <div>
          <h3>უფასო მიტანა</h3>
          <p>100₾-ზე მეტ შენაძენზე</p>
        </div>
        <div>
          <p>გაიგე რომელ პროდუქტზე შეგიძლია</p>
          <h3>ქულების დაგროვება</h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    height: 200px;
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }

  .free-delivery {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .free-delivery div {
    min-height: 100px;
    background-color: #fbd70d;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    letter-spacing: 1px;
    color: #645e55;
  }

  .free-delivery div:last-child {
    background: #5d9431;
    color: white;
  }

  @media (min-width: 768px) {
    img {
      width: 100%;
      height: auto;
    }

    .free-delivery {
      flex-direction: row;
    }

    .free-delivery div {
      width: 100%;
      height: 250px;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 30px;

      h3 {
        font-size: 24px;
      }

      p {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;

export default FreeDeliveryBanners;
