import styled from "styled-components";

interface TitleProps {
  color?: string;
  isUppercase?: boolean;
  size?: "small" | "medium" | "large" | "larger" | "x-large" | "xx-large";
  isSpaced?:boolean;
}

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: var(--white);

  width: min(1560px, 100%);
  margin: 0 auto;
  
  >div:last-child {
    display: flex;
    flex: 1;
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  
  >.panels{
    max-height: 80%;
    height: 80%;
    margin: 1rem;
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--white);
    color: var(--black);
    min-height: 300px;

    @media(max-width: 1028px){
      width: 100%;
    }
  }

  @media(max-width: 1028px){
    flex-direction: column;
    max-height: 100%;
  }
`;

export const DebitList = styled.div`
  overflow-y: auto;
  flex-grow: 1;

  ::-webkit-scrollbar-button{
        display: none;
  }
  ::-webkit-scrollbar {
      background-color: rgba(0, 0, 0, 0.5);
      width: 6px;
      border-radius: 5px;
      padding-right: 13px;
  }
  ::-webkit-scrollbar-thumb{
      background-color: var(--white-50);
      border-radius: 5px;
  }
`;

export const DebitDetails = styled.div`
  flex-grow: 3;
  >div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-around;
    height: 100%;

    >span {
      display: flex;
      flex-direction: column;
      gap: 10px;
      div {
        display: flex;
        gap: 10px;  
      }
    }

    >span:last-child {
      justify-content: center;
      flex-direction: row;
    }
  }
`;

export const Title = styled.h1<TitleProps>`
  color: ${ props => props.color || `var(--white)`};
  text-transform: ${ props => props.isUppercase ? "uppercase" : "none" };
  font-size: ${ props => props.size || "medium"};
  text-align: center;
  ${props => props.isSpaced && "margin-top: 1rem;"}
`;

export const LineSpacer = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;