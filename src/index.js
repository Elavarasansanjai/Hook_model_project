import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvder } from "./components/store/auth-context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvder>
    <App />
  </AuthContextProvder>
);
