import "./Portrait.css"
import photoAlex from "./alex.jpg"
import Image from "react-bootstrap/Image"

export function Portrait(){
    return(
            <Image src={photoAlex} alt="alex corsau" roundedCircle className="portrait-photo"/>
    )
}