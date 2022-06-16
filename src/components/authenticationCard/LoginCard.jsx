import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

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

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssVarsProvider>
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 400,
            mx: "auto", // margin left & right
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button
            sx={{
              mt: 1, // margin top
            }}
            color="primary"
          >
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don't have an account?
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </ThemeProvider>
  );
}
