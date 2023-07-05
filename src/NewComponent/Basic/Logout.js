import {useAuth0} from '@auth0/auth0-react'

import React from 'react'

const LogoutButton = () => {
    const{logout,isAuthenticated}= useAuth0();
  return (
isAuthenticated&&(
    <button className='btn-style-log' onClick={()=> logout()}>SignOut</button>
    )
  )
}

export default LogoutButton