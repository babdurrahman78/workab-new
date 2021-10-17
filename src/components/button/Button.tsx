import React from 'react'
import { ButtonIconLeft, ButtonIconRight, ButtonLinkContainer, ButtonPrimaryContainer, ButtonPrimaryLoadingContainer, ButtonWhiteContainer, ButtonWhiteLoadingContainer } from './Button.elements'
import { Props } from './Interface'
import Loader from 'react-loader-spinner'

export const ButtonPrimary = (props: Props) => {
    return (
        <>
            <ButtonPrimaryContainer onClick={ props.onClicked }>
                { 
                    props.iconLeft ? 
                        (
                            <ButtonIconLeft>
                                { props.iconLeft }
                            </ButtonIconLeft>
                        ) 
                    : 
                        '' 
                }

                { props.title }

                { 
                    props.iconRight ? 
                        (
                            <ButtonIconRight>
                                { props.iconRight }
                            </ButtonIconRight>
                        ) 
                    : 
                        ''
                }
            </ButtonPrimaryContainer>
        </>
    )
}

export const ButtonWhite = (props: Props) => {
    return (
        <>
            <ButtonWhiteContainer onClick={ props.onClicked }>
                { 
                    props.iconLeft ? 
                        (
                            <ButtonIconLeft>
                                { props.iconLeft }
                            </ButtonIconLeft>
                        ) 
                    : 
                        '' 
                }

                { props.title }

                { 
                    props.iconRight ? 
                        (
                            <ButtonIconRight>
                                { props.iconRight }
                            </ButtonIconRight>
                        ) 
                    : 
                        ''
                }
            </ButtonWhiteContainer>
        </>
    )
}

export const ButtonLink = (props: Props) => {
    return (
        <>
            <ButtonLinkContainer to={ props.url } colorButton={ props.type }>
                { 
                    props.iconLeft ? 
                        (
                            <ButtonIconLeft>
                                { props.iconLeft }
                            </ButtonIconLeft>
                        ) 
                    : 
                        '' 
                }

                { props.title }
                
                { 
                    props.iconRight ? 
                        (
                            <ButtonIconRight>
                                { props.iconRight }
                            </ButtonIconRight>
                        ) 
                    : 
                        ''
                }
            </ButtonLinkContainer>            
        </>
    )
}

export const ButtonLoading = (props: Props) => {
    return (
        <>
            {
                props.type === "primary" ?
                    <ButtonPrimaryLoadingContainer>
                        <Loader
                            type="TailSpin"
                            color="#FFF"
                            width={ props.width }
                            height={ props.height }
                        />
                    </ButtonPrimaryLoadingContainer>
                :
                    <ButtonWhiteLoadingContainer>
                        <Loader
                            type="TailSpin"
                            color="#577BA8"
                            width={ props.width }
                            height={ props.height }
                        />
                    </ButtonWhiteLoadingContainer>          
            }
        </>
    )
}