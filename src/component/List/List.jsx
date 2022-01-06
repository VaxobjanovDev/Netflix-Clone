import { ArrowBackIosOutlined } from '@mui/icons-material'
import ListItem from './ListItem/ListItem'
import './List.css'
import { useRef } from 'react'

const List = () => {

	let listRef = useRef(null)

	const handleClick = (side)=>{
		let distance = listRef.current.getBoundingClientRect().x-50
		if(side === "left"){
			listRef.current.style.transform = `translateX(${230 + distance}px)`
		}
		if(side === "right"){
			listRef.current.style.transform = `translateX(${-230 + distance}px)`
		}
	}

    return (
        <div className='list'>
          <span className="listTitle">Continue to watch</span>
					<div className="wrapper">
						<ArrowBackIosOutlined onClick={()=>handleClick("left")} className='sliderArrow left'/>
						<div ref={listRef} className="container">
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
							<ListItem/>
						</div>
						<ArrowBackIosOutlined onClick={()=>handleClick("right")} className='sliderArrow right'/>
					</div>
        </div>
    )
}

export default List
