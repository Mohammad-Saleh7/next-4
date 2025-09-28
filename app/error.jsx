"use client";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function error({ error, reset }) {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography mt={10}> {error.message} </Typography>
      <button onClick={() => reset()}> try again </button>
    </Stack>
  );
}
