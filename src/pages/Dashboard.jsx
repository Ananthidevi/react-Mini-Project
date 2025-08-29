import React  from "react";
import { useDispatch, useSelector } from "react-redux";


function Dashboard(){
  const user = useSelector( data => data.user);
  const dispatch = useDispatch();

  return(
    <div className='flex flex0col justify-center items-center min-h-screen bg-gray-50'>
      <h1 className='text-2xl font-bold mb-4'>Welcome, {user?.email}</h1>

      <button className='bg-red-700 cursor-pointer text-white rounded px-4 py-2' onClick={() => dispatch ({type: "LOGOUT"})}>Logout</button>
    </div>
  )
}
export default Dashboard