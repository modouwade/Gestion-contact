import React from "react";
import { HomeOutlined, UserAddOutlined } from "@ant-design/icons";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = ({ type }) => {
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div
            className={
              type === "list" ? "headerListItem" : " headerListItem active"
            }
          >
            <HomeOutlined />
            <Link to={"/"}>
              <span style={{ color: "white" }}>Accueil</span>
            </Link>
          </div>
          <div className="headerListItem ">
            <UserAddOutlined />
            <Link to={"/add"}>
              <span style={{ color: "white" }}>Ajouter</span>
            </Link>
          </div>
        </div>
        <h1 className="headerTitle">
          Une application développer pour la gestion des contacts
        </h1>
        <p className={type === "list" ? "headerDesc listMode" : "headerDesc"}>
          Ajouter, modifier et supprimer des contacts
        </p>
        <Link to={"/add"}>
          <button
            className={type === "list" ? "headerBtn listMode" : "headerBtn"}
          >
            Ajouter un contact
          </button>
        </Link>
      </div>
    </div>
  );
};
