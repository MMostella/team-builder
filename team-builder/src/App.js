import React, { useState, useEffect } from 'react';
import Form from './components/Form';

import './App.css';

const initialFormValues = {
  Name: '',
  Email: '',
  Role: ''
}

export default function App() {
  // const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState();
  // console.log(formValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newMember.name || !newMember.email || !newMember.role) {
      setError('Make Sure To Fill Out Every Field');
      return;
    }

    
  }
  
  return (
    <div>
      <h1>Testing</h1>
      <h3 className='error'>{error}</h3>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  )
  
}
