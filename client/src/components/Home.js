import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {

  const contacts = useSelector(state=>state)

  return (

    <div className='container'>

    <div className='row'>
    <div className='col-md-12 my-5 text-center px-5'>
    <Link to='/add' className='btn btn-outline-dark text-right'> Add Student </Link>
    </div>
    </div>

    <div className='row'>
    <div className='col-md-12 my-5 text-center px-5'>
    <h1> React Redux Contact App </h1>
    </div>
    </div>

    </div>
  )
}

export default Home;
