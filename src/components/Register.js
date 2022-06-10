// import React from 'react'
// import './Register.css'

// const Register=()=>{
  
//     return (
//           <div className="container">
//             <div className='row'>
//                 <div className='col-5'></div>
//                 <div className='col-5'>
//                 <form>
                

//   <div class="form-group">
//     <label for="exampleInputFirstName1">First name</label>
    
//     {<input type="fname" class="form-control" id="exampleInputFirstName" placeholder="Enter first name "/> }
//     {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//   </div>
//   <div class="form-group">
//     <label for="exampleInputLastName1">Last name</label>
//     <input type="lname" class="form-control" id="exampleInputLasttName1"  placeholder="Enter last name"/>
//     {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//   </div>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
  
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="Register" class="btn btn-primary">Submit</button>
// </form>
//                 </div>
//             </div>
//         </div>
       
//     )
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Register = () =>{
  return (
    <>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Form>
            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name </Form.Label>
                <Form.Control type="fname" placeholder="Enter first name" />
              
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name </Form.Label>
                <Form.Control type="lname" placeholder="Enter last name" />
              
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" placeholder="Check me out" />
              </Form.Group>

              <Button variant='primary btn-block' type="submit">
                Submit
              </Button>

              <div>
                <a href="#"><small className="reset">Password Reset </small></a> II
                <a href="#"><small className="reset ml-2"> Quick Recover</small></a>              
              </div>
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}></Col>
        </Row>
      </Container>
    </>
  )
}


export default Register;

