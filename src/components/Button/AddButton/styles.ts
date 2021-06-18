import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular'

export const Button = styled.div`
  display: flex;
  color: var(--white);
  height: 4rem;
  width: 4rem;
  border-radius: 35px;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--secondary);
  overflow: hidden;
  padding: 0 5px 0 5px;
  transition: 0.25s;
  user-select: none;
  cursor: pointer;
  transition: 0.25s;
  position: fixed;
  bottom: 50px;
  right: 100px;

  &:hover{
    box-shadow: 0.1px 5px 5px rgba(0,0,0,0.25);
    width: 12rem;
    >div:last-child{
      display: initial;
   }
  }

  >div:last-child{
    display: none;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const PlusIcon = styled(Plus)`
  fill: var(--white);
  height: 50%;
`;