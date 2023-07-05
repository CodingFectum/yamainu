import React from "react";
import styled from "@emotion/styled";
import Bgimg from "../../../public/images/sec2.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-image: url(${Bgimg.src});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 769px) {
    background-size: cover;
  }
`;

const A = styled.a`
  color: white;
  font-family: poppins-bold;
  text-decoration: underline;
  font-weight: 900;
  font-size: 20px;
`;

const Para = styled.p`
  @media (max-width: 769px) {
    font-size: 14px;
  }
`;

const index = () => {
  return (
    <div style={{ backgroundColor: "black", color: "#ffffff" }} id="about">
      <Wrapper>
        <Container className="py-5">
          <h3 className="pt-5 mt-5" style={{ fontSize: "81px" }}>
            ABOUT
          </h3>

          <Grid container md={12} className="py-4">
            <Grid item md={6} className="py-3">
              <Para>Folow us on :</Para>
              <A
                href="https://twitter.com/Yama_inu1"
                target="_blank"
                style={{ color: "#ffffff" }}
              >
                Twitter
              </A>
              <br />
              <br />
              <A
                href="https://t.me/Yamainu"
                target="_blank"
                style={{ color: "#ffffff" }}
              >
                Telegram
              </A>
            </Grid>
            <Grid item md={6} className="py-3">
              <Para>
                Yama Inu, a.k.a. The Okami (wolf) is an apparition of a dog that
                may appear to travelers on mountain trails and may be either
                friendly or murderous to travelers. But for the most part, he
                was considered an honest and sensible being, for which he is
                still respected by many.
              </Para>
              <Para>
                Although they were said to go extinct in 1906, there have been
                many sightings of the species after that date, some with
                substantially more evidence, but none of it has been proven just
                yet.
              </Para>
              <Para>
                One of the most common folklores is that Yama Inu follows people
                who are walking in the dark of the night, waiting for its prey
                to get tired. Legend says that if a person trips out of fatigue
                or fear, they would have to face the wrath of Yama Inu! But, if
                they stay strong and show robustness, they would not be
                attacked.
              </Para>
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </div>
  );
};

export default index;
