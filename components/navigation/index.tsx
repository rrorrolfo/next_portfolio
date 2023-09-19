import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import DropdownMenu from "./DropdownMenu";
import styles from "./navigation.module.css";

import { SmallR } from "../logos";

const Navigation = () => {
  return (
    <Grid container component="nav" className={styles.navigationContainer}>
      <Grid xs={8} sm={7} md={3} lg={3} className={styles.logoContaine}>
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
      <Grid md={6} lg={6} className={styles.mainNavContainer}>
        <Grid container>
          {/* The size of the columns need to be adjusted depending of the amount of links */}
          <Grid>
            <a href="/work" title="Work" className="mainNavLink">
              work
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={2} sm={1} className={styles.menu}>
        <DropdownMenu />
      </Grid>
    </Grid>
  );
};

export default Navigation;
