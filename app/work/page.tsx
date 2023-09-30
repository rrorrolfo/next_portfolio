import Grid from "@mui/material/Unstable_Grid2";

import ProjectCard from "./components/ProjectCard";
import projectsData from "./projectsData";
import styles from "./work.module.css";

const Work = () => {
  return (
    <Grid container className={styles.pageContainer}>
      <Grid xs={12}>
        <h1 className="title">My Work</h1>
      </Grid>
      <Grid container spacing={4} xs={9} sm={10} lg={9}>
        {projectsData.map((project) => (
          <Grid xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Work;
