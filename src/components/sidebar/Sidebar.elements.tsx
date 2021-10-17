import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavSideTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
    font-size: var(--h3-font-size);
`

export const Logo = styled.img`
    width: 100px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;

    &.active {
        width: 50px;
    }
`

export const NavSideIcon = styled.div`
    font-size: 1.75rem;
`

export const NavSideIcons = styled.span`
    position: relative;
    display: block;
    min-width: 70px;
    height: 60px;
    line-height: 70px;
    text-align: center;
`

export const NavSideLogo = styled(Link)`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavSideLink = styled(NavLink)`
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--body-color);
`

export const NavSideLinks = styled.li`
    margin-left: 15px;
    
    :nth-child(1) {
        margin-left: 0px;
        margin-bottom: 40px;
        pointer-events: none;
    }
`

export const NavSideItem = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    ${NavSideLinks}, ${NavSideLink} {
        position: relative;
        width: 100%;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }

    ${NavSideLinks}:hover, ${NavSideLink}.active {
        background: var(--body-color);
    }

    ${NavSideLinks}:hover ${NavSideLink}, ${NavSideLink}.active {
        color: var(--first-color);
    }

`

export const NavSide = styled.div`
    position: fixed;
    width: 300px;
    height: 100%;
    background: var(--first-color);
    transition: .5s;
    overflow: hidden;

    &.active {
        width: 90px;
    }

    ${NavSideItem} ${NavSideLinks}:hover ${NavSideLink}::before, ${NavSideItem} ${NavSideLinks} ${NavSideLink}.active::before {
        content: '';
        position: absolute;
        right: 15px;
        top: -50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border-radius: 50%;
        box-shadow: 35px 35px 0 10px var(--body-color);
    }

    ${NavSideItem} ${NavSideLinks}:hover ${NavSideLink}::after, ${NavSideItem} ${NavSideLinks} ${NavSideLink}.active::after {
        content: '';
        position: absolute;
        right: 15px;
        bottom: -50px;
        width: 50px;
        height: 50px;
        background: transparent;
        border-radius: 50%;
        box-shadow: 35px -35px 0 10px var(--body-color);
    }
`