import { ArrowBackIosOutlined } from "@mui/icons-material";
import ListItem from "./ListItem/ListItem";
import "./List.css";
import { useRef, useState } from "react";

const List = ({list}) => {
  const [isMoved, setIsMoved] = useState(false);
  const [silederNumber, setSliderNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth/230)

  let listRef = useRef(null); 

  const handleClick = (side) => {			
		setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (side === "left" && silederNumber > 0) {

      setSliderNumber(silederNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (side === "right" && silederNumber < 10-clickLimit) {
      setSliderNumber(silederNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="sliderArrow left"
					style={{display:!isMoved && "none"}}
        />
        <div ref={listRef} className="container">
          {list.content.map((item,index)=>(
            <ListItem key={index} index={index} item={item}/>
          ))}   
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
