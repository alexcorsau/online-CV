// import React, { useEffect, useState } from 'react';
// import emailjs from 'emailjs-com';
// import "./Contact.css"
// import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

// // import{ init } from 'emailjs-com';
// // init("user_WvMNmVXWN02GuqFs101UK");


// export function Contact(){
//     const [name,setName]=useState("");
//     const [email,setEmail] = useState("");
//     const [subject,setSubject] = useState("");
//     const [message,setMessage] = useState("");

//     useEffect(()=>{

//     });
//      function sendEmail(e) {
//         e.preventDefault();
    
//         emailjs.sendForm("service_ogzl7n4", "template_l3ln8ib", e.target, "user_WvMNmVXWN02GuqFs101UK")
//           .then((result) => {
//               console.log(result.text);
//               setName("");
//               setEmail("");
//               setSubject("");
//               setMessage("");
//           }, (error) => {
//               console.log(error.text);
//           });
//       }
    
//       return (
//         <form className="contact-form" onSubmit={sendEmail}>
//           <input type="hidden" name="contact_number" />
//           <label>Name</label>
//           <input type="text" name="user_name" />
//           <label>Email</label>
//           <input type="email" name="user_email" />
//           <label>Message</label>
//           <textarea name="message" />
//           <input type="submit" value="Send" />
//         </form>
    

//       );
//     }