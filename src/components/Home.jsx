import React, { useContext } from "react";
import "../App.css";
import CardView from "./CardView";
import { UserContext } from "./UserContext";

const Home = () => {
  const { userList } = useContext(UserContext);

  return (
    <div className="container">
      <h2>Welcome to the People's database</h2>
      <p>Checkout our people's database...</p>
      {/* <button type="button" onClick={handleClick}>Add people</button> */}
      <div className="gallery-style" style={{ display: "flex" }}>
        {userList.map((user, idx) => {
          return <CardView user={user} idx={idx} />;
        })}
      </div>
    </div>
  );
};

export default Home;
