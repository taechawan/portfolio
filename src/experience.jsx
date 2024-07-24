import React, { Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Drawer from "./drawer";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

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

function Experience() {
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
                  Experience
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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{
                        bgcolor: "#2E4053",
                        padding: "15px",
                        height: "auto",
                      }}>
                      <CardActionArea
                        onClick={() => {
                          window.location.href = "/cooperative";
                        }}>
                        <CardMedia
                          component="img"
                          height="250"
                          image="image/Cooperative/predict.png"
                        />
                        <CardContent>
                          <Typography className="headText">
                            Cooperative Education
                          </Typography>
                          <Typography className="headText2">
                            Research Assistant: Image Processing and
                            Understanding Team
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              textDecoration: "underline",
                            }}>
                            More details
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card
                      sx={{
                        bgcolor: "#2E4053",
                        padding: "15px",
                        height: "auto",
                      }}>
                      <CardActionArea
                        onClick={() => {
                          window.location.href = "/graduation";
                        }}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image="image/Graduation/login_screen.png"
                        />
                        <CardContent>
                          <Typography className="headText">
                            Graduation Project
                          </Typography>
                          <Typography className="headText2">
                            KUSupport: Teaching and Learning Management Support
                            System
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              textDecoration: "underline",
                            }}>
                            More details
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
              <Grid item xs={12}>
                <Box sx={{ marginLeft: 10, p: 3 }}>
                  <Divider sx={{ bgcolor: "#fff" }} />
                </Box>
              </Grid>
              <Box sx={{ flexGrow: 1, p: 3 }}>
                <Typography className="headText" sx={{ marginLeft: 10 }}>
                  Coursework Projects
                </Typography>
              </Box>
              <Box sx={{ marginLeft: 10, marginRight: 10, p: 3 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: "#2E4053", padding: "15px" }}>
                      <CardActionArea
                        onClick={() => {
                          window.location.href = "/SA";
                        }}>
                        <CardContent>
                          <Typography className="headText2">
                            System Analysis and Design
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              textDecoration: "underline",
                            }}>
                            More details
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: "#2E4053", padding: "15px" }}>
                      <CardActionArea
                        onClick={() => {
                          window.location.href = "/DB";
                        }}>
                        <CardContent>
                          <Typography className="headText2">
                            Introduction to Database Systems
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              textDecoration: "underline",
                            }}>
                            More details
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ bgcolor: "#2E4053", padding: "15px" }}>
                      <CardActionArea
                        onClick={() => {
                          window.location.href = "/IP";
                        }}>
                        <CardContent>
                          <Typography className="headText2">
                            Digital Image Processing
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              textDecoration: "underline",
                            }}>
                            More details
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default Experience;
