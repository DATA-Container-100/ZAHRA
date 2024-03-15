import ContactPage from "@/components/contact/contactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZAHRA - Contact Us",
  description: "Graduation Project",
};

const ContactUs = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default ContactUs;
