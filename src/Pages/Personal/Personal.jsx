import ReactPlayer from "react-player";

export function Personal(){
    return(
        <div className="player">
            <p>This is the real me</p>
            <ReactPlayer playing url="https://www.youtube.com/watch?v=NuEghDO_j0o&list=RDNuEghDO_j0o&start_radio=1&rv=NuEghDO_j0o&t=16" controls loop width="100%" height="150px"/>
        </div>
    )
}