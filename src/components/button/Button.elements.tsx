import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonPrimaryContainer = styled.button`
    background: var(--first-color);
    color: #FFF;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: var(--bs-smooth);
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonWhiteContainer = styled.button`
    background: var(--container-color);
    color: var(--first-color);
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: var(--bs-smooth);
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
    display: flex;
    align-items: center;
    justify-content: center;
`

interface Props {
    colorButton: string,
}

export const ButtonLinkContainer = styled(Link)<Props>`
    background: ${ (props) => (props.colorButton === "white" ? "#FFF" : "var(--first-color)") };
    padding: 10px 30px;
    border-radius: 20px;
    cursor: pointer;
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
    color: ${ (props) => (props.colorButton === "white" ? "var(--first-color)" : "#FFF") };
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-shadow: var(--bs-smooth);
`

export const ButtonIconLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    `

export const ButtonIconRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`

export const ButtonPrimaryLoadingContainer = styled.button`
    background: var(--first-color);
    color: #FFF;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: var(--bs-smooth);
    width: 100%;
    height: 100%;
    cursor: wait;
`

export const ButtonWhiteLoadingContainer = styled.button`
    background: #FFF;
    color: var(--first-color);
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: var(--bs-smooth);
    width: 100%;
    height: 100%;
    cursor: wait;
`