import styled from 'styled-components'

export const ALayoutMainContent = styled.div`
    padding: 20px;
`

export const ALayoutContent = styled.div`
    position: absolute;
    width: calc(100% - 300px);
    left: 300px;
    min-height: 100vh;
    transition: .5s;

    &.active {
        width: calc(100% - 90px);
        left: 90px;
    }
`

export const ALayoutContainer = styled.div`
    position: relative;
    width: 100%;
`

export const ALayout = styled.div`
    min-height: 100vh;
    overflow-x: hidden;
`