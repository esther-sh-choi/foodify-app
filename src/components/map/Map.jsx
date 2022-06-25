import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import Rating from "@mui/lab";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled, alpha } from "@mui/material/styles";

// const Paper = styled("div")(({ theme }) => ({
//   padding: "10px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   width: "100px",
// }));

const MapContainer = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "100%",
}));

const MarkerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
  pointer: {
    cursor: "pointer",
  },
}));

function Map() {
  const isMobile = useMediaQuery("(min-width: 600px)");

  const coordinate = { lat: 0, lng: 0 };
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAO_AswjQW9ZtbedjSwaM0GnTAY8zSJpoo" }}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}
      ></GoogleMapReact>
    </MapContainer>
  );
}

export default Map;
