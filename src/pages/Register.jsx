import React from 'react'
import useFetch from '../hooks/useFetch'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../components/utils/defaultRegisterValues'
import { Link } from 'react-router-dom'
import CloseSesion from './CloseSesion'

const Register = () => {
    const token = localStorage.getItem("token");

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const { createNewUser } = useAuthentication()

    const sumit = data => {
        createNewUser(data)
        reset(defaultRegisterValues)

    }

    if (token == null) {
        return (
            <div className="form__user">
            <div className="form__user-container">
                <form onSubmit={handleSubmit(sumit)}>
                    <h2>Create a new User</h2>
                    
                    <div className='input__container'>
                        <label htmlFor="firstName">First Name</label>
                        <input  {...register("firstName", {required: true,maxLength: 25, minLength: 1,  pattern: /^[A-Za-z]+$/i})} type="text" id='firstName' />
                    </div>
                    {errors?.firstName?.type === "required" && <p className="error"><i className='bx bx-error'></i>This field is required</p>}
                    {errors?.firstName?.type === "maxLength" && (<p className="error"><i className='bx bx-error'></i>First name cannot exceed 25 characters</p>)}
                    {errors?.firstName?.type === "minLength" && (<p className="error"><i className='bx bx-error'></i>Minimum characters for First name with 1</p>)}
                    {errors?.firstName?.type === "pattern" && (<p className="error"><i className='bx bx-error'></i>Alphabetical characters only</p>)}
                    
                    <div className='input__container'>
                        <label htmlFor="lasttName">Last Name</label>
                        <input {...register("lasttName", {required: true,maxLength: 25, minLength: 1,  pattern: /^[A-Za-z]+$/i})} type="text" id='lasttName' />
                    </div>
                    {errors?.lasttName?.type === "required" && <p className="error"><i className='bx bx-error'></i>This field is required</p>}
                    {errors?.lasttName?.type === "maxLength" && (<p className="error"><i className='bx bx-error'></i>Last name cannot exceed 25 characters</p>)}
                    {errors?.lasttName?.type === "minLength" && (<p className="error"><i className='bx bx-error'></i>Minimum characters for last name with 1</p>)}
                    {errors?.lasttName?.type === "pattern" && (<p className="error"><i className='bx bx-error'></i>Alphabetical characters only</p>)}
                    
                    <div className='input__container'>
                        <label htmlFor="email">Email</label>
                        <input {...register("email", {required: true,maxLength: 150,minLength: 1,})} type="email" id='email' />
                    </div>
                    {errors?.email?.type === "required" && <p className="error"><i className='bx bx-error'></i>This field is required</p>}
                    {errors?.email?.type === "maxLength" && (<p className="error"><i className='bx bx-error'></i>Email cannot exceed 150 characters</p>)}
                    {errors?.email?.type === "minLength" && (<p className="error"><i className='bx bx-error'></i>Minimum characters for Email with 1</p>)}


                    <div className='input__container'>
                        <label htmlFor="password">Password</label>
                        <input  {...register("password", {required: true, maxLength: 25} )} type="password" id="password" />
                    </div>
                    {errors?.password?.type === "required" && <p className="error"><i className='bx bx-error'></i>This field is required</p>}
                    {errors?.password?.type === "maxLength" && (<p className="error"><i className='bx bx-error'></i>Password cannot exceed 25 characters</p>)}


                    <div className='input__container'>
                        <label htmlFor="phone">Phone</label>
                        <input {...register('phone', {required: true, maxLength: 10})} type="tel" id='phone' />
                    </div>
                    {errors?.phone?.type === "required" && <p className="error"><i className='bx bx-error'></i>This field is required</p>}
                    {errors?.phone?.type === "maxLength" && (<p className="error"><i className='bx bx-error'></i>Phone cannot exceed 10 numbers</p>)}



                    <button>Register</button>
                </form>
                <p>Already have an account? <span><Link to="/login">Log in</Link></span></p>
            </div>
        </div>
        );
      } else {
        return <CloseSesion />;
      }
}

export default Register