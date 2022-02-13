import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {

  const contacts = useSelector(state=>state)

  const dispatch = useDispatch()

  const deleteContact = (id) => {
      dispatch({type: 'DELETE_CONTACT', payload: id})
      toast.success('Contact deleted successfully!')
  }

  return (

    <div className='container'>
      <div className='row'>
        <div className='col-md-12 my-5 text-right'>
          <Link to='/add' className='btn btn-outline-dark'> 
            Add Student 
          </Link>
        </div>
        <div className='col-md-12 mx-auto'>
        <div className='table table.hover'>
          <table>
          <thead className='text-white bg-dark text-center'>
            <tr>
              <th scope='col'> # </th>
              <th scope='col'> Name </th>
              <th scope='col'> Email </th>
              <th scope='col'> Number </th>
              <th scope='col'> Action </th>
            </tr>
          </thead>
          <tbody>

              {
                contacts.map((contact,id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                    <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'> Delete </button>
                    <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary'> Edit </Link>
                    </td>
                  </tr>
                ))
              }
            
          </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
