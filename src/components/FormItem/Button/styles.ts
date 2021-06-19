import styled from "styled-components";

interface ButtonProps{
  color?: string;
}

export const FormButton = styled.div<ButtonProps>`
  display: flex;
  height: 3rem;
  max-width: 30%;
  width: 30%;
  border-radius: 5px;
  color: var(--white);
  background-color: ${props => props.color || "var(--highlight)"};
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transition: box-shadow 0.3s ease-in-out;

  user-select: none;
  -moz-user-select: none;
  cursor: pointer;

  &:hover{
    box-shadow: 0.5px 2px 5px rgba(0,0,0,0.25);
  }
  &:active{
    background-color: var(--label);
  }

`;