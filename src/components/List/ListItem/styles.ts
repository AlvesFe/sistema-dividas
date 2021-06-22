import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--white-50);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
  user-select: none;

  &:hover{
    box-shadow: 0.1px 2px 5px rgba(0,0,0,0.25);
    transition: box-shadow 0.3s ease-in-out;
  }
  &:active{
    background-color: var(--label);
  }
`;

export const ItemName = styled.div`
  font-size: larger;
`;

export const ItemDate = styled.div`
  font-size: large;
  color: var(--label);
`;

export const ItemValue = styled.div`
  font-size: large;
  color: var(--secondary);
`