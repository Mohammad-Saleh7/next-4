"use client";
import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

export default function loading() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <CircularProgress />
      <Typography variant="h2" component={"h2"}>
        Loading...
      </Typography>
    </Stack>
  );
}
