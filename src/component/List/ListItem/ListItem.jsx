import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ index, item }) => {
  const [isHover, setIsHover] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [item]);
  console.log(movie.imgSm)
  return (
    <Link to="/watch" state={movie}>
    <div
      className="list-item"
      style={{ left: isHover && index * 250 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={movie.imgSm} alt="list movie" />
      {isHover && (
        <>
          <video src={movie.video} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">{movie.limit}+</span>
            <span>{movie.year}</span>
          </div>
          <div className="desc">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
        </>
      )}
    </div>
  </Link>
  );
};

export default ListItem;
