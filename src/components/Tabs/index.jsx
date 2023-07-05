import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import hello from "../../../public/images/tap.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Para = styled.p``;

const Typo = styled.div``;
const Div = styled.div`
  max-width: 100%;
  width: 70%;

  @media (max-width: 899px) {
    width: 100%;
  }
`;

const Test = styled(Tabs)`
  place-content: center !important;
  justify-content: center !important;
  backdrop-filter: blur(4px);
  background-color: #404040b3;
  margin-bottom: 20px !important;
  padding: 0px !important;
`;

const CustomTab = styled(Tab)`
  @media (max-width: 500px) {
    font-size: 14px !important;
  }
  /* @media (max-width: 500px) {
    padding: 35px !important;
  }
  @media (max-width: 426px) {
    padding: 30px !important;
  }
  @media (max-width: 400px) {
    padding: 18px !important;
  } */
`;

const CustomTabPanel = styled(TabPanel)`
  backdrop-filter: blur(40px);
  background-color: #404040;
  @media (max-width: 500px) {
    padding: 0px !important;
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typo>{children}</Typo>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "center",
        }}
      >
        <Test
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className=""
          TabIndicatorProps={{
            style: {
              backgroundColor: "transparent",
              backgroundImage: `url(${hello.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              // fontSize:10p
              height: "50px",
              zIndex: -1,
              // width: "310px",
            },
          }}
        >
          <CustomTab
            label="Phase 01"
            {...a11yProps(0)}
            className="px-4"
            style={{
              color: "#ffffff",
            }}
          />
          <CustomTab
            label="Phase 02"
            {...a11yProps(1)}
            className="px-4"
            style={{ color: "#ffffff" }}
          />
          <CustomTab
            label="Phase 03"
            {...a11yProps(2)}
            className="px-4"
            style={{ color: "#ffffff" }}
          />
          <CustomTab
            label="Phase 04"
            {...a11yProps(3)}
            className="px-4"
            style={{ color: "#ffffff" }}
          />
        </Test>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        className=""
        style={{
          border: "1px solid #707070 ",
          backgroundcolor: "#707070",
          opacity: "0.7",
        }}
      >
        <Para>
          ● Yama Inu launch<br></br>● Website completion<br></br>● Telegram and
          Twitter completion<br></br>● Marketing campaign<br></br>
        </Para>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
        className=""
        style={{
          border: "1px solid #707070 ",
          backgroundcolor: "#707070",
          opacity: "0.7",
        }}
      >
        <Para>
          ● CoinGecko and CMC Listing<br></br>● Whitepaper<br></br>●
          Diversifying holders<br></br>
        </Para>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}
        className=""
        style={{
          border: "1px solid #707070 ",
          backgroundcolor: "#707070",
          opacity: "0.7",
        }}
      >
        <Para>
          ● Listing on other platforms<br></br>● Big plans for maximizing
          holder’s count<br></br>● Boost reach and engagement<br></br>
        </Para>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={3}
        className=""
        style={{
          border: "1px solid #707070 ",
          backgroundcolor: "#707070",
          opacity: "0.7",
        }}
      >
        <Para>
          ● CEx listing plans<br></br>● Reaching out to different communities
          <br></br>● Strengthening Telegram community<br></br>
        </Para>
      </CustomTabPanel>
    </Div>
  );
}
