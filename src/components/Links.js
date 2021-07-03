import React from "react";
import { useParams } from "react-router-dom";
import { useGolbalContext } from "../context/Context";
import { Link } from "react-router-dom";

const Links = () => {
  const { id } = useParams();
  const { users } = useGolbalContext();
  const user = users[id - 1];
  return (
    <>
      <Link to={`/users/${user.id}`} className="btn btn-success mx-3 ">
        Profile
      </Link>
      <Link to={`/users/${user.id}/post`} className="btn btn-success mx-3">
        Post
      </Link>
      <Link to={`/users/${user.id}/gallery`} className="btn btn-success mx-3">
        Gallery
      </Link>
      <Link to={`/users/${user.id}/todo`} className="btn btn-success mx-3">
        Todo
      </Link>
      <Link to="/" className="btn btn-success">
        back home
      </Link>
    </>
  );
};

export default Links;
