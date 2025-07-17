import React from 'react'
import './Header.css'
import a1 from "../images/Cake-shop-logo.png"
import {Link}  from "react-router-dom"
const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
     <Link class="nav-link active" aria-current="page" to="/">
   <img class="A" src={a1} width="250rem" height="150rem"/>
   </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 B" >
      
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About cake shop</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/creative">Creative</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/signature">Signature</Link>
        </li>
        
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/n">Upload</Link>
        </li>
        
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/product">Products</Link>
        </li>
       
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/m">Getdelete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/validation">validation</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header