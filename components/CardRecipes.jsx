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

export default function CardRecipes({
  href,
  title,
  subtitle,
  Difficulty,
  CookTime,
  Calories,
  image,
}) {
  const router = useRouter();

  return (
    <Box>
      <Card
        sx={{ maxWidth: 345, border: "2px solid black", marginBottom: "20px" }}
      >
        <Box
          sx={{ justifyContent: "center", display: "flex", marginTop: "8px" }}
        >
          <Image
            src={image}
            alt={title}
            width={128}
            height={128}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{subtitle}</Typography>
          <Typography variant="h6">{Calories}</Typography>
          <Typography variant="h6">{Difficulty}</Typography>
          <Typography variant="h6">{CookTime}</Typography>
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
