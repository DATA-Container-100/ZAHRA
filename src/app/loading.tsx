"use client";
import Box from "@mui/material/Box";
import { Theme, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Loading = () => {
  const theme: Theme = useTheme();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        className="spinner"
        sx={{
          width: "44px",
          height: "44px",
          animation: "spinner-y0fdc1 2s infinite ease",
          transformStyle: "preserve-3d",
          "& > div ": {
            backgroundColor: "rgba(219, 19, 159, 0.2)",
            height: "100%",
            position: "absolute",
            width: "100%",
            border: "2px solid #97266d",
          },
        }}
      >
        <Box
          sx={{
            transform: "translateZ(-22px) rotateY(180deg)",
          }}
        ></Box>
        <Box
          sx={{
            transform: "rotateY(-270deg) translateX(50%)",
            transformOrigin: "top right",
          }}
        ></Box>
        <Box
          sx={{
            transform: "rotateY(270deg) translateX(-50%)",
            transformOrigin: "center left",
          }}
        ></Box>
        <Box
          sx={{
            transform: "rotateX(90deg) translateY(-50%)",
            transformOrigin: "top center",
          }}
        ></Box>
        <Box
          sx={{
            transform: "rotateX(-90deg) translateY(50%)",
            transformOrigin: "bottom center",
          }}
        ></Box>
        <Box
          sx={{
            transform: "translateZ(22px)",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Loading;
