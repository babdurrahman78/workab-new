import React from 'react'
import { ProfileContainer, ProfileCard, ProfileTitle, ProfileInfoContainer, ProfileImage, ProfileInfo } from './Profile.elements'
import { ProfileState } from './Interface'
import { useLocation } from 'react-router'

export const Profile = () => {
    const profile = useLocation<ProfileState>().state

    return (
        <ProfileContainer>
            <ProfileCard>
                <ProfileTitle>
                    Biodata
                </ProfileTitle>
                <ProfileInfoContainer>
                    <ProfileImage src={profile.avatar} />
                    <ProfileInfo>
                        <p>{profile?.name}</p>
                        <p>tek</p>
                    </ProfileInfo>
                </ProfileInfoContainer>
            </ProfileCard>
        </ProfileContainer>
    )
}
