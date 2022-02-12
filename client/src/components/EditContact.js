import React from 'react';
import { Link, useParams } from 'react-router-dom';


export const EditContact = () => {
    const{id} = useParams()
  return (
    <div className='container'>
    <div className='row'>
        <h1 className='display-3 mx-auto text-center'> Edit Student {id} </h1>
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
                <Link to='/' className='btn btn-danger mr-3'>Cancel</Link>
                <input 
                type='submit' 
                value='Edit Student'
                className='btn btn-block btn-success'
                />
                <br></br>

            </div>

        </form>

    </div>
    </div> 
    </div>
    )
}

