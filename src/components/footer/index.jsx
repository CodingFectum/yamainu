import { Grid } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <div style={{ color: "white" }}>
      <Grid
        container
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          className="p-3"
          style={{ fontFamily: "poppins-light" }}
        >
          © 2022 OKAMI
        </Grid>
      </Grid>
    </div>
  );
};

export default index;
