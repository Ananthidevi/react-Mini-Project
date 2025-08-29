import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link} from "react-router-dom";
import axios from 'axios';



function Profile(){

    //userdata
    const[goal, setGoal] = useState("");
    const[currentweight , setCurrentweight] = useState("");
  

    const error = useSelector(profileError => profileError.error) ;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.get("http//localhost:8801/users")
            const user = res.data.find(data => data.goal === goal && data.currentweight === currentweight);

        
        }
        catch{
      dispatch({type: "LOGIN_ERROR", payload: "Server error"});
    }
    }
    return (
        <div className = 'flex justify-center items-center min-h-screen bg-grey-100'>
            <form onSubmit={handleProfile} className = 'bg-white p-6 rounded shadow w-80'>
                <h2 className = 'text-xl font-bold mb-4 text-center'>Your time to fill</h2>
                <input placeholder= '60-70kg' className='border p-2 w-full mb-3' type ="goal" value = {goal} onChange={(e) => setGoal(e.target.value)}/>
                 <input placeholder= 'weight' className='border p-2 w-full mb-3' type ="currentweight" value = {currentweight} onChange={(e) => setCurrentweight(e.target.value)}/>
              {error && <p className='text-red-600 text-sm mb-2'>{error}</p>}
            <button type='submit' className='bg-green-600 cursor-pointer text-white px-4 py-2 w-full'>Submit</button>
             <p className='mt-3 text-sm'>Don't have an account? <Link to="/register" className='text-blue-600 font-bold'>Register</Link></p>
            </form>


        </div>
    )




}

export default Profile