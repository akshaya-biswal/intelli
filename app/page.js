import PublicLayout from "@/components/layout/public-layout";
import HomePageContainer from "@/containers/home-page";
import React from "react";

const Home = () => {
  return (
    <PublicLayout>
      <HomePageContainer />
    </PublicLayout>
  );
};

export default Home;
