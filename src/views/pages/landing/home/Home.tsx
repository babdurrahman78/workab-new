import React from 'react'
import Vector1 from '../../../../img/vector1.png'
import { ButtonLink } from '../../../../components/button/Button'
import { HomeButton, HomeContainer, HomeContentLeft, HomeContentRight, HomeImg, HomeSubtitle, HomeTitle } from './Home.elements'
import { Props } from './Interface'
import { FaArrowRight } from 'react-icons/fa'

export const Home = (props: Props) => {
    return (
        <>
            <HomeContainer>
                <HomeContentLeft>
                    <HomeTitle>Selamat Datang di Workab</HomeTitle>
                    <HomeSubtitle>Absen mudah dan cepat secara online</HomeSubtitle>
                    <HomeButton>
                        <ButtonLink
                            title="Selengkapnya"
                            url="/anon"
                            type="primary"
                            iconRight={<FaArrowRight/>}
                        />
                    </HomeButton>
                </HomeContentLeft>

                <HomeContentRight>
                    <HomeImg src={ Vector1 }/>
                </HomeContentRight>
            </HomeContainer>
        </>
    )
}
