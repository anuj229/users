import React from "react";
import { useParams } from "react-router-dom";
import { useGolbalContext } from "../context/Context";
import Links from "./Links";
import RightCorner from "./RightCorner";
import "../new.css";

const SingleUser = () => {
  const { id } = useParams();

  const { users } = useGolbalContext();
  const user = users[id - 1];

  return (
    <>
      <RightCorner />
      <div style={{ marginTop: "10px;" }}>
        <Links />
      </div>
      <section className="section cocktail-section">
        <h2 className="section-title">{user.name}</h2>
        <div className="drink">
          <img
            src={user.profilepicture}
            style={{ border: "2px solid black", borderRadius: "100px" }}
            alt={user.name}
          ></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">username :</span> {user.username}
            </p>
            <p>
              <span className="drink-data">email :</span> {user.email}
            </p>
            <p>
              <span className="drink-data">phone :</span> {user.phone}
            </p>
            <p>
              <span className="drink-data">website :</span> {user.website}
            </p>
            <p>
              <span className="drink-data">street :</span>
              {user.address.street}
            </p>
            <p>
              <span className="drink-data">suite :</span> {user.address.suite}
            </p>
            <p>
              <span className="drink-data">city :</span> {user.address.city}
            </p>

            <p>
              <span className="drink-data">Zipcode :</span>{" "}
              {user.address.zipcode}
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31106.166254992906!2d77.6133776229436!3d12.954517008640543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625227623972!5m2!1sen!2sin"
          style={{
            width: "400px",
            height: "200px",
            marginLeft: "200px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        ></iframe>
      </section>
    </>
  );
};

export default SingleUser;
