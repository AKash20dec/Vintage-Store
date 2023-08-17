import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Buy = () => {

  const navigate = useNavigate();

    const [productList, setProductList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const fetchUserData = async () => {
      const res = await fetch('http://localhost:5000/product/getall');
      console.log(res.status);
      if(res.status === 200){
          const data = await res.json();
          console.log(data);
          setProductList(data);
          setMasterList(data);
      }
  };

    useEffect(() => {
     fetchUserData();
    }, []);

    const filterProduct = (e) => {
        const value=e.target.value;
        setProductList(masterList.filter((recipe) => {return recipe.title.toLowerCase().includes(value.toLowerCase())}));
      }

    const displayProductData = () => {
      if(productList.length===0){
          return <h1 className='text-center'>No Data Found</h1>
      }
  
      return productList.map((furniture) => (
        
          <div className='col-md-4 mb-4'>
              <div className="card" style={{width:"18rem"}}>
                  <img src={'http://localhost:5000/'+furniture.image} alt="" className='card-img-top img-fluid' style={{height: "200px",objectFit:"cover"}} />
                  <div className='card-body' >
                      <h4>{furniture.title}</h4>
                      <p>{furniture.category}</p>
                      <p>{furniture.description}</p>
                      <p>₹ {furniture.price}</p>
                      <button onClick={()=>{navigate('/checkout/'+furniture._id)}} type="submit" class="btn btn-primary">Buy Now</button>
                  </div>
              </div>
          </div>
         
      ))
    }

  return (
    <div style={{
        minHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://w.forfun.com/fetch/35/35070396ffdb783ade0208cc86294861.jpeg)"}}>
        <header>
            <div className="container py-4">
                <p className="display-2 text-center fw-bold">
                    Browse Furnitures
                </p>

                <input type="text" className="form-control w-75 m-auto" onChange={filterProduct}/>
            </div>
        </header>

        <div>
        <div className="container">
            <div className="row">
                {displayProductData()}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Buy