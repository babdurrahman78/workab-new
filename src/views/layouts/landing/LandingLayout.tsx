import React from 'react'
import { Footer } from '../../../components/footer/Footer'
import { TopbarLanding } from '../../../components/topbar/Topbar'
import { LandingPage } from '../../pages/landing/LandingPage'
import { Props } from './Interface'

export const LandingLayout = (props: Props) => {
    return (
        <>
            <TopbarLanding />
            <LandingPage />
            <Footer type="primay"/>
        </>
    )
}
