import React from "react";
import FormControl from "../components/pages/FormControl";
import Hotels from "../components/pages/Hotels";
import Slider from "../components/pages/Slider";

const Home = () => {
  return (
    <div className="space-y-4">
      <div className="bg-indigo-500">
        <FormControl />
      </div>
      <Hotels />
      <Slider />
    </div>
  );
};

export default Home;
