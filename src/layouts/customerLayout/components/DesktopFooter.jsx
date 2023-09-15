import { styled } from "styled-components";
import LowerFooter from "./LowerFooter";
import DesktopFooterPages from "./DesktopFooterPages";
import { conditions } from "../../../utils/constants";

const DesktopFooter = () => {
  return (
    <Wrapper>
      <div>
        <div></div>
        <DesktopFooterPages conditions={conditions} title="პირობები" />
        <DesktopFooterPages />
        <div></div>
      </div>
      <LowerFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DesktopFooter;
