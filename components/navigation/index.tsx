import Grid from "@mui/material/Unstable_Grid2";

import DropdownMenu from "./components";
import styles from "./navigation.module.css";
import { pagesItems } from "./menuItems";

import { SmallR } from "../logos";

const Navigation = () => {
  return (
    <Grid
      container
      xs={11}
      md={12}
      component="nav"
      className={styles.navigationContainer}
    >
      <Grid xs={8} sm={9} md={3} lg={2} className={styles.logoContaine}>
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
      <Grid md={6} lg={4} className={styles.mainNavContainer}>
        <Grid container className={styles.linksContainer}>
          {pagesItems.slice(1).map(({ id, text, to, title }) => (
            <Grid
              key={id}
              md={12 / pagesItems.length}
              className={styles.mainNavLink}
            >
              <a href={to} title={title}>
                {text}
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid xs={2} sm={1} className={styles.menu}>
        <DropdownMenu />
      </Grid>
    </Grid>
  );
};

export default Navigation;
