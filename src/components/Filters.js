import React, { useContext, useRef } from "react";
import Search from "./Search";
// import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight, faChevronDown, faRotate} from '@fortawesome/free-solid-svg-icons'

import { CryptoContext } from "./../context/CryptoContext";

const Filters = () => {
  let { setCurrency, setSortBy, resetFunction } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  return (
    <div className=" w-full border-2 border-gray-100 rounded-lg py-2 px-2 flex items-start md:flex-row md:items-center md:justify-between flex-col gap-4 flex-wrap">
      <Search />
      <div className="flex flex-col gap-4 md:flex-row md:justify-between ">
        <form
          className="flex items-center gap-3 sm:gap-2 w-full sm:w-auto justify-between"
          onSubmit={handleCurrencySubmit}
        >
          <label htmlFor="currency" className="font-bold">
            currency:{" "}
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            placeholder="usd"
            className="w-full sm:w-1/2 rounded bg-gray-200 placeholder:text-gray-100 required border border-hidden focus:border-cyan leading-4 pl-2 py-1"
          />
          <button type="submit" className="cursor-pointer text-cyan hover:text-white">
          <FontAwesomeIcon icon={faSquareArrowUpRight} />
            {/* <img src={submitIcon} alt="submit" className=" h-auto" /> */}
          </button>
        </form>
        <div className="flex items-center gap-2">
          <span className="font-bold">sort by: </span>
          <div className="bg-gray-200 px-2 py-1 flex flex-row items-center gap-1">
            <select
              name="sortby"
              onClick={handleSort}
              className="rounded bg-gray-200 text-base leading-4 capitalize focus:outline-0 py-1 w-40 md:max-w-72 pl-3 appearance-none"
            >
              <option value="market_cap_desc">market cap desc</option>
              <option value="market_cap_asc">market cap asc</option>
              <option value="volume_desc">volume desc</option>
              <option value="volume_asc">volume asc</option>
              <option value="id_desc">id desc</option>
              <option value="id_asc">id asc</option>
              <option value="gecko_desc">gecko desc</option>
              <option value="gecko_asc">gecko asc</option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} className="text-cyan hover:text-white" />
          </div>
        </div>
        <button
          className="w-[2rem]  hover:scale-110 transition-all transition-ease relative text-cyan hover:text-white"
          onClick={resetFunction}
        >
          <FontAwesomeIcon icon={faRotate} />
          
        </button>
      </div>
    </div>
  );
};

export default Filters;
