import styled from "@emotion/styled";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  gap: 1rem;
`;

export const DownloadButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  border-radius: 0.5rem;
  background-color: #87e4db;
  padding: 0.5rem 1rem;
  width: fit-content;

  &:hover {
    background-color: #015d67;
    color: white;
  }
`;

export const FormBanner = styled.div`
  background: url(/patients_banner.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  height: 30rem;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    background: url(/insurance-banner-mobile.jpg);
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 0.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormPreview = styled.img`
  width: auto;
  height: 18rem;
`;

export const FormText = styled.div`
  font-size: 1.4rem;
  padding: 2rem 0;
  max-width: 85rem;
  line-height: 2.5rem;
`

export const FormWrapper = styled.div`
  align-items: center;
  background-color: #ebf2f3;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  display: flex;
  gap: 2rem;
  height: fit-content;
  padding: 2rem 2.5rem;
  width: fit-content;

  @media (max-width: 1024px) {
    padding: 2rem;
    flex-direction: column;
  }
`;

export const FormsWrapper = styled.div`
  background-color: #fefefe;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1024px) {
    padding: 1rem 1rem 3rem 1rem;
  }
`;

export const IntroWrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60rem;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;