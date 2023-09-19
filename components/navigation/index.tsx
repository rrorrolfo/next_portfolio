import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import DropdownMenu from "./components";
import styles from "./navigation.module.css";

import { SmallR } from "../logos";

const Navigation = () => {
  return (
    <Grid
      container
      xs={11}
      component="nav"
      className={styles.navigationContainer}
    >
      <Grid xs={8} sm={9} className={styles.logoContaine}>
        <a
          href="/"
          title="Home"
          style={{
            display: "block",
          }}
        >
          <SmallR />
        </a>
      </Grid>
      {/* <Grid md={6} lg={6} className={styles.mainNavContainer}>
        <Grid container>
          <Grid>
            <a href="/work" title="Work" className="mainNavLink">
              work
            </a>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid xs={2} sm={1} className={styles.menu}>
        <DropdownMenu />
      </Grid>
    </Grid>
  );
};

export default Navigation;
