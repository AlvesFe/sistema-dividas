import styled from "styled-components";

interface TitleProps {
  color?: string;
  isUppercase?: boolean;
  size?: "small" | "medium" | "large" | "larger" | "x-large" | "xx-large";
}

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  color: var(--white);
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: min(1560px, 100%);
  margin: 0 auto;
  margin-top: 1rem;
  >.panels{
    margin: 1rem;
    height: 100%;
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--white);
    color: var(--black);
  }
`;

export const DebitList = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const DebitDetails = styled.div`
  flex-grow: 3;
`;

export const Title = styled.h1<TitleProps>`
  color: ${ props => props.color || `var(--white)`};
  text-transform: ${ props => props.isUppercase ? "uppercase" : "none" };
  font-size: ${ props => props.size || "medium"};
  text-align: center;
`;

export const LineSpacer = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;