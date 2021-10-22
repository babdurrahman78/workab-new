import React from 'react'
import { ProfileContainer, ProfileCard, ProfileTitle, ProfileInfoContainer, ProfileImage, ProfileInfo, ProfileRow } from './Profile.elements'
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
                        <ProfileRow>
                            <p className="title">Name</p>
                            <p className="desc">{profile.name}</p>
                        </ProfileRow>
                        <ProfileRow>
                            <p className="title">Email</p>
                            <p className="desc">{profile.email}</p>
                        </ProfileRow>
                        <ProfileRow>
                            <p className="title">Gender</p>
                            <p className="desc">{profile.gender}</p>
                        </ProfileRow>
                        <ProfileRow>
                            <p className="title">NIK</p>
                            <p className="desc">{profile.nik}</p>
                        </ProfileRow>
                    </ProfileInfo>
                </ProfileInfoContainer>
            </ProfileCard>
        </ProfileContainer>
    )
}
