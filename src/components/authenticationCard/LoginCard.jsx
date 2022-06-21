import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const themeLight = createTheme({
  palette: {
    primary: {
      main: "#FE5274 ",
      maingradient:
        "linear-gradient(158deg, rgba(220,184,255,1) 0%, rgba(250,182,203,1) 50%, rgba(255,116,176,1) 100%)",
      darker: "#C02241",
      contrastText: "#fff",
    },
    neutral: {
      main: "#FFF6F8",
      contrastText: "black",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default function LoginCard(props) {
  const [light, setLight] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(123);
  };

  return (
    <Box
      sx={{
        width: { sm: 500, md: 600 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" textAlign="center" component="h1">
              <b>WELCOME BACK!</b>
            </Typography>
            <Typography level="body2" textAlign="center">
              Sign in to continue
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Don't have an account? Sign up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
