import React from "react";
import TableComponent from "../components/TableComponent";
import Logo from "../components/Logo";

const Stock = () => {
  return (
    <>
      <Logo />
      <TableComponent />
      <div className='bg-[#000] text-white py-4 text-center'>
        © 2024 InterSentiFore
      </div>
    </>
  );
};

export default Stock;
