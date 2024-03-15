"use client";
import { useEffect } from "react";
import Image from "next/image";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// Letter By Letter Animation Effect
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Data Types
import { SectionHeaderInfo } from "@/types/dataTypes";

const SectionHeader = ({
  mainTxt1,
  mainTxt2,
  subTxt,
  imgSrc,
}: SectionHeaderInfo) => {
  const theme: Theme = useTheme();
  const smDev = useMediaQuery(theme.breakpoints.up("sm"));
  // Letter By Letter Animation
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const sentenceAnimation = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const characterAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return (
    <>
      <Grid
        container
        direction={smDev ? "row" : "column-reverse"}
        spacing={1}
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.background.paper,
          p: 3,
          borderRadius: 3,
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              textAlign: "center",
              [theme.breakpoints.up("sm")]: {
                textAlign: "start",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#333",
                textTransform: "capitalize",
                fontFamily: "Syne",
                fontSize: "13px",
                mt: 1,
              }}
            >
              {subTxt}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  textTransform: "capitalize",
                  color: theme.palette.text.darkPink,
                  fontSize: "30px",
                  fontWeight: 500,
                  [theme.breakpoints.up("md")]: {
                    fontSize: "40px",
                  },
                }}
              >
                <motion.span
                  initial="hidden"
                  animate={animation}
                  variants={sentenceAnimation}
                >
                  {mainTxt1.split("").map((char, indx) => {
                    return (
                      <motion.span
                        key={indx}
                        ref={ref}
                        variants={characterAnimation}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.span>
              </Typography>
              <Typography
                variant="body1"
                component="h3"
                sx={{
                  textTransform: "capitalize",
                  color: theme.palette.text.darkPink,
                  fontSize: "30px",
                  fontWeight: 500,
                  [theme.breakpoints.up("md")]: {
                    fontSize: "40px",
                  },
                }}
              >
                <motion.span
                  initial="hidden"
                  animate={animation}
                  variants={sentenceAnimation}
                >
                  {mainTxt2.split("").map((char, indx) => {
                    return (
                      <motion.span
                        key={indx}
                        ref={ref}
                        variants={characterAnimation}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.span>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "230px",
              height: "150px",
              [theme.breakpoints.up("sm")]: {
                width: "250px",
                height: "250px",
              },
              [theme.breakpoints.up("md")]: {
                width: "300px",
              },
              mx: "auto",
              position: "relative",
            }}
          >
            <Image
              src={imgSrc}
              alt="image can not be found"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionHeader;
