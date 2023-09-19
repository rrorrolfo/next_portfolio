import Grid from "@mui/material/Unstable_Grid2";
import Nav from "../components/navigation";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Rodolfo Pérez",
  description:
    "Rodolfo is a react developer with experience in React.js, Redux.js Next.js, Node.js",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Grid container>
          <Grid xs={12} direction="column" className="navContainer">
            <Nav />
          </Grid>
          <Grid xs={12} className="mainContainer">
            {children}
          </Grid>
        </Grid>
      </body>
    </html>
  );
};

export default RootLayout;
