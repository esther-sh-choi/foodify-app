import React, { useState, useEffect } from "react";

import { getPlacesData } from "../../api/index";

import SearchList from "../../components/searchList/SearchList";
import Map from "../../components/map/Map";

import { CssBaseline, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const drawerWidth = 240;

function SearchPage() {
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState(
    JSON.parse(localStorage.getItem("location"))
  );
  const [bounds, setBounds] = useState();

  useEffect(() => {
    setCenter(JSON.parse(localStorage.getItem("location")));

    console.log(center);

    getPlacesData(center.lat, center.lng).then((data) => {
      console.log(data.results);
      setPlaces(data.results);
    });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Map
            setCenter={setCenter}
            setBounds={setBounds}
            center={center}
          ></Map>
        </Grid>
        <Grid item xs={12} md={4}>
          <SearchList></SearchList>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchPage;
