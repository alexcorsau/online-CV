import "./About.css"
import { Portrait } from "./Portrait/Portrait"




export function About(){
    return(
        <div className="about"  >
           <aside className="about-portrait">
                <Portrait/>
           </aside>
           <article className="description">
                <h3>Description</h3>
                <p>
                    The description is just a paragraf hardcoded in HTML
                </p>
           </article>
        </div>
    )
}