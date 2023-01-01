import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import $ from "jquery";
import Login from './Login';

function Emailvalidation() {

    const [token, setToken] = useState('');    
    const [loading, setLoading] = useState(false);
    const [login, setlogin] = useState(false);
    
    
    function Validateemail(e) {

        setLoading(true);
        
        e.preventDefault();

        let item = {token};

        fetch("http://localhost:8000/api/emailvaladation", {
            method: 'POST',
            headers: {
                "content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        })
            .then((response) => response.text())
            .then((text) => {                
                setLoading(false); 

                var validres = (text.replace(/"/g, ""));                

                if (validres === "valid") {
                    document.getElementById("validresult").innerHTML = "<b>Your Email Account Validate Successfully !</b>";
                    var validsuccess = document.getElementById("validresult");
                    var validerror = document.getElementById("validresult");
                    validsuccess.classList.add("success");
                    validerror.classList.remove("error");

                    setTimeout(function () {
                        $("#validemail").fadeOut(2000);
                    }, 2000);

                    setlogin(true);

                }

                if (validres === "invalid") {
                    document.getElementById("validresult").innerHTML = "<b>Your Email Account Not Yet Validate !</b>";
                    var validsuccess1 = document.getElementById("validresult");
                    var validerror1 = document.getElementById("validresult");                    
                    validerror1.classList.add("error");
                    validsuccess1.classList.remove("success");
                }

            })
            .catch((error) => {

                setLoading(false);

                document.getElementById("validresult").innerHTML = "<b>There is an Error !</b> <br />Try Again Later";
                var validdataerror = document.getElementById("validresult");
                validdataerror.classList.add("error");
            });
    }

    return (
        <div>
            <div className="col-sm-6 offset-sm-3 signup-form" id="validemail">
                <h2 className="form-heading">Validate Your Email Account</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        
                        <Form.Control type="text" value={token} onChange={(e) => setToken(e.target.value)}
                            placeholder="Enter Token" />
                    </Form.Group>                
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div>
                            {loading ? <img src={require('./icons/loader.gif')} alt="loader" className="loader" /> : null}
                        </div>
                        <div id="validresult"></div>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={Validateemail}>
                        Validate
                    </Button>
                </Form>
            </div> 
            <br /> <br /><br /> <br />
            <div>
                { login ? <Login /> : null }
            </div>
        </div>
    );

}

export default Emailvalidation;