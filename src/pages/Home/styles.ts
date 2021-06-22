import styled, {css} from "styled-components";

interface TitleProps {
  color?: string;
  uppercase?: boolean;
  size?: "small" | "medium" | "large" | "larger" | "x-large" | "xx-large";
  spaced?:boolean;
}

interface SectionProps {
  centered?: boolean;
}

const StyledScrollbar = css`
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

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-top: 3rem;
  color: var(--white);

  width: min(1560px, 100%);
  margin: 0 auto;

  @media(max-width: 1028px){
    padding: 0 0 10px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  >.panels{
    max-height: 80%;
    height: 80%;
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--white);
    color: var(--black);
    min-height: 300px;

    @media(max-width: 1028px){
      width: 90%;
    }
  }

  @media(max-width: 1028px){
    flex-direction: column;
    max-height: 100%;
  }
`;

export const DebitList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const DebitDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 3;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1<TitleProps>`
  color: ${ props => props.color || `var(--white)`};
  text-transform: ${ props => props.uppercase ? "uppercase" : "none" };
  font-size: ${ props => props.size || "medium"};
  text-align: center;
  ${props => props.spaced && "margin-top: 1rem;"}
`;

export const LineSpacer = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Section = styled.div<SectionProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${ props => props.centered && 'justify-content:center;' }
  overflow-y: auto;
  ${StyledScrollbar}
`;

export const Application = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;