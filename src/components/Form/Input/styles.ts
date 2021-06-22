import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
  padding-left: 10px;
  outline: none;
  background-color: var(--white-50);

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,::-webkit-inner-spin-button{
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }

`;