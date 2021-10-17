import styled from 'styled-components'

interface Props {
    typeFooter: string
}

export const FooterCopyright = styled.div`
    font-weight: var(--font-normal);
`

export const FooterTitle = styled.div`
    font-weight: var(--font-semi-bold);
    margin-right: 10px;
`

export const FooterImg = styled.img`
    width: 50px;
    margin-right: 10px;
`

export const FooterContainer = styled.div<Props>`
    background: ${ (props) => (props.typeFooter === "white" ? "transparent" : "var(--first-color)") };
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    color: ${ (props) => (props.typeFooter === "white" ? "var(--first-color)" : "#FFF") };
`