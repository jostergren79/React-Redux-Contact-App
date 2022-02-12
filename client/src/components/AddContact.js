import React from 'react';

export const AddContact = () => {
  return (
    <div className='container'>
    <div className='row'>
        <h1 className='display-3 mx-auto text-center'> Add Student </h1>
    <div className='col-md shadow p-5'>
        <form>
            <div className='form-group'>
                <input 
                type='text' 
                placeholder='Name'
                className='form-control'
                />
                <br></br>
                <input 
                type='email' 
                placeholder='Email'
                className='form-control'
                />
                <br></br>
                <input 
                type='number' 
                placeholder='Phone Number'
                className='form-control'
                />
                <br></br>
                <input 
                type='submit' 
                value='Add Student'
                className='btn btn-block btn-dark'
                />
                <br></br>
            </div>

        </form>

    </div>
    </div> 
    </div>
    )
}

