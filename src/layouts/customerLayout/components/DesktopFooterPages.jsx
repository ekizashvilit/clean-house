import { styled } from "styled-components";

const DesktopFooterPages = ({ items, title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;

  h4 {
    padding-bottom: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ul li {
    list-style: none;
    cursor: pointer;
  }
`;

export default DesktopFooterPages;
