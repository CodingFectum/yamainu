import React from "react";
import Bgimg from "../../public/images/bg.png";
import Bgimg2 from "../../public/images/mobileBg.png";
import NavBar from "../../src/components/Navbar";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";

import buttonImg from "../../public/images/button.png";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-image: url("/images/bg.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  @media (max-width: 768px) {
    background-image: url("/images/mobileBg.png");
    background-size: cover;

    /* background-position-y: center; */
    /* margin-top: 50px; */
  }
  /* @media (width: 768px) {
    padding-top: 1050px;
    background-size: contain;
  } */
`;

const CustomGrid = styled(Grid)`
  padding-top: 600px;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 550px;
  }
  @media (width: 768px) {
    padding-top: 1050px;
  }
  /* @media (max-width: 768px) {
    padding-top: 550px;
  } */
`;

const Para = styled.p`
  @media (max-width: 769px) {
    font-size: 14px;
  }
`;

const CustomImage = styled(Image)`
  @media (max-width: 769px) {
    min-width: 60% !important;
    min-height: 60% !important;
  }
`;

const index = () => {
  return (
    <div>
      <Wrapper>
        <NavBar />
        <Grid container md={12}>
          <Grid item md={3}></Grid>
          <CustomGrid item md={6}>
            <Para style={{ color: "white" }}>
              In remembrance of one of the most renowned Japanese mythical
              creatures ‘Yama Inu’, we have planned to create a token that
              admires all the folklore and mythology enthusiasts globally!
            </Para>
            <CustomImage src={buttonImg} alt="" style={{ cursor: "pointer" }} />
          </CustomGrid>
        </Grid>
      </Wrapper>
    </div>
  );
};

export default index;
