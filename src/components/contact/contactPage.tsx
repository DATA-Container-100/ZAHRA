"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
// Contact page Components
import SectionHeader from "@/global/section Header/sectionHeader";
import CallInfo from "@/components/contact/callInfo/callInfo";
import ContactForm from "@/components/contact/form/contactForm";
// Mui Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Theme, useTheme } from "@mui/material";

const ContactPage = () => {
  const ContactMap = useMemo(
    () =>
      dynamic(() => import("@/components/contact/map/contactMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
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
            mainTxt1="contact us to"
            mainTxt2="find out more"
            subTxt="we will be happy to assist"
            imgSrc="/images/contact.svg"
          />
          <CallInfo />
          <Grid container spacing={3} sx={{ my: 5 }}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                mb: 4,
                [theme.breakpoints.up("md")]: {
                  mb: 0,
                },
              }}
            >
              <ContactForm />
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                mb: 3,
                [theme.breakpoints.up("md")]: {
                  mb: 0,
                },
              }}
            >
              <ContactMap />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;
