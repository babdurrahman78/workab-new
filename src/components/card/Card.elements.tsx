import styled from 'styled-components'

export const CardContainer = styled.div`
    background: var(--container-color);
    box-shadow: var(--bs-smooth);
    padding: 20px;
    border-radius: 20px;
`

export const CardLoadingContainer = styled.div`
    background: var(--container-color);
    box-shadow: var(--bs-smooth);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
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

export const CardInfoContainer = styled.div`
    background: var(--container-color);
    box-shadow: var(--bs-smooth);
    padding: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`

export const CardInfoTitle = styled.span`
    color: var(--first-color);
    font-size: var(--h3-font-size);
    font-weight: var(--font-semi-bold);
`

export const CardInfoSubtitle = styled.span`
    color: var(--tex-light-color);
    font-size: var(--h3-font-size);
`

export const CardInfoImg = styled.img`
    width: 100px;
    height: 100px;
`