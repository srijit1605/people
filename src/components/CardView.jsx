import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "../App.css";

const CardView = ({ user, idx }) => {
  const {
    setIndex,
    setProfileImage,
    setFullName,
    setEmail,
    setPhone,
    setDob,
    setCountry,
  } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div
      className="card-style"
      style={
        idx
          ? {
              background: `url(${user?.profileImage})`,
              backgroundSize: "cover",
            }
          : null
      }
      onClick={() => {
        setProfileImage(user?.profileImage);
        setDob(user?.dob);
        setFullName(user?.fullName);
        setEmail(user?.email);
        setPhone(user?.phone);
        setCountry(user?.country);
        setIndex(idx);
        navigate("/add-people");
      }}
    >
      <div className="blur-hover">
        {!idx ? (
          <div className="img-align-style">
            <img
              src={user?.profileImage}
              height="200"
              alt={user?.fullName}
              title={user?.fullName}
            />
          </div>
        ) : (
          <div className="img-align-style">
            <img
              className="image-style-switch"
              src={user?.profileImage}
              height="200"
              alt={user?.fullName}
              title={user?.fullName}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {idx !== 0 && <div className="numbering">{idx}</div>}
          <div className="name-style-switch">{user?.fullName}</div>
        </div>
        <div className="other-style-switch">
          {idx !== 0 && "mail id:  "}
          <span style={{ fontWeight: "400", fontStyle: "italic" }}>
            {user?.email}
          </span>
        </div>
        <div className="other-style-switch">
          {idx !== 0 && "contact no:  "}
          <span style={{ fontWeight: "400", fontStyle: "italic" }}>
            {user?.phone}
          </span>
        </div>
        <div className="other-style-switch">
          {idx !== 0 && "Date of Birth:  "}
          <span style={{ fontWeight: "400", fontStyle: "italic" }}>
          {user?.dob}
          </span>
        </div>
        <div className="other-style-switch">
          {idx !== 0 && "Country code:  "}
          <span style={{ fontWeight: "400", fontStyle: "italic" }}>
            {user?.country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardView;
