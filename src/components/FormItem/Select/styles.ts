import styled from "styled-components";
import { Icon } from "./data";

export const Select = styled.select`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
  padding-left: 10px;
  select::-ms-expand { display: none; }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: url(${Icon.data}) 98% center / 20px no-repeat;
  background-color: var(--white-50);

  outline: none;
`;