import React from 'react'
import { CardButtonContainer, CardContainer, CardHeaderContainer, CardTitle } from './Card.elements'
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