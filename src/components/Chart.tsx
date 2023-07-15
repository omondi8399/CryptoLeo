import React, { useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { ChartComponent } from "./ChartComponent";

const Chart = ({ id }: { id: any }) => {
  const [chartData, setChartData] = useState();
  let { currency } = useContext(CryptoContext);
  const [type, setType] = useState<string>("prices");
  const [days, setDays] = useState<number>(7);

  useLayoutEffect(() => {
    const getChartData = async (id: string) => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
        )
          .then((res) => res.json())
          .then((json) => json);

        console.log("chart-data", data);

        let convertedData = data[type].map((item: any) => {
          return {
            date: new Date(item[0]).toLocaleDateString(),
            [type]: item[1],
          };
        });

        console.log(convertedData);
        setChartData(convertedData);
      } catch (error) {
        console.log(error);
      }
    };

    getChartData(id);
  }, [id, type, days]);

  interface TypeDetails {
    title: string;
    types: string;
    handleClick: () => void;
  }

  interface DaysDetails {
    title: string;
    days: number;
    handleClick: () => void;
  }

  const typeDetails: TypeDetails[] = [
    {
      title: "Price",
      types: "prices",
      handleClick: () => setType("prices"),
    },
    {
      title: "market caps",
      types: "market_caps",
      handleClick: () => setType("market_caps"),
    },
    {
      title: "total volumes",
      types: "total_volumes",
      handleClick: () => setType("total_volumes"),
    },
  ];

  const daysDetails: DaysDetails[] = [
    {
      title: "7D",
      days: 7,
      handleClick: () => setDays(7),
    },
    {
      title: "14D",
      days: 14,
      handleClick: () => setDays(14),
    },
    {
      title: "30D",
      days: 30,
      handleClick: () => setDays(30),
    },
  ];

  const typesBtn = typeDetails.map((btn: TypeDetails, index: number) => {
    return (
      <button
        key={index}
        onClick={btn.handleClick}
        className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
          type === btn.types ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
        }`}
      >
        {btn.title}
      </button>
    );
  });

  const daysBtn = daysDetails.map((btn: DaysDetails, index: number) => {
    return (
      <button
        key={index}
        onClick={btn.handleClick}
        className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
          days === btn.days ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
        }`}
      >
        {btn.title}
      </button>
    );
  });

  return (
    <div className="w-full h-[60%]">
      <ChartComponent data={chartData} currency={currency} type={type} />
      <div className="flex">
        {/* TODO: map the rest of the btns*/}
        {typesBtn}
        {daysBtn}
      </div>
    </div>
  );
};

export default Chart;
