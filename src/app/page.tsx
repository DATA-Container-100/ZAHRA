import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "ZAHRA",
  description: "Graduation Project",
};

const Home = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
