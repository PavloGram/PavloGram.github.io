import { styled } from "styled-components";

const SearchFormButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchFormWarningText = styled.p`
  display: none;
  color: white;
`;
const SearchFormInput = styled.input`
  color: #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: normal;
  width: 220px;

  background: #ffffff;
  border-radius: 100px;
  border: none;
  padding: 10px 16px 10px 14px;
  outline: none;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: normal;
    color: #000000;
  }
`;
const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
`;
export { SearchForm, SearchFormButton, SearchFormInput, SearchFormWarningText };
