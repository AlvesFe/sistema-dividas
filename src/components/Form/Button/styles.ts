import { FormButtonStyleProps } from "libs/ButtonRepository";
import styled from "styled-components";

export const FormButton = styled.div<FormButtonStyleProps>`
  display: flex;
  height: 3rem;
  max-width: 40%;
  padding: 1rem;
  border-radius: 5px;
  color: ${props => props.titleColor};
  background-color: ${props => props.color || "var(--highlight)"};
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;

  @media(max-width: 1028px){
    max-width: 100%;
  }

  user-select: none;
  -moz-user-select: none;
  cursor: pointer;

  ${props => !props.disabled &&
    `
      &:hover{
        box-shadow: 0.5px 2px 5px rgba(0,0,0,0.25);
      }
      &:active{
        background-color: var(--label);
      }
    `
  }
  
  ${props => props.disabled && "background-color: rgba(0,0,0,0.25); cursor: default"}
`;