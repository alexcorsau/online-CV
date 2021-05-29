import ReactPlayer from "react-player";
import "./Personal.css"

export function Personal(){
    return(
        <div>
            <q>Music expresses that which cannot be said and on which it is impossible to de silent
            </q>
            <p className="quote-owner">Victor Hugo</p>
            {/* <button>Reveal the music</button> */}
            <div className="player">
                <ReactPlayer playing url="https://www.youtube.com/watch?v=6EA-MIYY1bg&list=RD6EA-MIYY1bg&start_radio=1&rv=6EA-MIYY1bg&t=3" controls loop width="100%" height="150px"/>
            </div>
            <p>what is the size on the iframe?</p>
        </div>
        
    )
}