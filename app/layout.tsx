import Grid from "@mui/material/Unstable_Grid2";
import { Assistant } from "next/font/google";
import type { Metadata } from "next";

import Nav from "../components/navigation";

import "./globals.css";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodolfo Pérez | React developer",
  description:
    "Rodolfo is a react developer with experience within the React ecosystem (React.js, Redux.js Next.js, Node.js)",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={assistant.className}>
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
