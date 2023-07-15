import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import PageSwitch from "./PageSwitch";
import { PerPage } from "./PerPage";

const Pagination = () => {
  let { perPage, cryptoData } = useContext<any>(CryptoContext);

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center justify-between flex-col-reverse sm:flex-row mb-5 sm:mb-0">
        <PerPage />
        <PageSwitch />
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
