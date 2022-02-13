import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export const EditContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const { id } = useParams()
    const contacts = useSelector(state=>state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault()
        const checkName = contacts.find((contact) => contact.id !== parseInt(id) && contact.name === name)
        const checkEmail = contacts.find((contact) => contact.id  !== parseInt(id) && contact.email === email)
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
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({type: 'UPDATE_CONTACT', payload:data})
        toast.success('Student Updated Successfully!')
        navigate('/')    
    }

return (
    <div className='container'>
    {currentContact ? (  
    <>
    <h1 className='display-3 mx-auto text-center'> Edit Student {id} </h1>
    <div className='row'>
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
                value='Edit Student'
                className='btn btn-block btn-success'
                />
                <br></br>
            </div>
        </form>
    </div>
    </div>
    </> 
    ) : (
    <h1 className='display-3 my-5 text-center'> Student Contact with id {id} does not exist</h1>
    )} 
    </div>
    )
}

