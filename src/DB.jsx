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

function DB() {
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
                  className="headText"
                  sx={{ marginTop: 5, marginLeft: 10 }}>
                  Introduction to Database Systems
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
                <Typography sx={{ marginTop: "3vh" }}>
                  Designed a student registration database. Designed ERD, RDM
                  and normalization database Systems. Created simple SQL
                  commands
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3vh",
                  }}>
                  <img
                    src="image/Coursework/DB/pic1.png"
                    alt="sa"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3vh",
                  }}>
                  <img
                    src="image/Coursework/DB/pic2.png"
                    alt="sa"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3vh",
                  }}>
                  <img
                    src="image/Coursework/DB/pic3.png"
                    alt="sa"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3vh",
                  }}>
                  <img
                    src="image/Coursework/DB/pic4.png"
                    alt="sa"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3vh",
                  }}>
                  <img
                    src="image/Coursework/DB/pic5.png"
                    alt="sa"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default DB;
