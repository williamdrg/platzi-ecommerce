import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Register = () => {

  const { handleSubmit, register, reset } = useForm()

  const submit = data => {
    useAuth('/users', data)
    reset({
      email: '',
      username:'',
      password:'',
      name: {
        firstname: '',
        lastname:''
      },
      address: {
        city: '',
        street:'',
        number:'',
        zipcode:'',
        geolocation: {
          lat: '',
          long:''
          }
        },
      phone:'',
    })
  }

  return (
    <div className='register__container'>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id='email' type="email" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input {...register('username')} id='username' type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} id='password' type="text" />
        </div>
        <div className='register__name'>
          <h2>Name</h2>
          <label htmlFor="firstname">First Name</label>
          <input {...register('firstname')} id='firstname' type="text" />
          <label htmlFor="lastname">Last Name</label>
          <input {...register('lastname')} id='lastname' type="text" />
        </div>
        <div className='register__address'>
          <h2>Address</h2>
          <label htmlFor="city">City</label>
          <input {...register('city')} id='city' type="text" />
          <label htmlFor="street">Street</label>
          <input {...register('street')} id='street' type="text" />
          <label htmlFor="number">Number</label>
          <input {...register('number')} id='number' type="number" />
          <label htmlFor="zipcode">Zipcode</label>
          <input {...register('zipcode')} id='zipcode' type="number" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} id='phone' type="number" />
        </div>
      </form>
      <button>Sign up</button>
      <p>Already have an account?<Link to={'/login'}><span> Log in</span></Link></p>
      
    </div>
  )
}

export default Register
