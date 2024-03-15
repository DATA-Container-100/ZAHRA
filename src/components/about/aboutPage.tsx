"use client";
// Contact page Components
import SectionHeader from "@/global/section Header/sectionHeader";
import SectionOne from "./Section One/sectionOne";
import SectionTwo from "./Section Two/sectionTwo";
// Mui Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Theme, useTheme } from "@mui/material";

const AboutUsPage = () => {
  const theme: Theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "80vh",
            mt: 3,
          }}
        >
          <SectionHeader
            mainTxt1="The Best Real"
            mainTxt2="Estate Out There"
            subTxt="Know More About ZAHRA Family"
            imgSrc="/images/AboutUs.svg"
          />
          <SectionOne />
          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: theme.palette.text.darkPink,
              },
            }}
          >
            <Chip
              label="ZAHRA Team"
              size="small"
              style={{
                color: theme.palette.text.darkPink,
                fontWeight: "600",
                textTransform: "uppercase",
                fontFamily: "Marcellus",
              }}
            />
          </Divider>
          <SectionTwo />
        </Box>
      </Container>
    </>
  );
};

export default AboutUsPage;
