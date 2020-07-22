import React, { useState } from "react";
import axios from "axios";

function Contact() {

    const email = "chri3na@gmail.com"
    const message = "Click to Show Email";
    const [state, setState] = useState({email: "", message: message});
    const [toggle, setToggle] = useState(false);
    const resetForm = () => {
        document.getElementById("contact-form").reset();
    }

    const handleSubmit = e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log("this is message from handleSubmit: ", message);
        axios.post("/send", {
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            console.log(response.data);
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    };

    const showEmail = () => {
        if(toggle) {
            setToggle(false);
            setState({...state, email: "", message: message});
        } else {
            setToggle(true);
            setState({...state, email: email, message: "Click to Hide Email"});
        }
    }

    // const copyEmail = () => {
    //     email.document.execCommand("copy");
    //     alert("email copied to clipboard!");
    // }

    return (
        <section id="contact" className="section category">
            <div className="container">
                {/* <div className="section"> */}
                    <div className="header notification">
                        <h1 className="title is-5">
                            Connect with me
                        </h1>
                        
                        <div className="field is-grouped">
                            <div className="control">
                                <a className="button is-info" href="https://www.linkedin.com/in/christinesodium122/" target="_blank" rel="noopener noreferrer">
                                    <span className="icon is-large">
                                        <i className="fab fa-2x fa-linkedin-in"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="control">
                                <a className="button is-dark" href="https://github.com/crispysodium" target="_blank" rel="noopener noreferrer">
                                    <span className="icon is-large">
                                        <i className="fab fa-2x fa-github"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="control">
                                <button className="button is-warning" onClick={showEmail}>{state.message}</button>
                            </div>
                            <div className="control">
                                <button className="button is-light">{state.email}</button>
                                {/* <button className="button is-dark" onClick={copyEmail}>Copy</button> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="box">
                        <h1 className="title">Send me a message</h1>

                        <form id="contact-form" type="submit" onSubmit={handleSubmit} method="POST">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" id="name"/>
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="text" id="email"/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea className="textarea" id="message"></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">Send</button>
                                </div>
                            </div>
                        </form>
                    </div> */}
                {/* </div> */}
            </div>
        </section>
        
    );
}

export default Contact;