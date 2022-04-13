import React, { useEffect, useState } from "react";
import Features from "../../component/Features/Features";
import Navbar from "../../component/Navbar/Navbar";
import List from "../../component/List/List";
import axios from "axios";
import "./Home.css";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
            },
          }
        );
        console.log(res.data);
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home-section">
      <Navbar />
      <Features type={type} setGenre={setGenre}/>
      {lists.map((list)=>(
        <List key={list._id} list={list}/>
      ))}
    </div>
  );
};

export default Home;
