"use client";
import { useEffect, useState } from "react";
// Mui Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material";
// Icons
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const UpBtn = () => {
  const theme: Theme = useTheme();
  const [showBtn, setShowBtn] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 250) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
          backgroundColor: theme.palette.background.btn,
          color: "#fff",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0.5,
          borderRadius: "4px",
          cursor: "pointer",
          transition: "transform 0.5s ease",
          transform: showBtn ? "translateX(0)" : "translateX(150%)",
          zIndex: 9999999,
        }}
        onClick={() => goUp()}
      >
        <KeyboardDoubleArrowUpIcon />
      </Box>
    </>
  );
};

export default UpBtn;
