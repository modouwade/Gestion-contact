import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import "./about.css";
import logo from "../../image/avatar.png";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(error);

  const baseUrl = "http://localhost:8800/api/contacts/";
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const getContact = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl + `find/${id}`);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContact();
  }, []);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="List">
        {loading ? (
          "Changement..."
        ) : (
          <div className="ListItem">
            <img src={logo} alt="" className="pListImg" />
            <div className="ListTitles">
              <h2>Nom: {data.nom}</h2>
              <h2>Prenom: {data.prenom}</h2>
              <h2>Téléphone: {data.numero}</h2>
              <h2>Email: {data.email}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
