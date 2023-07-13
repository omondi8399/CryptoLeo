import React from "react";

export const Credits = ({ className }: { className?: string }) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-between">
      <span className={`${className}`}>
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
    </div>
  );
};
