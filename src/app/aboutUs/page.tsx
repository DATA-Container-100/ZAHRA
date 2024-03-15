import AboutUsPage from "@/components/about/aboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZAHRA - About Us",
  description: "Graduation Project",
};

const AboutUs = () => {
  return (
    <>
      <AboutUsPage />
    </>
  );
};

export default AboutUs;
