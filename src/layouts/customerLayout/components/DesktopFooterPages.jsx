import { styled } from "styled-components";

const DesktopFooterPages = ({ conditions, title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <ul>
        {conditions.map((item) => {
          return <li>{item.text}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DesktopFooterPages;
