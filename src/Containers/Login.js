import React from 'react'
import "../Css/loginPage.css"
import { Formik } from 'formik';
import * as Yup from "yup";
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate =useNavigate()
    const schema = Yup.object().shape({
      userName: Yup.string()
          .required("User Name is a required field")
          .email("Invalid User Name"),
        password: Yup.string()
          .required("Password is a required field")
          .min(8, "Password must be at least 8 characters"),
      });
      const handleSubmit = async(value)=>{
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
          }
          
          axios.post('http://localhost:6000/api/login', value, {
            headers: headers
          })
          .then((response) => {
            console.log(response)
          //   if(response.data.status){
          //   console.log({response});
          //   localStorage.setItem('user', JSON.stringify(response.data))
          //   navigate('/')
          // }
          })
          .catch((error) => {
            console.log({error});
          })
          }
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ userName: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="userName"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="userName"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.userName && touched.userName && errors.userName}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>

  )
}

export default Login