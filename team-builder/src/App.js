import React, { useState } from 'react';
import Form from './components/Form';

import styled from 'styled-components';
import './App.css';

// const styled = 

const membersList = [
  { Name: 'Mason', Email: 'masonmostella@gmail.com', Role: 'Student' }
]

export default function App() {
  const [formValues, setFormValues] = useState({Name: '', Email: '', Role: ''});
  const [members, setMembers] = useState(membersList);

  const change = (event) => {
    const { name, value } = event.target;

    setFormValues({...formValues, [name]: value })
  }

  const submit = (event) => {
    event.preventDefault();
    const newMember = {
      Name: formValues.Name,
      Email: formValues.Email,
      Role: formValues.Role
    }
    setMembers(members.concat(newMember));
    setFormValues({Name: '', Email: '', Role: ''})
  }

  return (
    <>
      <Form 
      values={formValues}
      change={change}
      submit={submit}
      members={members}
      />
    </>
  )
  
}
