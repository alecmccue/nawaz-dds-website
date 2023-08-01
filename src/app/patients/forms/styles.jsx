import styled from "@emotion/styled";

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 25rem;
    gap: 1rem;
`

export const DownloadButtonWrapper = styled.div`
    display: flex;
    gap: 2rem;
    border-radius: 0.5rem;
    background-color: #CAF0C1;
    padding: 0.5rem 1rem;
    width: fit-content;

    &:hover {
        background-color: #5cdb5c;
    }
`

export const FormFooter = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 0.5rem;
`

export const FormPreview = styled.img`
    width: auto;
    height: 15rem;
`

export const FormWrapper = styled.div`
    display: flex;
    width: fit-content;
    background-color: #EBF2F3;
    gap: 2rem;
    height: fit-content;
    border-radius: 2rem;
    align-items: center;
    padding: 2rem 2.5rem;
`

export const FormsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    gap: 5rem;
`