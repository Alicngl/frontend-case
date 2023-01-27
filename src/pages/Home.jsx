import React from "react";
import FormControl from "../components/pages/FormControl";
import Slider from "../components/pages/Slider";

const Home = () => {
  return (
    <div className="space-y-4">
      <div className="bg-indigo-500">
        <FormControl />
      </div>
      <Slider />
    </div>
  );
};

export default Home;
