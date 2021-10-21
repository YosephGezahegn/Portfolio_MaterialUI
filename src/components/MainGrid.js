import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MainTab from "./Tabs";
import ProfileCard from "./ProfileCard";

const MainGrid = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ flexGrow: 1, padding: "2px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "20px",
              paddingInline: "10px",
              background: "blue",
            }}
          >
            <ProfileCard />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <MainTab />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainGrid;
