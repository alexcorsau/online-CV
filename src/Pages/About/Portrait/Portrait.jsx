import photoAlex from "./alex.jpg"
import Image from "react-bootstrap/Image"

import "./Portrait.css"

export function Portrait(){
    return(
            <Image src={photoAlex} alt="alex corsau" roundedCircle className="portrait-photo"/>
    )
}