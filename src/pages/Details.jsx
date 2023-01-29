import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HotelDetail from "../components/pages/HotelDetail";
import { DATA } from "../constants";

const Details = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-200 h-screen">
      <HotelDetail id={id} />
    </div>
  );
};

export default Details;
