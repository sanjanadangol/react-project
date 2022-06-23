import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

const Register = () =>{
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
		setUsername(e.target.value);
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};
  const submitHandler = async (e) => {
		e.preventDefault();
    console.log(username)
    await axios
    .post("/api/auth/local/register", {
      username,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
	};
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center ">
          <Col lg={4} md={6} sm={12} className="px-5 py-3 shadow">
            <Form>
            <Form.Group controlId="formBasicFirstName" className="mb-4">
                <Form.Label>User name </Form.Label>
                <Form.Control type="fname" placeholder="Enter first name" onChange={onChangeUsername}/>
              
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Email address </Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>Password </Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={onChangePassword}/>
              </Form.Group>


              <Button variant='primary btn-block' type="submit" onClick={submitHandler}>
                Submit
              </Button>

              <div>
                <a href="#"><small className="reset">Password Reset </small></a> II
                <a href="#"><small className="reset ml-2"> Quick Recover</small></a>              
              </div>
            </Form>
          </Col>

        </Row>
      </Container>
    </>
  )
}


export default Register;

