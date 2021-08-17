import React, { useState } from 'react';
import Form from './components/Form';

import styled from 'styled-components';
import './App.css';

const StyledApp = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
  height: 950px;
  background: url(https://picsum.photos/seed/picsum/1500/2000);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 100px;
    /* border: 1px solid yellow; */
  }
  button {
    display: flex;
    justify-content: center;
  }
` 

const membersList = [
  { Name: 'Mason', Email: 'masonmostella@gmail.com', Role: 'Security Analyst' }
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
    <StyledApp>
      <Form 
      values={formValues}
      change={change}
      submit={submit}
      members={members}
      />
    </StyledApp>
  )
  
}
