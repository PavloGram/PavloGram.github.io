import styled from "styled-components";
import {
  DESKTOP_BREAKING_POINT,
  TABLET_BREAKING_POINT,
} from "../../js/styleContans";
const LibraryButtonWrap = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${TABLET_BREAKING_POINT}px) {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 12px;
  }
  @media screen and (min-width: ${DESKTOP_BREAKING_POINT}px) {
    margin-right: 28px;
  }
`;

export { LibraryButtonWrap };
