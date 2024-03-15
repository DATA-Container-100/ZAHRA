"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material";
// Animated Number Library
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});
// Data
import { companyProgressive } from "@/data/aboutUs/companyProgressive";

const SectionOne = () => {
  const matches = useMediaQuery("(min-width:700px)");
  const theme: Theme = useTheme();
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "500px",
          mx: "auto",
          mt: 5,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "15px",
            fontFamily: "Syne",
            textTransform: "capitalize",
            color: "#333",
          }}
        >
          know the industry
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            fontFamily: "Syne",
            fontSize: "15px",
            [theme.breakpoints.up("sm")]: {
              fontSize: "17px",
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "20px",
            },
            textTransform: "capitalize",
            textAlign: "center",
            color: theme.palette.text.darkPink,
            fontWeight: 700,
          }}
        >
          38 years of experience in luxury real estate
        </Typography>
      </Box>
      <Grid container spacing={5} sx={{ mb: 5, mt: 0 }}>
        <Grid item xs={12} sm={matches ? 5 : 12}>
          <Box
            sx={{
              width: "100%",
              minHeight: "300px",
              position: "relative",
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/villa_04_04.jpg"
              alt="image can not be found"
              layout="fill"
              objectFit="cover"
              priority={true}
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={matches ? 7 : 12}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                mb: 2,
                textAlign: matches ? "start" : "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Syne",
                  color: theme.palette.text.darkPink,
                  fontWeight: 500,
                  fontSize: "25px",
                  [theme.breakpoints.up("sm")]: {
                    fontSize: "30px",
                  },
                  [theme.breakpoints.up("md")]: {
                    fontSize: "35px",
                  },
                }}
              >
                we are the leader
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Syne",
                  color: theme.palette.text.darkPink,
                  fontWeight: 500,
                  fontSize: "25px",
                  [theme.breakpoints.up("sm")]: {
                    fontSize: "30px",
                  },
                  [theme.breakpoints.up("md")]: {
                    fontSize: "35px",
                  },
                }}
              >
                in the architectural
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Syne",
                textTransform: "capitalize",
                maxWidth: matches ? "500px" : "90%",
                mx: matches ? "" : "auto",
                mb: 3,
                textAlign: matches ? "start" : "center",
                fontSize: "10px",
                [theme.breakpoints.up("sm")]: {
                  fontSize: "12px",
                },
                [theme.breakpoints.up("md")]: {
                  fontSize: "15px",
                },
              }}
            >
              for each project we establish relationships with partners who we
              know will help us create added value for your project. as well as
              bringing together the public and private sectors. we make
              sector-overarching links to gather knowledge and to learn from
              each other.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: matches ? "space-between" : "space-evenly",
                alignItems: "center",
                maxWidth: matches ? "500px" : "100%",
              }}
            >
              {companyProgressive.map((block, indx) => {
                return (
                  <Box key={indx}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.darkPink,
                        fontWeight: 700,
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "center",
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
                      variant="body1"
                      sx={{
                        textTransform: "capitalize",
                        color: "#333",
                        fontWeight: 600,
                        fontSize: "11px",
                        [theme.breakpoints.up("sm")]: {
                          fontSize: "13px",
                        },
                        [theme.breakpoints.up("md")]: {
                          fontSize: "16px",
                        },
                      }}
                    >
                      {block.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionOne;
