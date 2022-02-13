import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

  const contacts = useSelector(state=>state)

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
                    <button to={`/delete/${contact.id}`} className='btn btn-small btn-danger'> Delete </button>
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
