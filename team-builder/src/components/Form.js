import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div `
    /* border: 1px solid red; */

    label {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 35%;
        margin: 2% auto;
        /* border: 1px solid green; */
    }

    label div {
        display: flex;
        justify-content: center;
        margin-bottom: 2%;
    }
    .submit {
        display: flex;
        justify-content: center;
    }
    .list {
        display: flex;
        justify-content: center;
    }
    .divider {
        display: flex;
        justify-content: center;
    }
`

export default function Form(props) {
    const { values, change, members, submit } = props;

    return (
        <StyledForm>
          <h1>New Member Form</h1>
          {members.map((member, index) => (
            <div className='list' key={index}>
              {member.Name} is a {member.Role}. Contact them at {member.Email}
            </div>
          ))}
          <div className='divider'>---------------------------------------------</div>
          <form className='form container' onSubmit={submit}>
            <div className='form-group inputs'>
              <label>
                <div>
                    Name
                </div>
                <input 
                  type='text'
                  name='Name'
                  value={values.Name}
                  onChange={change}
                  placeholder='Input Name Here'
                />
              </label>
              <label>
                <div>
                    Email
                </div>
                <input 
                  type='email'
                  name='Email'
                  value={values.Email}
                  onChange={change}
                  placeholder='Input Email Here'
                />
              </label>
              <label>
                <div>
                    Role
                </div>
                <select 
                  name='Role'
                  value={values.Role}
                  onChange={change}
                >
                  <option value=''>--- Choose Your Position ---</option>
                  <option value='Frontend Developer'>Frontend Developer</option>
                  <option value='Backend Developer'>Backend Developer</option>
                  <option value='Security Tech'>Security Tech</option>
                  <option value='Security Analyst'>Security Analyst</option>
                </select>
              </label>
                <div className='submit' >
                  <button>ADD MEMBER</button>
                </div>
            </div>
          </form>
          </StyledForm>
      )
}