import { styled } from "styled-components";
import { allCategories } from "../../../utils/constants";

const Categories = () => {
  return (
    <Wrapper>
      <div className="items">
        {allCategories.map((item) => {
          return (
            <div className="category" key={item.id}>
              <span style={item?.textStyle ?? {}}>{item.text}</span>
              <img src={item.img} alt="category" />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  overflow-x: hidden;
  width: 100%;

  .items {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    gap: 1rem;
  }

  .category {
    max-width: 115px;
    height: 120px;
    border: none;
    position: relative;
  }

  .category span {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 16%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 11px;
    color: #645e55;
  }

  .category img {
    height: 100%;
    max-width: 115px;
    border-radius: 12px;
  }

  @media (max-width: 1152px) {
    .items {
      overflow-x: auto;
      height: 125px;
    }

    .items::-webkit-scrollbar {
      display: none;
    }

    .items {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

  @media (min-width: 965px) {
    .category {
      min-width: 142px;
      min-height: 148px;
    }

    .category img {
      max-width: 142px;
    }

    .category span {
      font-size: 13px;
    }

    .items {
      height: unset;
    }
  }
`;

export default Categories;
