import React from "react";
import Header from "../shared/header";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PublicLayout;
