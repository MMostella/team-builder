import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const membersList = [
  { Name: 'Mason', Email: 'masonmostella@gmail.com', Role: 'Student' }
]

function SimpleForm(){
  const [formValues, setFormValues] = useState({Name: '', Email: '', Role: ''});
  const [members, setMembers] = useState(membersList);

  const change = (event) => {
    const { name, value } = event.target;

    setFormValues({...formValues, [name]: value })
  }

  const submit = (event) => {
    event.preventDefault();
    const newMember = {
      memName: formValues.Name,
      memEmail: formValues.Email,
      memRole: formValues.Role
    }
    setMembers(members.concat(newMember));
    setFormValues({Name: '', Email: '', Role: ''})
  }

  return (
    <div>
      <h1>Member Form App</h1>
      {members.map((member, index) => (
        <div key={index}>
          {member.Name} is a {member.Role}. Contact them at {member.Email}
        </div>
      ))}
      <div>-----------------------------</div>
      <form className='form container' onSubmit={submit}>
        <div className='form-group inputs'>
          <label>Name
            <input 
              type='text'
              name='Name'
              value={formValues.Name}
              onChange={change}
              placeholder='Type Name'
            />
          </label>
          <label>Email
            <input 
              type='email'
              name='Email'
              value={formValues.Email}
              onChange={change}
              placeholder='Type Email'
            />
          </label>
          <label>Role
            <select 
              name='Role'
              value={formValues.Role}
              onChange={change}
            >
              <option value=''>-- Select a Role --</option>
              <option value='Student'>Student</option>
              <option value='TL'>Team Lead</option>
              <option value='Instructor'>Instructor</option>
              <option value='Alumni'>Alumni</option>
            </select>
          </label>
            <div className='submit' >
              <button>SUBMIT</button>
            </div>
            </div>
        </form>
      </div>
  )

}

ReactDOM.render(
  <>
    <SimpleForm />
  </>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
