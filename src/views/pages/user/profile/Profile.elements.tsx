import styled from 'styled-components'

export const ProfileContainer = styled.div`
    display: flex;
    padding: 0 100px 0 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1350px) {
        padding: 0 50px 0 50px;
    }

    @media (max-width: 1214px) {
        padding: 0 20px 0 20px;
    }

    @media (max-width: 1100px) {
        padding: 0 0 0 0;
    }
`

export const ProfileCard = styled.div`
    width: 100%;
    padding: 0 54px 54px 54px;
    background-color:#FFF9EC;;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    @media (max-width: 1100px) {
        padding: 0 10px 54px 10px;
    }
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

    @media (max-width: 950px) {
        margin: 0 auto 54px;
    }
`;

export const ProfileInfoContainer = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

export const ProfileImage = styled.img`
    border-radius: 10px;
    width: 220px;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ProfileRow = styled.div`
    display: flex;
    width: 400px;
    align-items: center;
    gap: 30px;

    .title {
        flex-basis: 150px;
        font-size: 25px;
        font-weight: 600;
        border-right: 1px solid #C2C2C2;
    }

    .desc {
        font-size: 20px;
        font-weight: 400;
    }

    @media (max-width: 1130px) {
        .title{
            flex-basis: 100px;
        }
    }

    @media (max-width: 950px) {
        .title{
            flex-basis: 150px;
        }
    }

    @media (max-width: 585px) {
        margin: auto;
        .title{
            flex-basis: 100px;
        }
    }

    @media (max-width: 550px) {
        width: 100%;
        margin-left: auto;
        .title{
            border: none;
        }
        gap: 10;
    }
`;

