import React from 'react'

const Form = (props) => {
    return (
        <div className='form-container'>
            <form onSubmit={props.submitHandler}>
                <h2> Create a New User </h2>
                
                <label>Name </label>
                <input className='text-input'
                       name='name'
                       type='text'
                       value={props.form.name}
                       onChange={props.handleChange}>
                </input>

                <label>Email</label>
                <input className='text-input'
                       name='email'
                       type='email'
                       value={props.form.email}
                       onChange={props.handleChange}>
                </input>
                
                <label>Password</label>
                <input className='text-input'
                       name='password'
                       type='password'
                       value={props.form.password}
                       onChange={props.handleChange}>
                </input>
                
                <label>
                    Terms Of Service
                    <input 
                        name='tos'
                        type='checkbox'
                        value={props.form.tos}
                        onChange={props.handleChange}>
                    </input>
                </label>
                
                {/* <label>
                    <input type='button'
                           value='Submit'
                           name='submit'>
                    </input>
                </label> */}
                <button disabled={props.disabled}> Submit </button>
            </form>
        </div>
    );
}

export default Form;
