import { Portrait } from "./Portrait/Portrait";
import {useEffect, useState} from "react";
import { alexCorsau } from "../Personal/resources";

import "./About.css";

export function About(){
    const [user,setUser]=useState(alexCorsau);

    // const getData=()=>{
    //   fetch('./../Resources/alex.json')
    //     .then(r=>r.json())
    //     .then(json=>setUser(json));
    // }
    
    // useEffect(()=>{
    //   getData()
    // },[]);
    return(user!==null ? 
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
    : <p>"bad job at fetching data"</p>)
}