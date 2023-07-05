import React from "react";
import styled from "@emotion/styled";
import Bgimg from "../../../public/images/tokenomicsImg.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Tabs from "../../components/Tabs/index";

const Wrapper = styled.div`
  /* width: 100%; */
  /* height: 100vh; */
  background-image: url(${Bgimg.src});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 769px) {
    background-size: cover;
  }
`;

const H3 = styled.h1`
  font-size: 70px;
  @media (max-width: 550px) {
    font-size: 70px !important;
  }
  @media (max-width: 450px) {
    font-size: 50px !important;
  }
`;
const Div = styled.div`
  backdrop-filter: blur(10px);

  background-color: #404040;
`;

const Para = styled.p`
  @media (max-width: 769px) {
    font-size: 14px;
  }
`;

const index = () => {
  return (
    <div
      id="tokenomics"
      className="py-5"
      style={{ backgroundColor: "black", color: "#ffffff" }}
    >
      <Container maxWidth="xl" className="py-5">
        <Wrapper className="py-5">
          <Grid container>
            <Grid item md={6}></Grid>
            <Grid item md={6}>
              {" "}
              <H3>Tokenomics</H3>
            </Grid>
          </Grid>

          <Grid container md={12} className="py-5">
            <Grid item md={6} className="py-3"></Grid>

            <Grid item xs={12} sm={12} md={5} className="py-3">
              <Para>
                Liquidity: 1 Eth <br />
                Slippage:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buy Tax: 7% <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sell Tax: 7% <br />
                {/* 3.5% liquidity <br />
                3.5% marketing */}
              </Para>

              <div className="py-5">
                <Div
                  className="pt-3 pl-3"
                  style={{
                    border: "1px solid #707070 ",
                    backgroundcolor: "#707070",
                    opacity: "0.7",
                  }}
                >
                  <Para>Total Supply: 1 Billion </Para>
                </Div>

                <Div
                  className="pt-3 pl-3 my-3"
                  style={{
                    border: "1px solid #707070 ",
                    backgroundcolor: "#c01e1e50",
                    opacity: "0.7",
                  }}
                >
                  <Para>Max buy: 10 Million (1%)</Para>
                </Div>

                <Div
                  className="pt-3 pl-3"
                  style={{
                    border: "1px solid #707070 ",
                    backgroundcolor: "#707070",
                    opacity: "0.7",
                    //   width: "500px"
                  }}
                >
                  <Para>Max wallet: 20 Million(2%)</Para>
                </Div>
              </div>
            </Grid>
          </Grid>
        </Wrapper>
      </Container>
    </div>
  );
};

export default index;
