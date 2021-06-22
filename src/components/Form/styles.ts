import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: space-between;
  @media(min-width: 1360px){
    gap: 30px 10px;
  }
  @media(max-width: 1028px){
    height: 100%;
    gap: 20px 10px;
    padding: 10px 5px;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 0 10px;
`;