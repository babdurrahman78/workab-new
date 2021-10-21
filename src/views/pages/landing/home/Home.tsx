import React from "react";
import Vector1 from "../../../../img/vector1.png";
import clock from "../../../../img/clock.png";
import visiting from "../../../../img/visiting.png";
import { ButtonLink } from "../../../../components/button/Button";
import {
  HomeButton,
  HomeContainer,
  HomeContentLeft,
  HomeContentRight,
  HomeImg,
  HomeSubtitle,
  HomeTitle,
  StyledRow,
  StyledFeatureContainer,
  StyledFeatureTitle,
  StyledFeatureDesc,
  StyledFeatureImageContainer,
  StyledRightImage,
  StyledLeftImage,
} from "./Home.elements";
import { FaArrowRight } from "react-icons/fa";

export const Home = () => {
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
              iconRight={<FaArrowRight />}
            />
          </HomeButton>
        </HomeContentLeft>
        <HomeContentRight>
          <HomeImg src={Vector1} />
        </HomeContentRight>
      </HomeContainer>
      <StyledRow>
        <StyledFeatureContainer>
          <StyledFeatureTitle>Fitur Attendance</StyledFeatureTitle>
          <StyledFeatureDesc>
            Workab mempunyai fitur untuk melakukan absensi via perangkat dan
            dapat melihat riwayat absensi via website dimanapun dan kapanpun
          </StyledFeatureDesc>
        </StyledFeatureContainer>
        <StyledFeatureImageContainer>
          <StyledRightImage src={clock} alt="clock" />
        </StyledFeatureImageContainer>
      </StyledRow>
      <StyledRow>
        <StyledFeatureImageContainer>
          <StyledLeftImage src={visiting} alt="visiting" />
        </StyledFeatureImageContainer>
        <StyledFeatureContainer>
          <StyledFeatureTitle>Fitur Visiting</StyledFeatureTitle>
          <StyledFeatureDesc>
            Workab mempunyai fitur untuk melakukan absensi via perangkat dan
            dapat melihat riwayat absensi via website dimanapun dan kapanpun
          </StyledFeatureDesc>
        </StyledFeatureContainer>
      </StyledRow>
    </>
  );
};
