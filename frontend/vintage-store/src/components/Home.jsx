import React from 'react'
import "./Home.css";
import { NavLink } from 'react-router-dom';
import Buy from './Buy';
const Home = () => {
  return (
    <>
      
      <>
  <div className="jumbotron text-center text-light">
    <h1>Welcome to Furniture Buy &amp; Sell</h1>
    <p>Find the perfect pieces for your space.</p>
    {/* <a href="#" className="btn btn-primary btn-lg">
      Browse Furniture
    </a> */}
    <div className='d-flex justify-content-center m-5'>
    <NavLink className="nav-link" to="/sell">
            <button className='btn btn-outline-light'>SELL</button>
          </NavLink>
    <NavLink className="nav-link" to="/buy">
            <button className='btn btn-outline-light'>BUY</button>
          </NavLink>
          </div>
  </div>
  <div className="container">
    <h2 className="text-center mb-4">Featured Products</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmVRfhTWqH83BAkHk807evkFKM6r3-lDIzw&usqp=CAU" alt="Product 1" className="img-fluid" />
          <h3>Modern Sofa</h3>
          <p>Stylish and comfortable sofa for your living room.</p>
          <p className="text-muted">₹4899</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-card">
          <img src="data:image/jpeg;base64,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" alt="Product 2" className="img-fluid" />
          <h3>Wooden Dining Set</h3>
          <p>Elegant dining set for your family gatherings.</p>
          <p className="text-muted">₹7000</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="product-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGI9ezym-DKUOBpBglLf8fOz_R-Nx8Tb2nTg&usqp=CAU" alt="Product 3" className="img-fluid" />
          <h3>Vintage Desk</h3>
          <p>Classic desk for your home office.</p>
          <p className="text-muted">₹5000</p>
        </div>
      </div>
    </div>
  </div>
  <Buy/>
</>


    </>
  )
}

export default Home