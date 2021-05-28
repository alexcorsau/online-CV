import ReactPlayer from "react-player";

export function Personal(){
    return(
        <div className="player">
            <p>This is the real me</p>
            <ReactPlayer playing url="https://www.youtube.com/watch?v=6EA-MIYY1bg" controls loop width="100%" height="150px"/>
        </div>
    )
}