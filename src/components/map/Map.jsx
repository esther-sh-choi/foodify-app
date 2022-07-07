import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
  LatLngBounds,
} from "@react-google-maps/api";
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

function Map() {
  const isMobile = useMediaQuery("(min-width: 600px)");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(
    JSON.parse(localStorage.getItem("location"))
  );

  // useEffect(() => {
  //   setCenter(JSON.parse(localStorage.getItem("location")));
  // }, []);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);

    console.log(center);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleCenterChanged = () => {
    const newCenter = new window.google.maps.LatLngBounds().getCenter();
    console.log(newCenter.lat());
  };

  return (
    <>
      {isLoaded && center !== null && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onCenterChanged={handleCenterChanged}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      )}
    </>
  );
}

export default Map;
