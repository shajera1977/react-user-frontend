import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function Login(e) {
        setLoading(true);
        
        let item = { email, password };
        e.preventDefault();        

        fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)

        })
            .then((response) => response.text())
            .then((text) => {
                //alert(text);
                setLoading(false);
                var loginres = (text.replace(/"/g, ""));

                if (loginres === "login") {

                    document.getElementById("loginresult").innerHTML = "<b>Login Successfull</b>";
                    var loginsuccess = document.getElementById("loginresult");
                    var loginerror = document.getElementById("loginresult");
                    loginsuccess.classList.add("success");
                    loginerror.classList.remove("error");
                    
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('password', password);

                    navigate("/Dashboard");

                }

                if (loginres === "invalidlogin") {
                    document.getElementById("loginresult").innerHTML = "<b>Invalid email id or password</b>";
                    var loginsuccess1 = document.getElementById("loginresult");
                    var loginerror1 = document.getElementById("loginresult");
                    loginerror1.classList.add("error");
                    loginsuccess1.classList.remove("success");
                }

            })
            .catch((error) => {

                setLoading(false);

                document.getElementById("loginresult").innerHTML = "<b>There is an Error !</b> <br />Try Again Later";
                var logindataerror = document.getElementById("loginresult");
                logindataerror.classList.add("error");
            });
    }

    return (
        < div className="col-sm-6 offset-sm-3 signup-form" id="validemail" >
            <h2 className="form-heading">Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="signup-labels">Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="signup-labels">Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicloader">
                    <div>
                        {loading ? <img src={require('./icons/loader.gif')} alt="loader" className="loader" /> : null}
                    </div>
                    <div id="loginresult"></div>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={Login}>
                    Login
                </Button>
            </Form>
        </div >
    )

} 