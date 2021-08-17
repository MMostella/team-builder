import React from 'react';

export default function Form(props) {
    const { values, change, members, submit } = props;

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
                  value={values.Name}
                  onChange={change}
                  placeholder='Type Name'
                />
              </label>
              <label>Email
                <input 
                  type='email'
                  name='Email'
                  value={values.Email}
                  onChange={change}
                  placeholder='Type Email'
                />
              </label>
              <label>Role
                <select 
                  name='Role'
                  value={values.Role}
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
                  <button>ADD MEMBER</button>
                </div>
                </div>
            </form>
          </div>
      )
}