import styled from "@emotion/styled";

export const DigitalXrayImage = styled.img`
  height: auto;
  width: 100%;
`;

export const Divider = styled.div`
  background: #00acb1;
  height: 0.3rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  width: 10rem;
`;

export const ImageColumn = styled.div`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  flex: 1;
`;

export const IntroductionWrapepr = styled.div`
  background-color: #87e4db;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  max-width: 80rem;
  padding: 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }
`;

export const ProductWrapperImageLeft = styled.div`
  border-radius: 1rem;
  box-shadow: rgba(135, 228, 219, 0.5) 0px 10px 10px -10px;
  display: flex;
  gap: 5rem;
  max-width: 80rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

export const ProductWrapperImageRight = styled.div`
  border-radius: 1rem;
  box-shadow: rgba(135, 228, 219, 0.5) 0px 10px 10px -10px;
  display: flex;
  gap: 5rem;
  max-width: 80rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 2rem;
    padding: 1rem;
    margin-top: 1rem;
  }
`;

export const ProductsWrapper = styled.div`
  align-items: center;
  background-color: #fafcfc;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;