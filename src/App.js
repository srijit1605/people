import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import AddPeople from "./components/addPeople/AddPeople";
import { UserContext } from "./components/UserContext";
import Navbar from "./components/navbar/Navbar";
import image from './add.png';

function App() {
  const [index, setIndex] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState();
  const [country, setCountry] = useState("");
  const [profileImage, setProfileImage] = useState(
    image
  );
  const [userList, setUserList] = useState([{
    fullName : "Add New Member",
    profileImage : image
  }]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((response) => {
      const usersData = response.data.users;
      usersData.fullName? setUserList([...userList, usersData]): setUserList(userList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('test', userList);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <UserContext.Provider
          value={{
            index,
            setIndex,
            userList, 
            setUserList,
            profileImage,
            setProfileImage,
            fullName,
            setFullName,
            email,
            setEmail,
            phone,
            setPhone,
            dob,
            setDob,
            country,
            setCountry,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-people" element={<AddPeople />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
