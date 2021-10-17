import React from 'react'
import { Home } from './home/Home'
import { Props } from './Interface'
import { LandingContainer } from './LandingPage.elements'

export const LandingPage = (props: Props) => {
    return (
        <>
            <LandingContainer>
                <Home />
            </LandingContainer>
        </>
    )
}
