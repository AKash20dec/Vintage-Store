import React, { useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const BuyPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const addressRef = useRef(null);

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
    );

    const addOrder = async () => {
        const res = await fetch('https://react-vintage-store-1.onrender.com/order/add', {
            method: 'POST',
            body: JSON.stringify({
                user: currentUser._id,
                product: id,
                address: addressRef.current.value,
                createdAt: new Date()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Order Confirmed"
            })
            navigate('/home');
        } else {
            Swal.fire({
                icon: "error",
                title: "OOPs..",
                text: "Something went Wrong"
            })
        }

        console.log(res.status);
    }

    return (
        <div>
            <div className='container'>
                <h1>Checkout Page</h1>
                <hr />
                <h2>{currentUser.name}</h2>
                <label>Address</label>
                <textarea className='form-control m-3' placeholder='Enter Your Address Here...' rows="10" ref={addressRef}></textarea>
                <input className='m-5' type="date" name="" id="" />

                <button className='btn btn-primary m-5' onClick={addOrder}>Order Now</button>
            </div>
        </div>
    )
}

export default BuyPage;
