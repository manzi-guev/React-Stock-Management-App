import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h2 className="item-header">Welcome to Stock Management</h2>
      <br></br>
      <Link to="/additem" className="link-button">
        Add Items
      </Link>
    </div>
  );
}

export default Landing;
