import React from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './Logout';

function NavbarTop() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Resturant 0.1</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id="navbar-item-id"aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="navbar-item-id"aria-current="page" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" id="navbar-item-id"aria-current="page" href="#"><LoginButton/><LogoutButton/></a>
        </li>
        
      
       
       
      </ul>
      
    </div>
  </div>
</nav>

   
  )
}

export default NavbarTop