import React, { useState } from "react";
import {
  TextField,
  Autocomplete,
  Box,
  Button,
  styled,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { searchBarArr } from "./api";

const SearchBar: React.FC = () => {
  const [searchSelect, setSearchSelect] = useState<string>("Categories");

  const searchSelectHandler = (event: SelectChangeEvent): void => {
    setSearchSelect(event.target.value as string);
  };

  const StyledButton = styled(Button)`
    &:hover {
      background-color: #7ac751;
    }
  `;

  return (
    <Box
      sx={{
        border: "2px solid",
        width: "100%",
        height: "46px",
        color: "primary.main",
        borderRadius: "8px",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
      }}
      className="header-search-bar"
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={searchBarArr}
        sx={{
          flex: "1",
          border: "none",
          height: "46px",
        }}
        popupIcon={<ExpandMoreIcon />}
        renderInput={(params) => <TextField {...params} />}
      />
      <Select
        id="searchPickerSelect"
        labelId="searchPickerSelectLabel"
        value={searchSelect}
        onChange={searchSelectHandler}
        IconComponent={ExpandMoreIcon}
        sx={{
          border: "none",
          color: "secondary.contrastText",
          minWidth: "130px",
          display: "flex",
          alignItems: "center",
          borderLeft: "3px solid",
          borderColor: "secondary.dark",
          borderRadius: "0",
          pl: "10px",
        }}
        className="header-search-select"
      >
        <MenuItem value={"Categories"}>Categories</MenuItem>
        <MenuItem value={"Type"}>Type</MenuItem>
        <MenuItem value={"Price"}>Price</MenuItem>
      </Select>
      <StyledButton
        variant="contained"
        sx={{
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        }}
      >
        <SearchIcon />
      </StyledButton>
    </Box>
  );
};

export default SearchBar;
