import styled from 'styled-components'

export const CardContainer = styled.div`
    background: var(--container-color);
    box-shadow: var(--bs-smooth);
    padding: 20px;
    border-radius: 20px;
`

export const CardHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardTitle = styled.span`
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--first-color);
`

export const CardButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`