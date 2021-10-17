import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100vh;
    padding: 100px;
`

export const LoginContentLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginContentRight = styled.div`
    background: var(--container-color);
    border-top-left-radius: 80px;
    border-bottom-right-radius: 80px;
    box-shadow: rgba(87, 123, 168, 0.4) 5px 5px, rgba(87, 123, 168, 0.3) 10px 10px, rgba(87, 123, 168, 0.2) 15px 15px, rgba(87, 123, 168, 0.1) 20px 20px, rgba(87, 123, 168, 0.05) 25px 25px;
    height: 500px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px
`

export const LoginImg = styled.img`
    width: 400px;
    height: 500px;
    border-top-right-radius: 80px;
    border-bottom-left-radius: 80px;
    box-shadow: rgba(87, 123, 168, 0.4) -5px 5px, rgba(87, 123, 168, 0.3) -10px 10px, rgba(87, 123, 168, 0.2) -15px 15px, rgba(87, 123, 168, 0.1) -20px 20px, rgba(87, 123, 168, 0.05) -25px 25px;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const LoginTitle = styled.span`
    font-size: var(--h1-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--first-color);
    margin-bottom: 20px;
`
export const LoginButton = styled.div`
    margin-top: 50px;
    height: 50px;
`

export const LoginBack = styled.div`
    margin-bottom: 20px;
    width: 120px;
`