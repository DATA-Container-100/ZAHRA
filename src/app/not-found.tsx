"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  const theme: Theme = useTheme();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "270px",
          height: "270px",
          [theme.breakpoints.up("sm")]: {
            width: "400px",
            height: "400px",
          },
          position: "relative",
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/DATA-Container-100/team-project-data/d2c538d5a049e59fc9deec7e10ad5fe8ac63672d/404%20Error%20Page%20not%20Found%20with%20people%20connecting%20a%20plug-pana.svg"
          alt="image not found"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </Box>
      <Typography
        component="p"
        sx={{
          my: 2,
          fontFamily: "Syne",
          fontSize: "12px",
          color: theme.palette.text.darkPink,
          fontWeight: 600,
          [theme.breakpoints.up("sm")]: {
            fontSize: "15px",
          },
        }}
      >
        {`We Couldn't Find The Page You're Looking For`}
      </Typography>
      <Link href="/">
        <Button
          size={extraSmallDev ? "small" : "medium"}
          variant="contained"
          sx={{
            fontFamily: "Syne",
            width: "150px",
          }}
        >
          Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
