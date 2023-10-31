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
  color: #fff;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 135px;
  margin-top: 8px;
  margin-left: 14px;

 

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
  padding:  10px 14px;
  outline: none;

  
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: normal;
    color: #000000;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 165px;
    padding:  11px 16px;
  }
  @media screen and (min-width: 768px) {
    width: 187px;
    padding:  13px 16px;
  }
`;
const SearchForm = styled.form`
  position: relative;
  display: flex;
 
  justify-content: center;
`;

const SearchFormWrap = styled.div`
  
  `
export { SearchForm, SearchFormButton, SearchFormInput, SearchFormWarningText, SearchFormWrap };
