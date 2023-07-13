// @ts-ignore
import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CryptoContext } from "../context/CryptoContext";

const SearchInput = ({ handleSearch }: any) => {
  const [searchText, setSearchText] = useState("");
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  let handleInput = (e: any) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin: any) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  return (
    <>
      <form
        className="w-full md:w-80 relative font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="rounded bg-gray-200
        placeholder:text-gray-100 pl-2 required outline-0 border border-transparent w-full py-1 focus:border-cyan"
          placeholder="search here..."
        />
        <button
          type="submit"
          className="absolute z-10 top-[15%] right-2 cursor-pointer text-cyan hover:text-white"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul
          className="absolute top-11 w-64 md:w-96 h-96 rounded
overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 z-20
backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200
"
        >
          {searchData ? (
            searchData.map((coin: any) => {
              return (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="w-[1rem] h-[1rem] mx-1.5"
                    src={coin.thumb}
                    alt={coin.name}
                  />

                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div
              className="w-full h-full flex justify-center items-center
            "
            >
              <div
                className="w-8 h-8 border-4 border-cyan rounded-full
            border-b-gray-200 animate-spin
            "
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val: any) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
