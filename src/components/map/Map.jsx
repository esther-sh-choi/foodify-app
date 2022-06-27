import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
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

const containerStyle = {
  height: "85vh",
  width: "100%",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

function Map() {
  const isMobile = useMediaQuery("(min-width: 600px)");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAO_AswjQW9ZtbedjSwaM0GnTAY8zSJpoo",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const coordinate = { lat: 0, lng: 0 };
  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    )
  );
}

export default Map;
