import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { DemoCarousel } from "./Carousel/Carousel";
import muteIcon from "./mute.png"
import unmuteIcon from "./unmute.png"

import "./Personal.css"


export function Personal(){
    const [mute,setMute] = useState(false);
    const handleMute=()=>{
        setMute(!mute);
    };
    // useEffect();
    return(
        <div className="personal-div">
            <div className="quote-div">
                <q>Music expresses that which cannot be said and on which it is impossible to be silent</q>
                <p className="quote-owner">Victor Hugo</p>
            </div>
            
            
            <div className="player">
                <ReactPlayer playing url="https://www.youtube.com/watch?v=6EA-MIYY1bg&list=RD6EA-MIYY1bg&start_radio=1&rv=6EA-MIYY1bg&t=3" controls loop width="100%" height="150px" volume="0.2" muted={mute}/>
            </div>
            <DemoCarousel/>
            <div className="video-options">
                <button id="volume" onClick={handleMute}><img src={mute?unmuteIcon:muteIcon} alt="oups"></img></button>
                <a href="https://www.youtube.com/watch?v=6EA-MIYY1bg&list=RD6EA-MIYY1bg&start_radio=1&rv=6EA-MIYY1bg&t=3" target="_blank" rel="noreferrer" className="link-to-youtube">Listen more</a>
               
            </div>
        </div>
    )
}