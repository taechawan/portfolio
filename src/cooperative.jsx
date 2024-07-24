import React, { Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Drawer from "./drawer";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";

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

function Cooperative() {
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
                <IconButton
                  aria-label="back"
                  sx={{ color: "#E5E7E9" }}
                  onClick={() => window.history.back()}>
                  <ArrowBackIosIcon />
                </IconButton>
                <Typography
                  className="headName"
                  sx={{ marginTop: 5, marginLeft: 10 }}>
                  Cooperative Education
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
                <Typography className="headText">
                  Research Assistant, Image Processing and Understanding Team
                  (NECTEC)
                </Typography>
                <Typography sx={{ marginTop: "3vh" }}>
                  - Image Labeling and Image Classification: Studied and
                  Developed a program for Image Classification in Medical image
                  data with PyTorch. Perform data preprocessing, research models
                  for training/testing, and create data visualizations to
                  display results.
                </Typography>
                <Typography>
                  - Labeling / Annotation: using Label Studio with AWS s3.
                </Typography>
                <Typography>
                  - Segmentation: using the Segment Anything model for
                  increasing the amount of data.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vh",
                }}>
                <img
                  src="image/Cooperative/label.png"
                  alt="img"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vh",
                }}>
                <img
                  src="image/Cooperative/cloud.png"
                  alt="img"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vh",
                }}>
                <img
                  src="image/Cooperative/train.png"
                  alt="img"
                  style={{ width: "70%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default Cooperative;
