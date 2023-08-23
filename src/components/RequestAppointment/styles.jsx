import styled from "@emotion/styled";

export const ContactButton = styled.div`
  align-items: center;
  background-color: #00acb1;
  border-radius: 0.2rem;
  border: 2px solid #00acb1;
  color: #fefefe;
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  font-weight: 500;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  width: fit-content;

  &:hover {
    background-color: #01868d;
    border: 2px solid #01868d;
  }

  @media (max-width: 1024px) {
    margin-top: 1rem;
  }
`