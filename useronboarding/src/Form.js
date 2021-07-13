import React from 'react'

const Form = (props) => {
    return (
        <div className='form-container'>
            <form>
                <h2> Sign Up </h2>
                
                <label>Name </label>
                <input className='text-input'></input>

                <label>Email</label>
                <input className='text-input'></input>
                
                <label>Password</label>
                <input className='text-input'></input>
                
                <label>
                    Terms and Service
                    <input 
                        type='checkbox'>
                    </input>
                </label>
                
                <label>
                    <input type='button' value='Submit'>
                    </input>
                </label>
            </form>
        </div>
    );
}

export default Form;
