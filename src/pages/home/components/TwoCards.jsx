import { styled } from "styled-components";

const TwoCards = ({ headingOne, headingTwo, paragraphOne, paragraphTwo }) => {
  return (
    <Wrapper className="wrapper">
      <div className="info-cards">
        <h3>{headingOne}</h3>
        <p>{paragraphOne}</p>
      </div>
      <div className="info-cards">
        <p>{paragraphTwo}</p>
        <h3>{headingTwo}</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .info-cards {
    min-height: 100px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    letter-spacing: 1px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .info-cards {
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

export default TwoCards;
