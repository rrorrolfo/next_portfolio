import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import RLogo from "@/components/logos";

import styles from "./page.module.css";

const Home = () => {
  return (
    <Grid container className={styles.description}>
      <Grid xs={10} md={7}>
        <Typography variant="h1" gutterBottom>
          Hi!, <br />
          I´m Rodolfo,
          <br /> React developer
        </Typography>
        <Typography variant="h2" gutterBottom>
          React.js / Next.js / Material UI / Node.js
        </Typography>
      </Grid>
      <Grid xs={10} md={7}>
        <a href="/work" title="Check my work.">
          MY WORK
        </a>
        <a href="/about" title="Learn about me.">
          ABOUT ME
        </a>
      </Grid>
      <Box className={styles.logoContainer}>
        <RLogo />
      </Box>
    </Grid>
  );
};

export default Home;
