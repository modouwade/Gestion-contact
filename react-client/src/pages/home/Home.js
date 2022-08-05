import React from "react";
import { Header } from "../../components/header/Header";
import ListContact from "../../components/listContact/ListContact";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Liste des contacts</h1>
        <ListContact />
      </div>
    </div>
  );
}

export default Home;
