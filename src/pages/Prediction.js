import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Logo from "../components/Logo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Prediction() {
  const [chartData, setChartData] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [appleStockData, setAppleStockData] = useState(null);

  useEffect(() => {
    chartDataApi();
    newsDataApi();
    appleStockDataApi();
  }, []);

  const appleStockDataApi = () => {
    fetch(
      "https://finnhub.io/api/v1/quote?symbol=AAPL&token=co45md9r01qqksebpl8gco45md9r01qqksebpl90"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAppleStockData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const chartDataApi = () => {
    fetch(
      // "https://eodhd.com/api/eod/MCD.US?api_token=6607cc2f5bb8d3.28177759&fmt=json"
      "https://eodhd.com/api/eod/AAPL.US?api_token=66087a7719afc9.80524565&fmt=json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const labels = data.map((entry) => entry.date);
        const closePrices = data.map((entry) => entry.close);

        setChartData({
          labels,
          datasets: [
            {
              label: "Close Prices",
              data: closePrices,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const newsDataApi = () => {
    fetch(
      "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2024-03-24&to=2024-03-24&token=co45md9r01qqksebpl8gco45md9r01qqksebpl90"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        data = data.slice(0, 7);
        console.log(data);
        setNewsData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <>
      <Logo />
      <div className="container mx-auto">
        <div className="p-5 mt-3  bg-white w-full rounded-[30px]">
          <div className="flex justify-between px-3 py-3">
            <div className="flex gap-4">
              <img
                src={require("../assets/apple.png")}
                className=""
                width="70"
              />
              <div>
                <h2 className="text-[28px] font-bold">Apple</h2>
                <h6 className="text-zinc-700 text-[18px] mt-1 text-gray">
                  AAPL
                </h6>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <small className="text-[11px] bg-red text-white px-2 py-1 rounded-full">
                  {appleStockData?.d}%
                </small>
                <h2 className="text-[28px] font-bold">$ {appleStockData?.c}</h2>
              </div>
              <h6 className="text-gray mt-1 text-[15px] text-zinc-700 float-end">
                Last update at 14.30
              </h6>
            </div>
          </div>
          <hr className="w-full my-3 bg-gray-100" />

          <div className="flex justify-between px-3 my-8">
            <div>
              <p>Dates to forecast</p>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["SingleInputDateRangeField"]}>
                  <DateRangePicker
                    slots={{ field: SingleInputDateRangeField }}
                    name="allowedRange"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div>
              <p>Sort by</p>
              <div className="flex gap-1 mt-2">
                <button className="px-4 border border-1 py-1 rounded-full text-[12px]">
                  07 days{" "}
                </button>
                <button className="px-4 border border-1 py-1 rounded-full text-[12px]">
                  15 days{" "}
                </button>
                <button className="px-4 border border-1 py-1 rounded-full text-[12px]">
                  30 days{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9">
              <div className="w-full">
                {chartData ? (
                  <Line options={options} data={chartData} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            <div className="col-span-3">
              <div className="border h-full border-[#d6d6d6] px-3 py-4 w-full rounded-[10px]">
                <div className="flex w-full justify-between px-4 mb-3">
                  <p className="font-medium">Percentage Change:</p>
                  <p>{appleStockData?.dp}</p>
                </div>
                <div className="flex w-full justify-between px-4 mb-3">
                  <p className="font-medium">High Price:</p>
                  <p>{appleStockData?.h}</p>
                </div>
                <div className="flex w-full justify-between px-4 mb-3">
                  <p className="font-medium">Low Price:</p>
                  <p>{appleStockData?.l}</p>
                </div>
                <div className="flex w-full justify-between px-4 mb-3">
                  <p className="font-medium">Open Price:</p>
                  <p>{appleStockData?.o}</p>
                </div>
                <div className="flex w-full justify-between px-4">
                  <p className="font-medium">Previous Close Price:</p>
                  <p>{appleStockData?.pc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 mt-5  bg-white w-full rounded-[30px]">
          <h2 className="text-[32px] font-bold text-zinc-700">
            Reason for prediction
          </h2>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur. A amet vel in auctor. In
            tempus et viverra mollis. Viverra quisque orci nec risus nisl proin
            duis. Lorem ac praesent consectetur duis. Quam eget enim morbi arcu
            neque adipiscing nibh tortor laoreet. Quis enim vitae at nisi magna
            enim. Imperdiet neque sit porttitor odio iaculis. Sed congue
            pellentesque sit sit. Et ut tempus orci vitae feugiat dolor etiam.
            Mauris blandit amet vestibulum pellentesque euismod platea mauris
            neque curabitur. Viverra tellus fermentum velit tempor mattis sit
            integer. Quam dictum non eget bibendum. Eu accumsan tincidunt libero
            in integer eu elementum enim et. Volutpat lectus fermentum egestas
            tempus pellentesque. Enim.
          </p>
        </div>
      </div>
      {newsData && (
        <div className="pt-24 pb-16 mt-16 w-full bg-[#1f1f1f] text-white">
          <div className="container mx-auto">
            <h2 className="text-[40px] font-bold">Financial News</h2>
            <div class="grid grid-cols-3 gap-4 mt-4">
              {newsData.map(
                (news) =>
                  // Check if summary is available before rendering the news item
                  news.summary && (
                    <div className="px-8 py-4 mt-2 border border-[#4d4d4d] w-full rounded-[10px]">
                      <p className="my-4 text-[#767676] text-[12px]">
                        {news.source}
                      </p>
                      <h4
                        className="text-[20px] font-bold  overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {news.headline}
                      </h4>
                      <p
                        className="mt-4 text-[16px] overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          color: "#bbbbbb",
                        }}
                      >
                        {news.summary}
                      </p>
                      <p className="mt-8 text-[#767676] text-[12px]">
                        2024-03-24
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}

      <div className='bg-[#000] text-white py-4 text-center'>
        © 2024 InterSentiFore
      </div>
    </>
  );
}
