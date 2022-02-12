import {useState} from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const AddContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector((state) => state)
    console.log(contacts)

    const handleSubmit = (e) => {
        e.preventDefault()
        const checkName = contacts.find(contact => contact.name === name && name)
        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find((contact) => contact.number === parseInt(number))
        if(!email || !number || !name) {
        return toast.warning('Please fill in all fields!')
        }
        if(checkName){
            return toast.error('This name already exists!')
        }
        if(checkEmail){
            return toast.error('This email already exists!')
        }
        if(checkNumber){
            return toast.error('This number already exists!')
        }
    }
  return (
    <div className='container'>
    <div className='row'>
        <h1 className='display-3 mx-auto text-center'> Add Student </h1>
    <div className='col-md shadow p-5'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input 
                type='text' 
                placeholder='Name'
                className='form-control'
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <br></br>
                <input 
                type='email' 
                placeholder='Email'
                className='form-control'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <br></br>
                <input 
                type='number' 
                placeholder='Phone Number'
                className='form-control'
                value={number}
                onChange={e => setNumber(e.target.value)}
                />
                <br></br>
                <Link to='/' className='btn btn-danger mr-3'>Cancel</Link>
                <input 
                type='submit' 
                value='Add Student'
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

