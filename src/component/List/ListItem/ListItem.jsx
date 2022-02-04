import { Add, PlayArrow, Rtt, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { useState } from 'react'
import Paris from '../../../assests/paris.jpg' 
import './ListItem.css'

const ListItem = ({index}) => {
  const [isHover, setIsHover] = useState(false)
  const trailer = ''
    return (
        <div className='list-item' style={{left:isHover && index*225-50+index*2.5}} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
          <img src={Paris} alt="sdadas" />
          {isHover && (
            <>
          <video src={trailer} autoPlay={true} loop/>
          <div className="itemInfo">
           <div className="icons">
           <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpAltOutlined className="icon"/>
            <ThumbDownAltOutlined className="icon"/>
           </div>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 44 mins</span>
            <span className="limit">16+</span>
            <span>1996</span>
          </div>
          <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at quod soluta cum assumenda eos.</div>
          <div className="genre">Action</div>
        </>
        )}
      </div>    
    )
}

export default ListItem
