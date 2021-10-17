import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import styled from 'styled-components'

export const NavTopItemDropdownMenuListIcon = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`

export const NavTopItemDropdownMenuList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    text-align: left;
    border-radius: 20px;
    padding: 7px 15px;
    color: var(--first-color);
    font-weight: var(--font-semi-bold);
    cursor: pointer;

    :hover {
        background: var(--first-color);
        color: #FFF;
    }
`

export const NavTopItemDropdownMenu = styled.ul`
    position: fixed;
    top: 65px;
    right: 10px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-radius: 20px;
    background: var(--container-color);
    box-shadow: var(--bs-smooth);
    transition: .3s ease-in-out;

    &.active {
        display: flex;
    }
`

export const NavTopItemDropdown = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const NavTopItemImg = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 5px;
`

export const NavTopItemName = styled.span`
    margin-right: 10px;
    font-size: var(--normal-font-size);
`

export const NavTopItems = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavTopToggle = styled.div`
    position: relative;
    top: 0;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid var(--title-color);
    font-size: 1.5rem;

    :hover {
        border: 1px solid transparent;
        background: var(--first-color);
        box-shadow: var(--bs-smooth);
        color: #FFF;
    }
`

export const NavTop = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: var(--container-color);
    box-shadow: var(--bs-smooth);
`

export const NavTopLandingButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const NavTopLandingLink = styled(Scroll)`
    cursor: pointer;
    padding: 7px 14px;
    border-radius: 20px;
    color: #FFF;
    font-size: var(--h3-font-size);
    font-weight: var(--font-normal);
    transition: .3s ease;
    
    :hover, &.active {
        color: var(--first-color);
        background: #FFF;
        font-weight: var(--font-semi-bold);
    }
`

export const NavTopLandingItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const NavTopLandingList = styled.div`
    display: flex;
    align-items: center;
`

export const NavTopLandingLogoImg = styled.img`
    width: 70px;
`

export const NavTopLandingLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavTopLandingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const NavTopLanding = styled.div`
    display: flex;
    align-items: center;
    padding: 0 100px;
    background: var(--first-color);
    box-shadow: var(--bs-smooth);
    height: 80px;
`