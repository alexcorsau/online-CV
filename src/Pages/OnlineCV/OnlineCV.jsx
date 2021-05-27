import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Portrait } from "../About/Portrait/Portrait";
import {user}  from "./Alex.js";
import skillsIcon from "./pencil.png" 
import workIcon from "./portfolio.png"
import studiesIcon from "./mortarboard.png"

import "./OnlineCV.css"


console.log(user);
console.log(Object.entries(user));
console.log(user.Introduction);
// user.forEach(element => {
//     console.log(element);
// });

export function OnlineCV(){

// const [user, setUser] = useState([userPersonalData]);
    // useEffect(() => {
    //     fetchData();
    // },[]);
    // console.log(userList);
    // userList[0].forEach(element=>{
    //     console.log(item[0],item[1]));
    // });
    // userList[0].map((item)=> console.log(item[0], item[1]));
    
    return(
            <Container fluid>
                <Row className="align-items-center">
                    <Col className="left-side col-md-3 offset-md-1">
                        <div className="portrait-cv">
                            <Portrait/>
                        </div>
                    </Col>
                    <Col className="right-side col-8">
                        <h1>Alex Corsau</h1>
                    </Col>
                </Row>
                {Object.entries(user.PersonalData).map(element => {
                    if(element[0]==="Email") {
                        let email=`mailto:${element[1]}`;
                        return(
                            <Row key={element[0]} className="personal-data">
                               <Col className="left-side col-md-3 offset-md-1"><p>{element[0]}:</p></Col>
                               <Col className="right-side col-md-8"><p><a href={email}>{element[1]}</a></p></Col>
                           </Row>
                            )}
                    else if(element[0]==="LinkedIn"||element[0]==="GitHub") {
                        return(
                            <Row key={element[0]} className="personal-data">
                               <Col className="left-side col-md-3 offset-md-1"><p>{element[0]}:</p></Col>
                               <Col className="right-side col-md-8"><p><a href={element[1]} target="_blank" rel="noreferrer">{element[1]}</a></p></Col>
                           </Row>
                            )}
                            else return(
                                <Row key={element[0]} className="personal-data">
                                    <Col className="left-side col-md-3 offset-md-1"><p>{element[0]}:</p></Col>
                                    <Col className="right-side col-md-8"><p>{element[1]}</p></Col>
                                </Row>
                            )
                    })
                }
                <Row className="introduction">
                    <Col>
                    <p>{user.Introduction}</p>
                    </Col>
                    
                </Row>
                <Row>
                    <Col className="col-2 icon-image">
                        <Image id="skills-icon" src={skillsIcon} alt="skills-img"></Image>
                    </Col>
                    <Col className="col-10">
                        <p>Skills</p>
                    </Col>
                </Row>
                {
                    user.Skills.map(element=>{
                        return(
                            <Row className="justify-content-between">
                                <Col className="col-md-5 offset-md-2"><p><li>{element}</li></p></Col>
                            </Row>
                        )
                    })
                }
                {
                    user.Education
                }
                
            </Container>
    )
}