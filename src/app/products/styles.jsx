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

export const IntroductionWrapper = styled.div`
  height: 30rem;
  padding-top: 5rem;
  background: url("/office_ultrawide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 900px) {
    background-size: cover;
    background: url("/office_wide.jpg");
  }
  @media (max-width: 600px) {
    background-size: cover !important;
    background: url("/office_mobile.jpg");
    height: 40rem;
    padding-top: 2rem;
  }
`;
export const IntroductionTextWrapper = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  color: #fefefe;
  display: flex;
  flex-direction: column;
`;

export const ProductWrapperImageLeft = styled.div`
  background-color: #fafcfc;
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
  background-color: #fafcfc;
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
