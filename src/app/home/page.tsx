import type { Metadata } from "next";
// Mui Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// Home Page Components
import SectionOne from "@/components/home/Section One/sectionOne";
import SectionTwo from "@/components/home/Section Two/sectionTwo";

export const metadata: Metadata = {
  title: "ZAHRA",
  description: "Graduation Project",
};

const HomePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "80vh",
            mt: 3,
          }}
        >
          <SectionOne />
          <Box sx={{ mt: 4 }}>
            <SectionTwo />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
