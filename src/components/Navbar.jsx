import React from 'react'

const Navbar = ({setCategory}) => {
  return (
  <nav className="navbar navbar-expand-lg  bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand badge bg-light text-dark fs-5" href="#">NewsApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}} onClick={()=>setCategory("general")} >All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}}  onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}} onClick={()=>setCategory("health")} >Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}} onClick={()=>setCategory("sports")} >Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}} onClick={()=>setCategory("technology")} >Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}} onClick={()=>setCategory("science")} >Science</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav> 
  )
}

export default Navbar