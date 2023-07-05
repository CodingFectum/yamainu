import React from "react";
import styled from "@emotion/styled";
import Bgimg from "../../../public/images/bgS3.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Tabs from "../../components/Tabs/index";

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${Bgimg.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  min-height: 80vh;
  @media (max-width: 769px) {
    background-size: cover;
    min-height: 90vh;
  }
`;

const CustomGrid = styled(Grid)`
  display: flex;
  place-content: center;
`;
const H3 = styled.h3`
  @media (max-width: 550px) {
    font-size: 70px !important;
  }
  @media (max-width: 450px) {
    font-size: 60px !important;
  }
`;

const index = () => {
  return (
    <div
      id="roadmap"
      className="py-5"
      style={{ backgroundColor: "black", color: "#ffffff" }}
    >
      <Container>
        <Wrapper className="pt-5">
          <H3 className="pt-5 mt-5 text-center" style={{ fontSize: "70px" }}>
            ROADMAP
          </H3>
          <Grid container>
            <CustomGrid className="py-5" xs={12} style={{ textAlign: "left" }}>
              <Tabs />
            </CustomGrid>
          </Grid>
        </Wrapper>
      </Container>
    </div>
  );
};

export default index;
