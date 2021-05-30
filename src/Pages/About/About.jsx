import { Portrait } from "./Portrait/Portrait";
import {user} from "../OnlineCV/Alex";

import "./About.css";

export function About(){
    return(
        <div className="about">
            <div className="portrait-about">
                <Portrait/>
            </div>
            
            <article className="description">
                {
                user.AboutMe.map(element=>(
                    <p key={element}>{element}</p>
                    ))
                }
                <hr/>
            </article>
            <article className="personal-info">
                <p>
                    {user.PersonalInfo}
                </p>
                <hr/>
            </article>
        </div>
    )
}