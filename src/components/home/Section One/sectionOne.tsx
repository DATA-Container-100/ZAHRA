"use client";
import { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material";
// Icons
import AddIcon from "@mui/icons-material/Add";
// Animated Number Library
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
// Letter By Letter Animation Effect
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Variables
const statData = [
  {
    num: 1200,
    title: "Premium Product",
  },
  {
    num: 4500,
    title: "Happy Customer",
  },
  {
    num: 240,
    title: "Award Winning",
  },
];

const SectionOne = () => {
  const theme: Theme = useTheme();
  const router = useRouter();
  // Letter By Letter Animation
  const sentence = `Find Real Estate That Suits You.`;
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
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={7.5}
          sx={{
            mb: 1.5,
            [theme.breakpoints.up("md")]: {
              mb: 0,
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              padding: 2,
              [theme.breakpoints.up("md")]: {
                padding: 6,
              },
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "22px",
                [theme.breakpoints.up("sm")]: {
                  fontSize: "26px",
                },
                fontFamily: "Syne",
                fontWeight: 600,
                mb: 2,
              }}
            >
              <motion.span
                initial="hidden"
                animate={animation}
                variants={sentenceAnimation}
              >
                {sentence.split("").map((char, indx) => {
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
              sx={{
                fontFamily: "Syne",
                mb: 2,
                color: "#1A202C",
                fontSize: "15px",
              }}
            >
              Where Quality Homes and Exceptional Service Create Your Perfect
              Real Estate Experience
            </Typography>
            <Button
              variant="contained"
              sx={{
                mb: 2,
                fontFamily: "Syne",
                fontWeight: 600,
              }}
              onClick={() => router.push("aboutUs")}
            >
              get started
            </Button>
            <Grid container spacing={1}>
              {statData.map((block, indx) => {
                return (
                  <Grid item xs={4} key={indx}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: theme.palette.background.block,
                        p: 1.5,
                        height: "70%",
                        borderRadius: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "18px",
                            color: "#1A202C",
                          }}
                        >
                          <AnimatedNumbers
                            includeComma
                            transitions={(index) => ({
                              type: "spring",
                              duration: index + 0.3,
                            })}
                            animateToNumber={block.num}
                          />
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            lineHeight: 0,
                          }}
                        >
                          <AddIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.text.darkPink,
                            }}
                          />
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1A202C",
                          fontFamily: "Syne",
                        }}
                      >
                        {block.title}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        {/* ------------------------------------------------------------ */}
        <Grid item xs={12} md={4.5}>
          <Grid container spacing={1}>
            <Grid item xs={6} md={12}>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  minHeight: "194px",
                }}
              >
                <Image
                  src="https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/home-Sec01-TopRight.webp"
                  alt="image-can-not-be-found"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  style={{ borderRadius: "15px" }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={12}>
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  minHeight: "194px",
                }}
              >
                <Image
                  src="https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/house_04_01.jpg"
                  alt="image-can-not-be-found"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  style={{ borderRadius: "15px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionOne;
