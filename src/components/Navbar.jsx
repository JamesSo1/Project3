import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try{
      await logOut();
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <div>
      <h1>Project Workspace</h1>
      {user?.displayName ? <button onClick = {handleSignOut}>Logout</button> : <Link to='/signin'>Sign In</Link>}
    </div>
  )
}

export default Navbar