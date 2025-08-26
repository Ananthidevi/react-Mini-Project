import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux"
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


function Login() {
    const[email, setEmail] = useState("");
    const[password,setPassword] = useState("");


    const error = useSelector(loginError => loginError.error);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();


        try{
            const res = await axios.get("http://localhost:8081/users");//this id from json server

            const user = res.data.find(data=> data.email === email && data.password === password);

            if(user){
                dispatch({type: "LOGIN_SUCCESS", payload:user});
                navigate("/dashbaord");
            }else{
                dispatch({type: "LOGIN-ERROR", paylaod: "Invalid credentials"});
            
            }
        }
            catch{
                dispatch({type:  "LOGIN_ERROR", payload: "Server error"});
            }
        }
        return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form onSubmit={handleLogin} className='bg-white p-6 rounded shadow w-80'>
        <h2 className='text-xl font-bold mb-4 text-center'>Login form</h2>
        <input placeholder='ananthi@mail.com' className='border p-2 w-full mb-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='*****' className='border p-2 w-full mb-3' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className='text-red-600 text-sm mb-2'>{error}</p>}
        <button type='submit' className='bg-green-600 cursor-pointer text-white px-4 py-2 w-full'>Login</button>
        <p className='mt-3 text-sm'>Don't have an account? <Link to="/register" className='text-blue-600 font-bold'>Register</Link></p>
      </form>
    </div>
  )
}

export default Login
        
    

    
