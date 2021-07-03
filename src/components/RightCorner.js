import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGolbalContext } from "../context/Context";
import { useParams } from "react-router-dom";
const RightCorner = () => {
  const { id } = useParams();
  const { users } = useGolbalContext();
  const user = users[id - 1];
  // drop down card from bootstrap
  return (
    <div className="right-corner">
      <DropdownButton
        variant="none"
        id="dropdown-basic-button"
        menuAlign={{ lg: "left" }}
        title={
          <div style={{ width: "auto" }}>
            <div>
              <img
                className="thumbnail-image"
                src={user.profilepicture}
                style={{
                  width: "70px",
                  height: "50px",

                  borderRadius: "var(--radius)",
                }}
                alt="user pic"
              />
            </div>
            <div>{user.name}</div>
          </div>
        }
      >
        {users.map((item) => {
          return (
            <div key={item.id}>
              <Dropdown.Item>
                <img
                  src={item.profilepicture}
                  style={{
                    width: "30px",
                    height: "20px",
                    float: "left",
                    borderRadius: "var(--radius)",
                  }}
                  alt=""
                />

                <Link
                  style={{ textDecoration: "none", color: "grey" }}
                  to={`/users/${item.id}`}
                >
                  {item.name}
                </Link>
              </Dropdown.Item>
            </div>
          );
        })}
        <Link to="./">
          <button
            className="btn btn-danger btn-sm"
            style={{
              width: "100px",
              height: "30px",
              marginLeft: "50px",
              borderRadius: "var(--radius)",
            }}
          >
            sign out
          </button>
        </Link>
      </DropdownButton>
    </div>
  );
};

export default RightCorner;
