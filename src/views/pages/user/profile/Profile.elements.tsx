import styled from 'styled-components'

export const ProfileContainer = styled.div`
    display: flex;
    padding: 0 100px 0 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProfileCard = styled.div`
    width: 100%;
    padding: 0 54px 0 54px;
    background-color:#FFF9EC;;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
`

export const ProfileTitle = styled.div`
    width: 244px;
    margin-bottom: 54px;
    background-color: #88A5CA;
    border-radius: 0px 0px 16px 16px;
    font-size: 25px;
    line-height: 51px;
    text-align: center;
    color: var(--profile-title-color);
    font-weight: 600;
`;

export const ProfileInfoContainer = styled.div`
    display: flex;
    justify-content: stretch;
    background-color: red;
`;

export const ProfileImage = styled.img`
    border-radius: 10px;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

