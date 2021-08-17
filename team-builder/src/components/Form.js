import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {

    }

    const onSubmit = evt => {

    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        placeholder='Type Name'
                    />
                </label>
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                        placeholder='Type Email'
                    />
                </label>
                <label>Role
                    <select 
                        name='role'
                        value={values.role}
                        onChange={onChange}
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
    )
}