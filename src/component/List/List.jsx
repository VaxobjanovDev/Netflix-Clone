import { ArrowBackIosOutlined } from "@mui/icons-material";
import ListItem from "./ListItem/ListItem";
import "./List.css";
import { useRef, useState } from "react";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [silederNumber, setSliderNumber] = useState(0);

  let listRef = useRef(null);

  const handleClick = (side) => {			
		setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (side === "left" && silederNumber > 0) {

      setSliderNumber(silederNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (side === "right" && silederNumber < 5) {
      setSliderNumber(silederNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="sliderArrow left"
					style={{display:!isMoved && "none"}}
        />
        <div ref={listRef} className="container">
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />  
          <ListItem index={10} />   
        </div>
        <ArrowBackIosOutlined
          onClick={() => handleClick("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
};

export default List;
