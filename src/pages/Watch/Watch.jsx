import { ArrowBackOutlined } from "@mui/icons-material";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Watch.css";

const Watch = () => {
  const location = useLocation();
  const movie = location.state;
  useEffect(() => {}, [movie]);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        src={movie.video}
        progress="true"
        autoPlay
        controls
      />
    </div>
  );
};

export default Watch;
