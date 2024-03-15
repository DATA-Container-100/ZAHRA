"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material";
// Box Animation
import { useAutoAnimate } from "@formkit/auto-animate/react";
// Icons
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
// Data Types
import { Data, OptionsType } from "@/types/dataTypes";

// Options
const options: OptionsType = [
  {
    title: "All",
    minValue: "0",
    maxValue: "22000000",
  },
  {
    title: "1M - 4M",
    minValue: "1000000",
    maxValue: "4000000",
  },
  {
    title: "7M - 10M",
    minValue: "7000000",
    maxValue: "10000000",
  },
  {
    title: "10M - 22M",
    minValue: "10000000",
    maxValue: "22000000",
  },
];

const SectionTwo = () => {
  const theme: Theme = useTheme();
  const SmallDev = useMediaQuery("(min-width:920px)");
  const [secSection, setShowSecSection] = useState<boolean>(false);
  const [parent] = useAutoAnimate();
  useEffect(() => {
    setShowSecSection(true);
  }, []);

  const [data, setData] = useState<Data>([]);
  const [allData, setAllData] = useState<Data>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [cityChosen, setCityChosen] = useState<string>("");
  const [typeChosen, setTypeChosen] = useState<string>("");
  const [priceChosen, setPriceChosen] = useState<string>("");
  const [match, setMatch] = useState<OptionsType>([]);

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
        setAllData(data);
        setLoading(false);
      });
  }, []);

  return (
    secSection && (
      <>
        <Box
          sx={{
            backgroundColor: "#fff",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Syne",
              fontSize: "20px",
              fontWeight: 600,
              textTransform: "capitalize",
              mb: 2,
            }}
          >
            Search the price you looking for
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Box>
                <FormControl sx={{ mt: 1, width: "95%" }}>
                  <InputLabel htmlFor="grouped-native-select-city">
                    Select City / Town
                  </InputLabel>
                  <Select
                    native
                    id="grouped-native-select-city"
                    label=" Select City / Town"
                    defaultValue="All"
                    onChange={(e) => {
                      if (e.target.value === "All") {
                        setCityChosen(e.target.value);
                        if (
                          (typeChosen == "" || typeChosen == "All") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          setData(allData);
                        } else if (
                          (typeChosen || typeChosen !== "") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          let newData = allData.filter(
                            (property) => property.property_type == typeChosen
                          );
                          setData(newData);
                        } else if (
                          (typeChosen == "" || typeChosen == "All") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newData = allData.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newData);
                        } else if (
                          (typeChosen || typeChosen !== "") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newDataF = allData.filter(
                            (property) => property.property_type == typeChosen
                          );
                          let newDataS = newDataF.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newDataS);
                        }
                      } else {
                        setCityChosen(e.target.value);
                        if (
                          (typeChosen == "" || typeChosen == "All") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          let newData = allData.filter(
                            (property) =>
                              property.place_in_district == e.target.value
                          );
                          setData(newData);
                        } else if (
                          (typeChosen || typeChosen !== "") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          let newDataF = allData.filter(
                            (property) =>
                              property.place_in_district == e.target.value
                          );
                          let newDataS = newDataF.filter(
                            (property) => property.property_type == typeChosen
                          );
                          setData(newDataS);
                        } else if (
                          (typeChosen == "" || typeChosen == "All") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newDataF = allData.filter(
                            (property) =>
                              property.place_in_district == e.target.value
                          );
                          let newDataS = newDataF.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newDataS);
                        } else if (
                          (typeChosen || typeChosen !== "") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newDataF = allData.filter(
                            (property) =>
                              property.place_in_district == e.target.value
                          );
                          let newDataS = newDataF.filter(
                            (property) => property.property_type == typeChosen
                          );
                          let newDataT = newDataS.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newDataT);
                        }
                      }
                    }}
                  >
                    <option aria-label="None" value="All" disabled />
                    <option value="All">All</option>
                    <option value="Sheikh Zaied">Sheikh Zaied</option>
                    <option value="Madinty">Madinty</option>
                    <option value="Mostakbal City">Mostakbal City</option>
                    <option value="Zamalek">Zamalek</option>
                    <option value="6 of October">6 of October</option>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <FormControl sx={{ mt: 1, width: "95%" }}>
                  <InputLabel htmlFor="grouped-native-select-type">
                    Select Type
                  </InputLabel>
                  <Select
                    native
                    id="grouped-native-select-type"
                    label="Select Type"
                    defaultValue="All"
                    onChange={(e) => {
                      if (e.target.value === "All") {
                        setTypeChosen(e.target.value);
                        if (
                          (cityChosen == "" || cityChosen == "All") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          setData(allData);
                        } else if (
                          (cityChosen || cityChosen !== "") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          let newData = allData.filter(
                            (property) =>
                              property.place_in_district == cityChosen
                          );
                          setData(newData);
                        } else if (
                          (cityChosen == "" || cityChosen == "All") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newData = allData.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newData);
                        } else if (
                          (cityChosen || cityChosen !== "") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newDataF = allData.filter(
                            (property) =>
                              property.place_in_district == cityChosen
                          );
                          let newDataS = newDataF.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newDataS);
                        }
                      } else {
                        setTypeChosen(e.target.value);
                        if (
                          (cityChosen == "" || cityChosen == "All") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          let newData = allData.filter(
                            (property) =>
                              property.property_type == e.target.value
                          );
                          setData(newData);
                        } else if (
                          (cityChosen || cityChosen !== "") &&
                          (priceChosen == "" || priceChosen == "All")
                        ) {
                          let newDataF = allData.filter(
                            (property) =>
                              property.place_in_district == cityChosen
                          );
                          let newDataS = newDataF.filter(
                            (property) =>
                              property.property_type == e.target.value
                          );
                          setData(newDataS);
                        } else if (
                          (cityChosen == "" || cityChosen == "All") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newDataF = allData.filter(
                            (property) =>
                              property.property_type == e.target.value
                          );
                          let newDataS = newDataF.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newDataS);
                        } else if (
                          (cityChosen || cityChosen !== "") &&
                          (priceChosen || priceChosen !== "")
                        ) {
                          let matchedOption = match;
                          let newDataF = allData.filter(
                            (property) =>
                              property.place_in_district == cityChosen
                          );
                          let newDataS = newDataF.filter(
                            (property) =>
                              property.property_type == e.target.value
                          );
                          let newDataT = newDataS.filter(
                            (property) =>
                              Number(property.price_in_details) >=
                                Number(matchedOption[0].minValue) &&
                              Number(property.price_in_details) <
                                Number(matchedOption[0].maxValue)
                          );
                          setData(newDataT);
                        }
                      }
                    }}
                  >
                    <option aria-label="None" value="All" disabled />
                    <option value="All">All</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <FormControl sx={{ mt: 1, width: "95%" }}>
                  <InputLabel htmlFor="grouped-native-select-price">
                    Select Price
                  </InputLabel>
                  <Select
                    native
                    id="grouped-native-select-price"
                    label="Select Price"
                    defaultValue="All"
                    onChange={(e) => {
                      setData(allData);
                      let match = options.filter(
                        (option) => option.minValue == e.target.value
                      );
                      setMatch(match);
                      if (
                        (typeChosen == "" || typeChosen == "All") &&
                        (cityChosen == "" || cityChosen == "All")
                      ) {
                        setPriceChosen(e.target.value);
                        let newData = allData.filter(
                          (property) =>
                            Number(property.price_in_details) >=
                              Number(match[0].minValue) &&
                            Number(property.price_in_details) <
                              Number(match[0].maxValue)
                        );
                        setData(newData);
                      } else if (
                        (typeChosen || typeChosen !== "") &&
                        (cityChosen == "" || cityChosen == "All")
                      ) {
                        setPriceChosen(e.target.value);
                        let newDataF = allData.filter(
                          (property) => property.property_type == typeChosen
                        );
                        let newDataS = newDataF.filter(
                          (property) =>
                            Number(property.price_in_details) >=
                              Number(match[0].minValue) &&
                            Number(property.price_in_details) <
                              Number(match[0].maxValue)
                        );
                        setData(newDataS);
                      } else if (
                        (cityChosen || cityChosen !== "") &&
                        (typeChosen == "" || typeChosen == "All")
                      ) {
                        setPriceChosen(e.target.value);
                        let newDataF = allData.filter(
                          (property) => property.place_in_district == cityChosen
                        );
                        let newDataS = newDataF.filter(
                          (property) =>
                            Number(property.price_in_details) >=
                              Number(match[0].minValue) &&
                            Number(property.price_in_details) <
                              Number(match[0].maxValue)
                        );
                        setData(newDataS);
                      } else if (
                        (cityChosen || cityChosen !== "") &&
                        (typeChosen || typeChosen !== "")
                      ) {
                        setPriceChosen(e.target.value);
                        let newDataF = allData.filter(
                          (property) => property.place_in_district == cityChosen
                        );
                        let newDataS = newDataF.filter(
                          (property) => property.property_type == typeChosen
                        );
                        let newDataT = newDataS.filter(
                          (property) =>
                            Number(property.price_in_details) >=
                              Number(match[0].minValue) &&
                            Number(property.price_in_details) <
                              Number(match[0].maxValue)
                        );
                        setData(newDataT);
                      }
                    }}
                  >
                    <option aria-label="None" value="All" disabled />
                    {options.map((option, indx) => {
                      return (
                        <option key={indx} value={option.minValue}>
                          {option.title}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* ================= Cards Sec ================ */}
        <Box
          sx={{
            my: 5,
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          <Grid container spacing={2} ref={parent}>
            {isLoading ? (
              <Box
                sx={{
                  width: "100%",
                  minHeight: "40vh",
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
            ) : (
              <>
                {data.length > 0 ? (
                  <>
                    {data!.map((card, indx) => {
                      return (
                        <Grid item key={indx} xs={12} sm={SmallDev ? 4 : 6}>
                          <Link
                            style={{ textDecoration: "none" }}
                            href={{
                              pathname: `/home/${card.property_type}`,
                              query: {
                                id: card.id,
                              },
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                my: 1,
                                cursor: "pointer",
                                borderBottomLeftRadius: "15px",
                                borderBottomRightRadius: "15px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  minHeight: "194px",
                                  position: "relative",
                                }}
                              >
                                <Image
                                  src={card["main-Img"]}
                                  alt="image not found"
                                  layout="fill"
                                  objectFit="cover"
                                  priority={true}
                                />
                              </Box>
                              <Box
                                sx={{
                                  width: "100%",
                                  backgroundColor: "#fff",
                                  pt: 1,
                                  boxShadow: 3,
                                  borderBottomLeftRadius: "15px",
                                  borderBottomRightRadius: "15px",
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  sx={{
                                    m: 1,
                                    color: theme.palette.text.primary,
                                    fontWeight: 700,
                                  }}
                                >
                                  {`EGP ${card.price}`}
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: theme.palette.text.secondary,
                                      ml: 1,
                                    }}
                                  >
                                    / Services Included
                                  </Typography>
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: "Syne",
                                    fontWeight: 700,
                                    m: 1,
                                    color: "#000",
                                  }}
                                >
                                  {card.property_type}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: "Syne",
                                    fontSize: "14px",
                                    m: 1,
                                    color: theme.palette.text.secondary,
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {card.place_in_district}, {card.place_in_city}
                                </Typography>
                                <Divider />
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    p: 1,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mr: 3,
                                      color: "#1A202C",
                                      fontSize: "14px",
                                    }}
                                  >
                                    <BedIcon
                                      fontSize="small"
                                      sx={{
                                        mr: 0.8,
                                        color: theme.palette.text.primary,
                                      }}
                                    />
                                    {card.nums_of_rooms}
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mr: 3,
                                      color: "#1A202C",
                                      fontSize: "14px",
                                    }}
                                  >
                                    <BathtubIcon
                                      fontSize="small"
                                      sx={{
                                        mr: 0.8,
                                        color: theme.palette.text.primary,
                                      }}
                                    />
                                    {card.nums_of_toilets}
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mr: 3,
                                      color: "#1A202C",
                                      fontSize: "14px",
                                    }}
                                  >
                                    <AspectRatioIcon
                                      fontSize="small"
                                      sx={{
                                        mr: 0.8,
                                        color: theme.palette.text.primary,
                                      }}
                                    />
                                    {card.total_area} m<sup>2</sup>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Link>
                        </Grid>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        width: "100%",
                        height: "20vh",
                        mt: 5,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "Syne",
                          color: theme.palette.text.primary,
                        }}
                      >
                        There Are No Properties Based On Your Search
                        Preferences...
                      </Typography>
                    </Box>
                  </>
                )}
              </>
            )}
          </Grid>
        </Box>
      </>
    )
  );
};

export default SectionTwo;
