import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import profilePic from "./RR.jpg";
import styles from "./about.module.css";

const About = () => {
  return (
    <Grid container className={styles.pageContainer}>
      <Grid>
        <h1 className="title">Hey there</h1>
      </Grid>
      <Grid container xs={11} className={styles.contentContainer}>
        <Grid md={6} className={styles.profilePhotoContainer}>
          <Image
            className={styles.profilePhoto}
            src={profilePic}
            alt="Rodolfo del Rio - React Developer"
            title="Rodolfo del Rio - React Developer"
          />
        </Grid>
        <Grid md={6}>
          <Typography
            paragraph
            className={styles.description}
            style={{
              fontSize: "1.5rem",
              fontWeight: 300,
              lineHeight: 1.4,
            }}
          >
            I am a front-end developer with five years of experience building
            web apps and websites from the ground up.
          </Typography>
          <Typography
            paragraph
            className={styles.description}
            style={{
              fontSize: "1.5rem",
              fontWeight: 300,
              lineHeight: 1.4,
            }}
          >
            I specialize working with technologies within the{" "}
            <span className={styles.yellowHighlight}>React.js</span> ecosystem{" "}
            <span className={styles.yellowHighlight}>
              (Redux.js, Typescript, Next.js, Material UI)
            </span>
          </Typography>
          <Typography
            paragraph
            className={styles.description}
            style={{
              fontSize: "1.5rem",
              fontWeight: 300,
              lineHeight: 1.4,
            }}
          >
            As well, I have experience working with back-end{" "}
            <span className={styles.yellowHighlight}>
              (Node.js, Express, MongoDB, Firebase)
            </span>{" "}
            technologies.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
