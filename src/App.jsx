import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./styles/style.css";
import PageTitle from "./components/PageTitle";



export default function App() {
  const location = useLocation();

  return (
    <div className="page-wrapper">
      <Navbar />
      <AnimatedRoutes/>
    </div >
  );
}
