import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const CheckOut = () => {



    const { id } = useParams();

    const [userData, setUserData] = useState({});

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/product/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserData(data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (


        <div className="row d-flex justify-content-center align-items-center " style={{
            backgroundImage: "URL('https://img.freepik.com/free-vector/hanging-chain-egg-chair-realistic-vector_1441-3866.jpg?size=626&ext=jpg&uid=R113110160&ga=GA1.2.1887936459.1688284317&semt=sph')",
            backgroundSize: "cover"
        }}>

            <h1 className="text-center display-3 mt-4 fw-bold text-dark">{userData.title}</h1>
            <div className='col-md-3 mb-4 w-50 m-5'>
                <div className="card">
                    <div className='card-body'>
                        <img src={'http://localhost:5000/' + userData.image} alt="" className="card-img-top img-fluid" />
                    </div>

                    <div className="card-footer">
                        <h4 className="display-5 fw-bold text-center">{userData.title} - {userData.category}</h4>
                        <p><span className="fw-bold fs-4">Category - </span> {userData.category}</p>
                        <p><span className="fw-bold fs-4">Description - </span>{userData.description}</p>
                        <p><span className="fw-bold fs-4">Price - </span>{userData.price}</p>
                        <p><span className="fw-bold fs-4">The Address to pickUp- </span>{userData.address}</p>
                        <Link to={"/buypage/" + userData._id} className='btn btn-outline-primary'>Pay Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
