import React, { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Characters from "../components/Characters";

// const developmentDetectives = "http://localhost:3000/detectives"
// const developmentPerps = "http://localhost:3000/perps"
const deploymentDetectives =
  "https://law-and-order-api.herokuapp.com/detectives/";
const deploymentPerps = "https://law-and-order-api.herokuapp.com/perps/";

export default function FrontPage() {
  const [detectives, setDetectives] = useState([]);
  const [perps, setPerps] = useState([]);

  useEffect(() => {
    fetch(deploymentDetectives)
      .then((response) => response.json())
      .then((result) => setDetectives(result));
  }, []);
  useEffect(() => {
    fetch(deploymentPerps)
      .then((response) => response.json())
      .then((result) => setPerps(result));
  }, []);

  return (
    <>
      <section className="frontpage-top">
        <h1 className="svu-frontpage-title">The Law and Order SVU API</h1>
      </section>

      <div className="container">
        <div className="character-selection-container">
          <a
            className="character-selection button"
            href="/frontpage/"
            style={{ color: "white" }}
          >
            detectives
          </a>
          <a
            className="character-selection button"
            href="/frontpage/perps"
            style={{ color: "white" }}
          >
            perps
          </a>
        </div>

        <section>
          <Switch>
            <Route
              exact
              path="/frontpage/"
              render={(props) => (
                <Characters {...props} detectives={detectives} />
              )}
            />
            <Route
              exact
              path="/frontpage/perps"
              render={(props) => <Characters {...props} perps={perps} />}
            />
          </Switch>
        </section>
      </div>
    </>
  );
}
