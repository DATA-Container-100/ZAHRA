"use client";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Theme, useTheme } from "@mui/material";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Letter By Letter Animation Effect
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Icons
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
// Types
import { Data } from "@/types/dataTypes";

const Page = () => {
  // Fetching Property Data
  const [data, setData] = useState<Data>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/data.json",
      {
        next: { revalidate: 60 },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);
  const searchParams = useSearchParams();
  let propertyData = data.find(
    (property) => property.id == Number(searchParams.get("id"))
  );
  // Mui Theme
  const theme: Theme = useTheme();
  // State Manipulation
  const [installment, setInstallment] = useState<string>("");
  const [installmentOption, setInstallmentOption] = useState<boolean>(false);

  const sliderImgs = [
    propertyData?.details_Img_01,
    propertyData?.details_Img_02,
    propertyData?.details_Img_03,
    propertyData?.details_Img_04,
  ];
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
      <Container maxWidth="lg">
        <Suspense fallback="Loading...">
          {isLoading ? (
            <>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "80vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Syne",
                    color: theme.palette.text.darkPink,
                    fontWeight: 600,
                    mx: 2,
                    fontSize: "15px",
                    [theme.breakpoints.up("sm")]: {
                      fontSize: "20px",
                    },
                  }}
                >
                  Loading...
                </Typography>
              </Box>
            </>
          ) : (
            <>
              {propertyData === undefined ? (
                <Box
                  sx={{
                    width: "100%",
                    minHeight: "80vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Syne",
                      color: theme.palette.text.darkPink,
                      fontWeight: 600,
                      fontSize: "15px",
                      mx: 2,
                      textAlign: "center",
                      [theme.breakpoints.up("sm")]: {
                        fontSize: "20px",
                      },
                    }}
                  >
                    Data Not Found Try Search For Another Property ...
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ minHeight: "80vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "center",
                      [theme.breakpoints.up("sm")]: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "end",
                      },
                      mt: 4,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "Syne",
                          fontWeight: 700,
                          textTransform: "capitalize",
                        }}
                      >
                        <motion.span
                          initial="hidden"
                          animate={animation}
                          variants={sentenceAnimation}
                        >
                          {propertyData?.name.split("").map((char, indx) => {
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
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "Syne",
                            textTransform: "capitalize",
                            color: "#555",
                            fontWeight: 500,
                            mr: 2,
                          }}
                        >
                          {`${propertyData?.place_in_district}, ${propertyData?.place_in_city}`}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontFamily: "Syne",
                            textTransform: "capitalize",
                            fontWeight: 500,
                            borderBottom: `2px solid ${theme.palette.background.btn}`,
                          }}
                        >
                          {`type: ${propertyData?.property_type}`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "end",
                        mt: 1,
                        [theme.breakpoints.up("sm")]: {
                          mt: 0,
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          width: "100%",
                          fontFamily: "Oswald",
                          textTransform: "uppercase",
                          color: theme.palette.text.primary,
                          fontWeight: 600,
                          fontSize: "25px",
                          textAlign: "start",
                          [theme.breakpoints.up("sm")]: {
                            textAlign: "end",
                          },
                        }}
                      >
                        {propertyData!.price}
                      </Typography>
                      {installmentOption ? (
                        installment == "Pay All" ? (
                          ""
                        ) : (
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Cinzel",
                              fontWeight: 700,
                            }}
                          >
                            {`You Will Pay ${(
                              Number(propertyData?.price_in_details) /
                              (12 * Number(installment))
                            ).toFixed(2)} EGP/ Month`}
                          </Typography>
                        )
                      ) : (
                        ""
                      )}
                    </Box>
                  </Box>
                  <Grid container sx={{ my: 3 }} spacing={2}>
                    <Grid item xs={12} md={8}>
                      <Box>
                        <Box
                          sx={{
                            mx: "auto",
                            height: "350px",
                            [theme.breakpoints.up("sm")]: {
                              height: "400px",
                            },
                            [theme.breakpoints.up("md")]: {
                              height: "470px",
                            },
                          }}
                        >
                          <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            autoplay={{
                              delay: 3500,
                            }}
                            navigation={true}
                            pagination={{
                              clickable: true,
                              dynamicBullets: true,
                            }}
                            slidesPerView={1}
                            loop={true}
                            style={{
                              height: "100%",
                            }}
                          >
                            {sliderImgs?.map((img, indx) => {
                              return (
                                <SwiperSlide key={indx}>
                                  <Image
                                    src={img!}
                                    alt="img-not-found"
                                    layout="fill"
                                    objectFit="cover"
                                    priority={true}
                                  />
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "end",
                              color: "#1A202C",
                              fontSize: "12px",
                              [theme.breakpoints.up("sm")]: {
                                fontSize: "15px",
                              },
                              fontFamily: "Oswald",
                              mr: 3,
                            }}
                          >
                            <BedIcon
                              sx={{
                                mr: 0.5,
                                color: theme.palette.text.primary,
                                fontSize: "15px",
                                [theme.breakpoints.up("sm")]: {
                                  fontSize: "20px",
                                },
                              }}
                            />
                            <span>{`${propertyData?.nums_of_rooms} Bedrooms`}</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "end",
                              color: "#1A202C",
                              fontSize: "12px",
                              [theme.breakpoints.up("sm")]: {
                                fontSize: "15px",
                              },
                              fontFamily: "Oswald",
                              mr: 4,
                            }}
                          >
                            <BathtubIcon
                              sx={{
                                mr: 0.5,
                                color: theme.palette.text.primary,
                                fontSize: "15px",
                                [theme.breakpoints.up("sm")]: {
                                  fontSize: "20px",
                                },
                              }}
                            />
                            <span>{`${propertyData?.nums_of_toilets} Bathrooms`}</span>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "end",
                              color: "#1A202C",
                              fontSize: "12px",
                              [theme.breakpoints.up("sm")]: {
                                fontSize: "15px",
                              },
                              fontFamily: "Oswald",
                            }}
                          >
                            <AspectRatioIcon
                              sx={{
                                mr: 0.5,
                                color: theme.palette.text.primary,
                                fontSize: "15px",
                                [theme.breakpoints.up("sm")]: {
                                  fontSize: "20px",
                                },
                              }}
                            />
                            <span>
                              {propertyData?.total_area} m<sup>2</sup>
                            </span>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            mt: 3,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "Syne",
                            }}
                          >
                            {propertyData?.quote}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      sx={{
                        my: 2,
                        [theme.breakpoints.up("md")]: {
                          my: 0,
                        },
                      }}
                    >
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": { m: 1, width: "95%" },
                          border: `2px solid ${theme.palette.text.primary}`,
                          borderRadius: "5px",
                          p: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              mr: 2,
                            }}
                          >
                            <Image
                              src="/images/rawan.png"
                              alt="avatar"
                              width={70}
                              height={70}
                            />
                          </Box>
                          <Box>
                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: "Syne",
                                fontWeight: 700,
                              }}
                            >
                              Roz Khaled
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: "Oswald",
                                fontSize: "14px",
                                color: "#333",
                              }}
                            >
                              +01285340684
                            </Typography>
                          </Box>
                        </Box>
                        <TextField
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          type="text"
                          required
                        />
                        <TextField
                          id="outlined-basic"
                          label="Phone"
                          variant="outlined"
                          type="text"
                          required
                        />
                        <FormControl sx={{ mt: 1 }}>
                          <InputLabel htmlFor="installment">
                            Select Installment
                          </InputLabel>
                          <Select
                            native
                            id="installment"
                            label="Select Installment"
                            defaultValue="Pay All"
                            onChange={(e) => {
                              setInstallment(e.target.value);
                              setInstallmentOption(true);
                            }}
                          >
                            <option aria-label="None" value="All" disabled />
                            <option value="Pay All">Pay All At Once</option>
                            <option value="1">1 Year</option>
                            <option value="2">2 Year</option>
                            <option value="3">3 Year</option>
                          </Select>
                        </FormControl>
                        <TextField
                          placeholder={`Hi Roz, I am interested in ${propertyData?.property_type}`}
                          multiline
                          rows={3}
                          style={{ marginBottom: "8px" }}
                        />
                        <Grid container>
                          <Grid
                            item
                            xs={8}
                            sx={{
                              pr: 1,
                            }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                width: "100%",
                                fontFamily: "Syne",
                              }}
                            >
                              Send Message
                            </Button>
                          </Grid>
                          <Grid item xs={4}>
                            <Button
                              variant="outlined"
                              sx={{
                                width: "100%",
                                fontFamily: "Syne",
                              }}
                            >
                              Call
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </>
          )}
        </Suspense>
      </Container>
    </>
  );
};

export default Page;
