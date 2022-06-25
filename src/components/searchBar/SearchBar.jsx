import React from "react";

import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@emotion/react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function SearchBar() {
  //   const {
  //     ready,
  //     value,
  //     suggestions: { status, data },
  //     setValue,
  //     clearSuggestions,
  //   } = usePlacesAutocomplete({
  //     requestOptions: {
  //       // location is default set to Toronto, but eventually will get user's local place
  //       location: { lat: () => 43.653225, lng: () => -79.383186 },
  //       radius: 200 * 1000,
  //     },
  //   });

  //   const ref = useOnclickOutside(() => {
  //     // When user clicks outside of the component, we can dismiss
  //     // the searched suggestions by calling this method
  //     clearSuggestions();
  //   });

  //   const handleSelect = async (address) => {
  //     setValue(address, false);
  //     console.log(address);
  //     clearSuggestions();

  //     const results = await getGeocode({ address });
  //     const { lat, lng } = await getLatLng(results[0]);
  //   };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search food..."
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export default SearchBar;
