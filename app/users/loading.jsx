"use client";
import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

export default function loading() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h1" component={"h1"}>
        <CircularProgress />
        Loading User Page...
      </Typography>
    </Stack>
  );
}
