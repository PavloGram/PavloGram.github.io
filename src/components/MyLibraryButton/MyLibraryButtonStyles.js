import styled from "styled-components";
const LibraryButtonWrap = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 12px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 28px;
  }
`;

export { LibraryButtonWrap };
