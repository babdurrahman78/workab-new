import React from 'react'
import Loader from 'react-loader-spinner'
import { LoadingContainer, LoadingContent, LoadingImg, LoadingTitle } from './Loading.elements'

export const LoadingPage = () => {
    return (
        <>
            <LoadingContainer>
                <LoadingContent>
                    <LoadingImg src=""/>
                    <LoadingTitle>Please Wait</LoadingTitle>
                    <Loader
                        type="ThreeDots"
                        color="#577BA8"
                        width={ 150 }
                        height={ 150 }
                    />
                </LoadingContent>
            </LoadingContainer>
        </>
    )
}