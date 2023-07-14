import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Pagination from "./Pagination";
import { Credits } from "./Credits";
import { SaveButton } from "./SaveButton";

const TableComponent = () => {
  let { cryptoData, currency, error } = useContext(CryptoContext);

  return (
    <>
      <div className="flex flex-col mt-9 border border-gray-100 rounded">
        {cryptoData ? (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead
                className="capitalize text-base text-gray-100 
            font-medium border-b border-gray-100"
              >
                <tr>
                  {[
                    "asset",
                    "name",
                    "price",
                    "total volume",
                    "market cap change",
                    "1H",
                    "24H",
                    "7D",
                  ].map((table: string, index: number) => {
                    return (
                      <th key={index} className="py-1">
                        {table}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((data: any) => {
                  return (
                    <tr
                      key={data.id}
                      className="text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0"
                    >
                      <td>
                        <div className="py-4 flex items-center gap-2 uppercase">
                          <SaveButton data={data} />
                          <img
                            className="w-[1.2rem] h-[1.2rem] mx-1.5"
                            src={data.image}
                            alt={data.name}
                          />
                          <span>
                            <Link
                              to={`/${data.id}`}
                              className="cursor-pointer hover:text-cyan transition-colors"
                            >
                              {data.symbol}
                            </Link>
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Link
                          to={`/${data.id}`}
                          className="cursor-pointer hover:text-cyan transition-colors"
                        >
                          {data.name}
                        </Link>
                      </td>
                      <td className="py-4 px-6">
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: currency,
                        }).format(data.current_price)}
                      </td>
                      <td className="py-4 px-6">{data.total_volume}</td>
                      <td className="py-4 px-6">
                        {data.market_cap_change_percentage_24h}%
                      </td>
                      <td
                        className={
                          data.price_change_percentage_1h_in_currency > 0
                            ? "text-green py-4 px-6 "
                            : "text-red py-4 px-6 "
                        }
                      >
                        {Number(
                          data.price_change_percentage_1h_in_currency,
                        ).toFixed(2)}
                      </td>
                      <td
                        className={
                          data.price_change_percentage_24h_in_currency > 0
                            ? "text-green py-4 px-6 "
                            : "text-red py-4 px-6  "
                        }
                      >
                        {Number(
                          data.price_change_percentage_24h_in_currency,
                        ).toFixed(2)}
                      </td>
                      <td
                        className={
                          data.price_change_percentage_7d_in_currency > 0
                            ? "text-green py-4 px-6  "
                            : "text-red py-4   px-6"
                        }
                      >
                        {Number(
                          data.price_change_percentage_7d_in_currency,
                        ).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : !error.data && !error.search ? (
          <div className="w-full min-h-[50vh] flex justify-center items-center">
            <div
              className="w-8 h-8 border-4 border-solid border-cyan rounded-full border-b-gray-200 animate-spin"
              role="status"
            />
            <span className="text-base ml-2">please wait...</span>
          </div>
        ) : error.data || error.search ? (
          <h1 className="min-h-[60vh] text-lg text-red flex items-center justify-center ">
            {error.data
              ? error.data
              : error.search
              ? error.search
              : "Something unexpected happened!"}
            {/* Here we have use multi chain conditions using ternary operator/ this is not
              covered in the video but for the example and some improvements */}
          </h1>
        ) : null}
      </div>
      <div className="flex items-center justify-between md:flex-row mt-20 md:mt-10 capitalize h-[2rem] flex-col-reverse gap-x-5">
        <Credits /> <Pagination />
      </div>
    </>
  );
};

export default TableComponent;
