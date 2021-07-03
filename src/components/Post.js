import React from "react";
import Links from "./Links";
import RightCorner from "./RightCorner";
const Post = () => {
  return (
    <>
      <div style={{ marginTop: "24px" }}>
        <Links />
        <section className="section cocktail-section">
          <div style={{ marginTop: "-139px" }}>
            <RightCorner />
          </div>
          <div style={{ marginTop: "139px" }}>
            <h1>coming soon </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Post;
