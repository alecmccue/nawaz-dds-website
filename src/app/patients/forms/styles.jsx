import styled from "@emotion/styled";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  gap: 1rem;
`;

export const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  text-align: center;
  border-radius: 1rem;
  background-color:#87e4db;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: center;
`;

export const DownloadButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;
  background-color: #87e4db;
  padding: 0.5rem 1rem;
  width: fit-content;

  &:hover {
    background-color: #015D67;
    color:white;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 0.5rem;
`;

export const FormPreview = styled.img`
  width: auto;
  height: 15rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: fit-content;
  background-color: #ebf2f3;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  gap: 2rem;
  height: fit-content;
  border-radius: 2rem;
  align-items: center;
  padding: 2rem 2.5rem;
`;

export const FormsWrapper = styled.div`
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  gap: 3rem;
`;
