import axios from 'axios'
import React, {useState} from 'react'
import "../App.css"


export default function Login() {
    const [isSignUp, setIsSignUp] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(false)
    const switchMode = (e) => {
        e.preventDefault()
        setIsSignUp((prevSignUp) => !prevSignUp)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {username, email, password, firstName, lastName, confirmPassword}
        if(isSignUp){
            axios.post('/register', formData)
            .then((res) => {
                console.log(res)
                res.data && window.location.replace('/')
            })
            .catch((err) => {
                setError(true)
                console.log(err)
            })
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
            <button onClick={switchMode} className='switchMode text-lg font-semibold italic'>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
            </button>
        </form>
    </div>
  )
}