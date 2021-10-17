import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 90vh;
`

export const HomeContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HomeContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeImg = styled.img`
    width: 300px;
`

export const HomeTitle = styled.span`
    font-size: var(--big-font-size);
    font-weight: var(--font-semi-bold);
    text-transform: uppercase;
    color: var(--title-color);
    margin-bottom: 20px;
    `

export const HomeSubtitle = styled.span`
    font-size: var(--h3-font-size);
    margin-bottom: 20px;
`

export const HomeButton = styled.span`
    width: 200px;
    height: 70px;
`