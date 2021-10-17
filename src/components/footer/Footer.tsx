import React from 'react'
import Workab from '../../img/logo.png'
import { FooterContainer, FooterCopyright, FooterImg, FooterTitle } from './Footer.elements'
import { Props } from './Interface'

export const Footer = (props: Props) => {
    return (
        <>
            <FooterContainer typeFooter={ props.type }>
                <FooterImg src={ Workab }/>
                <FooterTitle>Workab</FooterTitle>
                <FooterCopyright>Copyright &copy; 2021-2022 Bridgestone. All rights reserved.</FooterCopyright>
            </FooterContainer>
        </>
    )
}
