import React, {useState} from 'react'
import "../App.css"


type Props = {
}

export default function Login({}: Props) {

    const [isSignUp, setIsSignUp] = useState(false)
    const switchMode = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSignUp((prevSignUp) => !prevSignUp)
    }

  return (
    <div className='login flex flex-col justify-center items-center '>
        <span className="loginTitle text-4xl font-bold font-mono italic">{isSignUp ? "SignUp" : "Login"}</span>
        <form className="loginForm mt-5 flex flex-col">
            {isSignUp && (<>
                <label htmlFor="">First Name</label>
                <input type="text" className="loginFirstName focus:outline-none p-2 border-0 bg-white" placeholder='Enter your first name...'/>
                <label htmlFor="">Last Name</label>
                <input type="text" className="loginLastName focus:outline-none p-2 border-0 bg-white" placeholder='Enter your last name...'/>
            </>)}
            <label htmlFor="">Email</label>
            <input type="text" className="loginEmail focus:outline-none p-2 border-0 bg-white" placeholder='Enter your email...'/>
            <label htmlFor=""> Password</label>
            <input type="password" className="loginPassword focus:outline-none p-2 border-0 bg-white" />
            {isSignUp && (<>
                
                <label htmlFor="">Confirm Password</label>
                <input type="password" className="loginConfirmPassword focus:outline-none p-2 border-0 bg-white" />
            </>)}
            <button className="loginButton mt-5 bg-red-300 rounded-xl p-1" type='submit'>{ isSignUp ? 'SignUp': 'Login'}</button>
            <button onClick={switchMode} className='switchMode text-lg font-semibold italic'>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
            </button>
        </form>
    </div>
  )
}