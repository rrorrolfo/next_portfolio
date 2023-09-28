"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Project } from "../types";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = ({ project }: { project: Project }) => {
  const [expandFirstDrawer, setExpandFirstDrawer] = React.useState(false);
  const [expandSecondDrawer, setExpandSecondDrawer] = React.useState(false);

  const {
    name,
    description,
    imageURL,
    imageAlt,
    repositoryURL,
    liveUrl,
    technologiesUsed,
    technicalSpecifications,
  } = project;

  return (
    <Card>
      <CardHeader title={name} />
      <CardMedia component="img" height="194" image={imageURL} alt={imageAlt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography paragraph>Technical specifications:</Typography>
        <ExpandMore
          expand={expandFirstDrawer}
          onClick={() => {
            setExpandFirstDrawer(!expandFirstDrawer);
          }}
          aria-expanded={expandFirstDrawer}
          aria-label="show technical specifications"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expandFirstDrawer} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>

      <CardActions disableSpacing>
        <Typography paragraph>Technologies used:</Typography>
        <ExpandMore
          expand={expandSecondDrawer}
          onClick={() => {
            setExpandSecondDrawer(!expandSecondDrawer);
          }}
          aria-expanded={expandSecondDrawer}
          aria-label="show technologies used"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expandSecondDrawer} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minut
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
