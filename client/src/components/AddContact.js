import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AddContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        dispatch({type: 'ADD_CONTACT', payload:data})
        toast.success('Student Added Successfully!')
        navigate('/')    
    
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

