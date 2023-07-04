import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";
import useScreenSize from "../hooks/useScreenSize";

const Home = () => {
  // const screenSize = useScreenSize();s
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main
            className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-white font-nunito
    "
          >
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
            {/* DoNotDelete This is for refactoring during development */}
            {/* <p className="fixed top-4 right-4 font-semibold text-red text-lg">
              {screenSize}
            </p> */}
            <Logo />
            <Navigation />
            <Outlet />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
