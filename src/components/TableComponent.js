import React, { useState, useEffect } from "react";

const TableComponent = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    stockDataApi();
  }, []);

  const stockDataApi = () => {
    fetch(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.most_actively_traded);
        const sortedStockData = data.most_actively_traded.sort((a, b) => {
          return a.ticker.localeCompare(b.ticker);
        });
        setStockData(sortedStockData);
      });
  };

  return (
    <div className="container mx-auto">
      <table className="w-full table-auto my-8">
        <thead
          className="ont-black text-[20px] border-b border-[#d6d6d6]
                "
        >
          <tr>
            <th className="py-4 bg-[#f6f6f6]">Ticker</th>
            <th className="py-4 bg-[#f6f6f6]">Price</th>
            <th className="py-4 bg-[#f6f6f6]">Total Volume</th>
            <th className="py-4 bg-[#f6f6f6]">Market Cap Change (%)</th>
            <th className="py-4 bg-[#f6f6f6]">Change Amount</th>
          </tr>
        </thead>
        <tbody>
          {stockData.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4">
                Loading...
              </td>
            </tr>
          )}
          {stockData.map((stock) => (
            <tr className="text-center text-base border-b border-[#d6d6d6] last:border-b-0">
              <td className="py-4">{stock.ticker}</td>
              <td className="py-4">{stock.price}</td>
              <td className="py-4">{stock.volume}</td>
              <td className="py-4">{stock.change_percentage}</td>
              <td className="py-4">{stock.change_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
