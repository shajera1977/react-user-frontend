import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import $ from "jquery";
import Emailvalidation from './Emailvalidation';

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [validemail, setvalidemail] = useState(false);


    function SignUp(e) {

        setLoading(true);

        let item = { name, email, password };
        e.preventDefault();

        fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                "content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        })

            .then((response) => response.text())
            .then((text) => {
                console.log = text
                setLoading(false);
                var res = (text.replace(/"/g, ""));

                if (res === "success") {
                    document.getElementById("result").innerHTML = "<b>Registration Successfully !</b> <br />Account Validation Link Send To Your Email Account";
                    var usersuccess = document.getElementById("result");
                    usersuccess.classList.add("success");

                    setTimeout(function () {
                        $("#signup").fadeOut(2000);
                    }, 2000);

                    setvalidemail(true);
                }

                if (!res === "success") {
                    document.getElementById("result").innerHTML = "<b>There is an Error !</b> <br />Try Again Later";
                    var usererror = document.getElementById("result");
                    usererror.classList.add("error");
                }
            })
            .catch((error) => {

                setLoading(false);

                document.getElementById("result").innerHTML = "<b>There is an Error !</b> <br />Try Again Later";
                var dataerror = document.getElementById("result");
                dataerror.classList.add("error");
            });

    }

    return (
        <div>
            <div className="col-sm-6 offset-sm-3 signup-form" id="signup">
                <h2 className="form-heading">User Signup</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="signup-labels">Username</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Username" />
                    </Form.Group>

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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div>
                            {loading ? <img src={require('./icons/loader.gif')} alt="loader" className="loader" /> : null}
                        </div>
                        <div id="result"></div>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={SignUp}>
                        Submit
                    </Button>
                </Form>
            </div>

            <div>
                { validemail ? <Emailvalidation /> : null }
            </div>
        </div>
    );

}

export default Register;