import React from "react";

export const Credits = () => {
  return (
    <>
      <span className="mt-4 md:mt-0">
        Data provided by{" "}
        <a
          className="text-cyan"
          href="http://www.coingecko.com"
          rel="noreferrer"
          target="_blank"
        >
          CoinGecko
        </a>
      </span>
      <span>
        Site made by{" "}
        <a
          className="text-cyan"
          href="https://devrojas.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          DevRojas
        </a>
      </span>
    </>
  );
};
