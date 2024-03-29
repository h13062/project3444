import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const apiServerEndpoint = "/api/";

  // const [testedArray, setTestedArray] = useState(null);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://localhost:7169" + apiServerEndpoint + "user", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="full-page">
      <div className="Wrapper">
        <div className="header-content">
          <div className="Logo">
            <h1>NON-EXISTENT RESTURANT</h1>
          </div>
          <div className="Logo-p">
            <p>An authentic Vietnamese culinary experience</p>
          </div>
          <div className="button-space">
            <div className="left-button">
              <Link to="/menu">
                <button type="button">View Menu</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
