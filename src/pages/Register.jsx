import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate ,Link  } from "react-router-dom";
import axios from 'axios';

function Register(){


    //userdata
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[role,setRole] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault();

        try{
             
            //Register through API

            const res= await axios.post("http://localhost:8081/users",{
                email, password, role
            });
dispatch({type: "REGISTER_SUCCESS",payload: res.data});
navigate("/dashboard");
        }catch{
            console.error("Registration failed");
        }
    }

    return(
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form onSubmit={handleRegister} className='bg-white p-6 rounded shadow w-80'>
        <h2 className='text-xl font-bold mb-4 text-center'>Register form</h2>

        <input placeholder='john@mail.com' className='border p-2 w-full mb-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='******' className='border p-2 w-full mb-3' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select className='border p-2 w-full mb-3' value={role} onChange={(e) => setRole(e.target.value)} name="" id="">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type='submit' className='bg-green-700 cursor-pointer text-white px-4 py-2 w-full'>Register</button>
        <p className='text-sm mt-3'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
      </form>
    </div>
    )
}
        export default Register
    
