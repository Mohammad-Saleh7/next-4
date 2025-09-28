"use client";
import { CircularProgress, Stack, Typography } from "@mui/material";

export default function loading() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h1" component={"h1"}>
        <CircularProgress />
        Loading Recipes Page...
      </Typography>
    </Stack>
  );
}
