import React, { Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Drawer from "./drawer";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";

const theme = createTheme({
  palette: {
    background: {
      default: "#283747",
    },
    text: {
      primary: "#E5E7E9",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#283747",
          color: "#E5E7E9",
        },
      },
    },
  },
});

function home() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer />
          <Grid container columnSpacing={2}>
            <Grid item xs={12}>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography
                  className="headName"
                  sx={{ marginTop: 5, marginLeft: 10 }}>
                  Taechawan Thipsuwan
                </Typography>
                <Typography sx={{ marginLeft: 10 }}>
                  Email: taechawan.t@gmail.com
                </Typography>
                <Typography sx={{ marginLeft: 10 }}>
                  Phone: (+66)623343443
                </Typography>
                <Typography sx={{ marginLeft: 10 }}>
                  GitHub:{" "}
                  <Link
                    href="https://github.com/taechawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit">
                    taechawan
                  </Link>
                </Typography>
                <Typography sx={{ marginLeft: 10 }}>
                  Linkedin:{" "}
                  <Link
                    href="https://www.linkedin.com/in/taechawan-thipsuwan-063977305"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit">
                    taechawan thipsuwan
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ marginLeft: 10, p: 3 }}>
                <Divider sx={{ bgcolor: "#fff" }} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ marginLeft: 10, marginRight: 10, p: 3 }}>
                <Typography className="headText">About me</Typography>
                <Typography paragraph>
                  Hi, I'm Tae. I graduated with a Bachelor's degree in Computer
                  Science from Kasetsart University's Kamphaeng Saen campus.
                </Typography>
                <Typography paragraph>
                  I'm interested in Web Application Developer, Full Stack
                  Developer, Machine Learning, Computer Vision, Image Processing
                  and have experience of developing a web application for a
                  final project at my university. I have experience in
                  cooperative education as a research assistant in an image
                  processing and understanding team.
                </Typography>
                <Typography paragraph>
                  I'm passionate about learning new technologies and always
                  looking for new challenges. I'm a quick learner and a team
                  player with good communication skills.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default home;
