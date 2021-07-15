import logo from './logo.svg';
import './App.css';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Form from './Form';
import Users from './Users';

let schema = yup.object().shape({
  name     : yup.string().required('Name is required'),
  email    : yup.string().email().required('Email is required'),
  password : yup.string().required('Passowrd is required'),
  tos      : yup.boolean().required('The user must accept the Terms of Service').oneOf([true], 'The user must accept the Terms of Service')
})

function App() {
  const defaultForm = {
    name    : "",
    email   : "",
    password: "",
    tos     : false,
  };
  const [form, setForm]         = useState(defaultForm); 
  const [users, setUsers]       = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors]      = useState(defaultForm);
  
  const setFormErrors = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({...errors, [name] : ''});
      })
      .catch(err => {
        setErrors({...errors, [name] : err.errors[0]})
      })
  }

  const handleChange = event => {
    const {name, type, value, checked} = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setFormErrors(name, updatedInfo);
    setForm({
      ...form, 
      [name]: updatedInfo
    });
  }

  const submitHandler = event => {
    event.preventDefault();
    
    const newUser = {
      name     : form.name.trim(),
      email    : form.email.trim(),
      password : form.password,
      tos      : form.tos
    };

    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res);
        setUsers([...users, res.data]);
      });
    setForm(defaultForm);
  }

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])

  return (
    <div className='main-container'>
      <Form handleChange={handleChange} submitHandler={submitHandler} form={form} disabled={disabled} errors={errors}/>
      <Users users={users}/>
    </div>
    );
}

export default App;
