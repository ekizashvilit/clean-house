import React, { useState } from "react";
import { styled } from "styled-components";
import { footerNav } from "../../../utils/constants";

const FooterNavbar = () => {
  const [value, setValue] = useState(1);

  return (
    <Wrapper>
      <ul>
        {footerNav.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => setValue(item.id)}
              className={value === item.id ? "active" : ""}
            >
              {item.icon}
              {item.text}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background: white;

  ul {
    display: flex;
    justify-content: space-around;
  }

  #active-stroke {
    stroke: #645e55;
  }

  #active-fill {
    fill: #645e55;
  }

  li.active #active-fill {
    fill: #5d9431;
  }

  li.active #active-stroke {
    stroke: #5d9431;
  }

  ul li {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0;
    color: #645e55;
  }

  li.active {
    color: #5d9431;
  }
`;

export default FooterNavbar;
