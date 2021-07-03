import React from "react";
import { useGolbalContext } from "../context/Context";
import { Link } from "react-router-dom";
import "../index.css";
// landing page where all the cards fetched from api
const LandingPage = () => {
  const { users } = useGolbalContext();
  return (
    <>
      <section className="followers">
        <div className="container">
          {users.map((user) => {
            return (
              <Link key ={user.id} to={`/users/${user.id}`}>
                <article className="card">
                  <img src={user.profilepicture} />
                  <h4>{user.name}</h4>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
