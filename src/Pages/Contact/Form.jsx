import { Component } from "react";
import { FormField } from "./FormField/FormField";
import { FormMessage } from "./FormMessage/FormMessage";
import { SendButton } from "./SendButton/SendButton";
import { ConfirmationMessage } from "./ConfirmationMessage/ConfirmationMessage";
import emailjs from "emailjs-com";

import "./Form.css";
export class Form extends Component {

    state = {
        name: "",
        email: "",
        message: "",
        nameIsValid: null,
        emailIsValid: null,
        messageIsValid: null,
        sentData: false
    }

    handleChange = (event,string) => {
        this.setState({[Object.keys(this.state).filter((item)=>item===string).toString()]:event.target.value});
        // console.log("this.state: ",this.state);
    }
    
    handleSend = () => {
        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        console.log("Send Button Pressed",this.state);
        if(this.state.name!=="") {
            this.setState({nameIsValid:true});
            } else {
                this.setState({nameIsValid:false});
                };
        if(emailPattern.test(this.state.email)) {
            this.setState({emailIsValid:true});
            } else {
                this.setState({emailIsValid:false});
                };
        if(this.state.message!=="") {
            this.setState({messageIsValid:true});
            } else {
                this.setState({messageIsValid:false});
                };
       
        if(this.state.name && emailPattern.test(this.state.email) && this.state.message) {
            console.log("form is valid and data is sent");
            this.setState({sentData:true});
            this.sendEmail();
        }

    }

    closeMessage=()=> {
        // console.log(Array.from(document.querySelectorAll("input")));
        Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
        Array.from(document.querySelectorAll("textarea")).forEach(input => (input.value = ""));
        this.setState({
            name: "",
            email: "",
            message: "",
            nameIsValid: null,
            emailIsValid: null,
            messageIsValid: null,
            sentData: false});
    }
    sendEmail=()=> {
        let templateParam = {
            to_name: "Alex",
            from_name: this.state.name,
            message: this.state.message
        }
        emailjs.send("service_ogzl7n4", "template_l3ln8ib",templateParam,"user_WvMNmVXWN02GuqFs101UK")
        // "user_WvMNmVXWN02GuqFs101UK"
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    render(){
        return (
            <div id="form-div">
                <div id="contact-form" className="contact-form">
                    <FormField 
                        key="name"
                        id="name"
                        label="Name" 
                        handleChange={this.handleChange}
                        invalid = {this.state.nameIsValid}
                    />
                    
                    <FormField 
                        key="email"
                        id="email"
                        label="Email" 
                        handleChange={this.handleChange}
                        invalid = {this.state.emailIsValid}
                    />

                    <FormMessage 
                        key="message"
                        id="message"
                        label="Message" 
                        handleChange={this.handleChange}
                        invalid = {this.state.messageIsValid}
                    />

                    <SendButton
                        handleSend={this.handleSend}
                    />

                    {this.state.sentData ? <ConfirmationMessage closeMessage={this.closeMessage}/> : null }
                    
                </div>
            </div>
        ) 
    }
}
    
