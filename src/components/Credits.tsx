/* eslint-disable no-lone-blocks */
import React from "react";

export const Credits = ({ className }: { className?: string }) => {
  {
    /*TODO: declare types*/
  }
  interface Details {
    links: {
      gecko: string;
      dev: string;
    };
    title: {
      prov: string;
      gecko: string;
      made: string;
      name: string;
    };
  }

  const details: Details = {
    links: {
      gecko: "http://www.coingecko.com",
      dev: "https://devrojas.vercel.app",
    },
    title: {
      prov: "Data provided by",
      gecko: "CoinGecko",
      made: "Site made by",
      name: "DevRojas",
    },
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-between mt-5 sm:mt-0">
      <span className={`${className}`}>
        {details.title.prov}{" "}
        <a
          className="text-cyan"
          href={details.links.gecko}
          rel="noreferrer"
          target="_blank"
        >
          {details.title.gecko}
        </a>
      </span>
      <span>
        {details.title.made}{" "}
        <a
          className="text-cyan"
          href={details.links.dev}
          rel="noreferrer"
          target="_blank"
        >
          {details.title.name}
        </a>
      </span>
    </div>
  );
};
