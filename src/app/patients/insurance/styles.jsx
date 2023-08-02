import styled from "@emotion/styled";

export const CareCreditButtonWrapper = styled.div`
  background-color: #32cd32;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  align-items: center;

  &:hover {
    background-color: #90ee90;
  }
`;

export const CareCreditWrapper = styled.div`
  align-items: center;
  background-color: #caf0c1;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 20rem;
  justify-content: center;
  padding: 1rem;
  width: 25rem;
`;

export const InsuranceWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  width: 100%;
`;

export const InsuranceItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
`;
