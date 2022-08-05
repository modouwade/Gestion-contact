import React from "react";
// import "../App.css";
// import { ContactsOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="container-fluid">
//       <div className="header">
//         <div className="logo">
//           <ContactsOutlined
//             style={{ fontSize: "50px", color: "white", marginRight: "10px" }}
//           />
//           <a href="http://google.com" style={{ color: "white" }}>
//             Gestion des contacts
//           </a>
//         </div>
//         <div className="mobileHidden">
//           <div className="contentLink">
//             <Link className="linked" to="/">
//               Accueil
//             </Link>
//             <Link className="linked" to="/add">
//               Ajouter
//             </Link>
//             <Link className="linked" to="/about">
//               Detail
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import "./navbar.css";
import { ContactsOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <ContactsOutlined style={{ fontSize: "30px" }} />
          <span className="logo">Gestion des contacts</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
