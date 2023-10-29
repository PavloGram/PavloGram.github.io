import React from "react";
import Button from "../../UI/Button/Button";
import styled from "styled-components";

const LibraryButtonWrap = styled.div`
  /* margin-bottom: 10px; */
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MyLibraryButton() {
  return (
    <LibraryButtonWrap>
      <Button text="watched" value="library" />
      <Button text="queue" value="library" />
    </LibraryButtonWrap>
  );
}

export default MyLibraryButton;
