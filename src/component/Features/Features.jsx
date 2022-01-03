import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './Features.css'

const Features = ({type}) => {
    return (
        <div className='features'>
					{type && (
						<div className="category">
							<span>{type === "movies"?"Movies":"Series"}</span>
							<select name="genre" id="genre">
								<option>Genre</option>
								<option value="adventure">Adventure</option>
								<option value="Comedy">Comedy</option>
								<option value="Crime">Crime</option>
								<option value="Fantasy">Fantasy</option>
								<option value="Historical">Historical</option>
								<option value="Horror">Horror</option>
								<option value="Romance">Romance</option>
								<option value="Sci-fi">Sci-fi</option>
								<option value="Thriller">Thriller</option>
								<option value="Western">Western</option>
								<option value="Animation">Animation</option>
								<option value="Drama">Drama</option>
								<option value="Documentary">Documentary</option>
							</select>
						</div>
					)}
				 <img src="" alt="home-image" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
					<div className="info">
						<img src="" alt="item-image" />
						<p className="desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci commodi dolor impedit ab doloremque rem, possimus perferendis, mollitia officiis ipsum aliquam incidunt ratione, iure quaerat ad at itaque sequi dolorem.
						</p>
						<div className="buttons">
							<button className="play">
								<PlayArrow/>
								<span>Play</span>
							</button>
							<button className="more">
								<InfoOutlined/>
								<span>Info</span>
							</button>
						</div>
					</div>
        </div>
    )
}

export default Features

