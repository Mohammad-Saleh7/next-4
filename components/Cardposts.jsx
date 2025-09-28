"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Stack } from "@mui/material";

export default function CardPosts({
  href,
  title,
  subtitle,
  image,
  age,
  gender,
}) {
  const router = useRouter();

  return (
    <Box>
      <Card
        sx={{ maxWidth: 345, border: "2px solid black", marginBottom: "20px" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{subtitle}</Typography>
          <Typography variant="h6">{gender}</Typography>
          <Typography variant="h6">{age}</Typography>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => router.push(href)}
          >
            View Details
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
