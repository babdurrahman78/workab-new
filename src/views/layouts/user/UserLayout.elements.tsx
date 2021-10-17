import styled from 'styled-components'

export const ULayoutMainContent = styled.div`
    padding: 20px;
`

export const ULayoutContent = styled.div`
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

export const ULayoutContainer = styled.div`
    position: relative;
    width: 100%;
`

export const ULayout = styled.div`
    min-height: 100vh;
    overflow-x: hidden;
`