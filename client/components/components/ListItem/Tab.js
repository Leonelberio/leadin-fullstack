import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        width: 500,
        alignItems: "center",
        marginLeft: "35%",
        fontSize: "25px",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Tous les Catégories" />
        <BottomNavigationAction label="Design" />
        <BottomNavigationAction label="Art Oratoire" />
        <BottomNavigationAction label="Gestion de projet" />
        <BottomNavigationAction label="Communication" />
      </BottomNavigation>
    </Box>
  );
}
