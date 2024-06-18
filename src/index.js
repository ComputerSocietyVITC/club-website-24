import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SplashScreen from "./components/ui/splashscreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SplashScreen />
    <section className="bg-gradient-to-t from-[#040414] to-[#0C192C]">
      <App />
    </section>
  </React.StrictMode>
);
