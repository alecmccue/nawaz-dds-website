import styled from "@emotion/styled";

export const ViewAllReviewsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 1.5rem;

  @media (max-width: 1024px) {
    padding: 0 1rem;
    margin-top: 2rem;
  }
`

export const ViewAllButtonWrapper = styled.div`
  background-color: #00acb1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;

  &:hover {
    background-color: #01868d;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`