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

function Graduation() {
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
                  Graduation Project
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
                  KUSupport: Teaching and Learning Management Support System
                </Typography>
                <Typography sx={{ marginTop: "3vh" }}>
                  Developed a web application for managing teaching schedules
                  and exams using a drag-and-drop interface, classroom and exam
                  room allocation, and schedule downloads. Using React for
                  Front-End, Laravel for Back-End and MySQL for database.
                  Collaborating with a partner, I developed a full-stack web
                  application. I took the lead on the front-end development.This
                  system is copyrighted
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vh",
                }}>
                <img
                  src="image/Graduation/login_screen.png"
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
                  src="image/Graduation/admin_screen.png"
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
                  src="image/Graduation/table_screen.png"
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
                  src="image/Graduation/condition_screen.png"
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
                  src="image/Graduation/officer_screen.png"
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
                  src="image/Graduation/room_screen.png"
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
                  src="image/Graduation/copyright.jpg"
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

export default Graduation;
