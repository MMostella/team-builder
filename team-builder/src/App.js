import React, { useState } from 'react';
import Form from './components/Form';

import './App.css';

export default function App() {
  const [formValues, setFormValues] = useState({ FirstName: '', LastName: '', Role: '' });
  
  return (
    <Form />
  )
}
