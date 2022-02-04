import {ArrowBackOutlined} from "@mui/icons-material"
import video from './video.mp4'
import './Watch.css'

const Watch = ()=>{
    return(
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            <video className="video" src={video} progress autoPlay controls />
        </div>
    )
}

export default Watch;