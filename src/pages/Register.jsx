import axios from 'axios'
import React, {useContext, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export default function Register() {
    const [isSignUp, setIsSignUp] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(isSignUp){
            const formData = {username, email, password, firstName, lastName, confirmPassword}
            axios.post('/register', formData)
            .then((res) => {
                console.log(res)
                res.data && window.location.replace('/login')
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            // dispatch({type:"LOGIN_START"});
            // try {
            //     axios.post('/login', {username, password})
            //     .then((res) => {
            //         dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
            // } catch (error) {
            //     dispatch({type: "LOGIN_FAILURE"})
            // }
        }
    }
  return (
    <div className='login flex flex-col justify-center items-center '>
        <span className="loginTitle text-4xl font-bold font-mono italic">{isSignUp ? "SignUp" : "Login"}</span>
        <form className="loginForm mt-5 flex flex-col" onSubmit={handleSubmit}>
            {isSignUp && (<>
                <label htmlFor="">First Name</label>
                <input required type="text" className="loginFirstName focus:outline-none p-2 border-0 bg-white" placeholder='Enter your first name...'
                onChange= {(e)=> {setFirstName( e.target.value)}}/>
                <label htmlFor="">Last Name</label>
                <input required type="text" className="loginLastName focus:outline-none p-2 border-0 bg-white" placeholder='Enter your last name...'
                onChange= {(e)=> {setLastName( e.target.value)}}/>
                <label htmlFor="">User Name</label>
                <input required type="text" className="loginLastName focus:outline-none p-2 border-0 bg-white" placeholder='Enter your user name...'
                onChange= {(e)=> {setUsername( e.target.value)}}/>
            </>)}
            <label htmlFor="">Email</label>
            <input required type="text" className="loginEmail focus:outline-none p-2 border-0 bg-white" placeholder='Enter your email...'
             onChange= {(e)=> {setEmail( e.target.value)}}/>
            <label htmlFor=""> Password</label>
            <input required type="password" className="loginPassword focus:outline-none p-2 border-0 bg-white" placeholder='Enter password.....' 
            onChange= {(e)=> {setPassword( e.target.value)}}/>
            {isSignUp && (<>
                <label htmlFor="">Confirm Password</label>
                <input required type="password" className="loginConfirmPassword focus:outline-none p-2 border-0 bg-white" placeholder='Confirm your password...'
                onChange= {(e)=> {setConfirmPassword( e.target.value)}} />
            </>)}
            <button className="loginButton mt-5 bg-red-300 rounded-xl p-1" required type='submit'>{ isSignUp ? 'SignUp': 'Login'}</button>
            <button className='switchMode text-lg font-semibold italic'>
                <Link to="/login">Already have an account? Sign In</Link>
            </button>
        </form>
    </div>
  )
}