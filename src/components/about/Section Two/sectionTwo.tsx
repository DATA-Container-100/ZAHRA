"use client";
import Image from "next/image";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material";
// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
// Data
import { zahraTeam } from "@/data/aboutUs/zahraTeam";

const SectionTwo = () => {
  const theme: Theme = useTheme();
  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Syne",
            textAlign: "center",
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          get to know us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mt: 1,
            fontFamily: "Syne",
            color: theme.palette.text.darkPink,
            fontWeight: 700,
            textTransform: "capitalize",
          }}
        >
          {`you are always welcome to contact your fav ZAHRA team`}
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          mb: 5,
        }}
      >
        {zahraTeam.map((box, indx) => {
          return (
            <Grid item key={indx} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: `2px solid ${theme.palette.text.darkPink}`,
                  borderRadius: "10px",
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    width: "230px",
                    minHeight: "230px",
                    position: "relative",
                    mx: "auto",
                  }}
                >
                  <Image
                    src={
                      box.type == "female"
                        ? "https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/female.png"
                        : "https://raw.githubusercontent.com/DATA-Container-100/team-project-data/main/male.jpg"
                    }
                    alt="image can not be found"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      boxSizing: "border-box",
                    }}
                  />
                </Box>
                <Box sx={{ p: 1, textAlign: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      fontFamily: "Syne",
                      color: theme.palette.text.darkPink,
                      fontWeight: 700,
                    }}
                  >
                    {box.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <WhatsAppIcon
                      fontSize="small"
                      sx={{
                        mr: 1,
                        color: "#25d366",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Marcellus",
                        fontWeight: "600",
                        color: "#222",
                      }}
                    >
                      {box.phone}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <GoogleIcon
                      fontSize="small"
                      sx={{
                        mr: 1,
                        color: "#DB4437",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Marcellus",
                        fontWeight: "600",
                        color: "#222",
                      }}
                    >
                      {box.email}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SectionTwo;
