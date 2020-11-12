import React from "react";

import Search from "./search.js";
import City from "./city.js";
import Time from "./time.js";
import WeatherDescription from "./weatherdescription.js";
import Temperature from "./temperature.js";
import Image from "./image.js";
import Footer from "./footer.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <City />
      <Time />
      <WeatherDescription />
      <Image />
      <Temperature />
      <Footer />
    </div>
  );
}
