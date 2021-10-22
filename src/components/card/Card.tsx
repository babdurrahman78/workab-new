import React from 'react'
import Loader from 'react-loader-spinner'
import { CardButtonContainer, CardContainer, CardHeaderContainer, CardInfoContainer, CardInfoImg, CardInfoItem, CardInfoSubtitle, CardInfoTitle, CardLoadingContainer, CardTitle } from './Card.elements'
import { Props } from './Interface'

export const Card = (props: Props) => {
    return (
        <>
            <CardContainer>
                { props.children }
            </CardContainer>
        </>
    )
}

export const CardHeader = (props: Props) => {
    return (
        <>
            <CardHeaderContainer>
                <CardTitle> { props.title } </CardTitle>

                <CardButtonContainer>
                    { props.children }
                </CardButtonContainer>
            </CardHeaderContainer>
        </>
    )
}

export const CardInfo = (props: Props) => {
    return (
        <>
            <CardInfoContainer>
                <CardInfoItem>
                    <CardInfoTitle>{ props.title }</CardInfoTitle>
                    <CardInfoSubtitle>{ props.subtitle }</CardInfoSubtitle>
                </CardInfoItem>

                <CardInfoImg src={ props.image }/>
            </CardInfoContainer>
        </>
    )
}

export const CardLoading = (props: Props) => {
    return (
        <>
            <CardLoadingContainer>
                <Loader
                    type="ThreeDots"
                    color="#577BA8"
                    width={ 50 }
                    height={ 50 }
                />
            </CardLoadingContainer>
        </>
    )
}
