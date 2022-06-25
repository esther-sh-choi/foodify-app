import React, { useState, useEffect, createRef } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useTheme, styled, alpha } from "@mui/material/styles";

import PlaceDetails from "../placeDetails/PlaceDetails";

const FormControlStyled = styled("FormControl")(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

const SearchList = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);

  // useEffect(() => {
  //   setElRefs((refs) =>
  //     Array(places.length)
  //       .fill()
  //       .map((_, i) => refs[i] || createRef())
  //   );
  // }, [places]);

  return (
    <Box p="25px">
      {isLoading ? (
        <Box
          sx={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ backgrounColor: "white", height: "75vh", overflow: "auto" }}
        >
          {places?.map((place, i) => (
            <Grid item ref={elRefs[i]} key={i} xs={12}>
              <PlaceDetails
                selected={Number(childClicked) === i}
                refProp={elRefs[i]}
                place={place}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SearchList;
