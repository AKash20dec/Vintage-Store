import React, { useState } from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import './sell.css';

const Sell = () => {
  
  const [selImage, setSelImage] = useState('');
    const productForm = useFormik({
        initialValues : {
          title: "",
          description: "",
          price: "",
          category: "",
          image: ""
        },
    
        onSubmit : async (values) => {
          console.log(values);
          values.image = selImage;
          // sending request to backend
          const res = await fetch('http://localhost:5000/product/add', {
            method : 'POST',
            body : JSON.stringify(values),
            headers : {
              "Content-Type": "application/json",
            }
          });
    
          console.log(res.status);
    
          if(res.status === 200){
            Swal.fire({
              icon : 'success',
              title :  'Registered succesfully',
              text :'Now Login to Continue'
            })
          } else {
            Swal.fire({
              icon : 'error',
              title : 'OOPs',
              text :'Some Error Occured'
            })
          }
        }
      });

      const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelImage(file.name);
        const fd = new FormData();
        fd.append('myfile', file);
    
        const res = await fetch('http://localhost:5000/util/uploadfile', {
          method: 'POST',
          body: fd
        });
    
        console.log(res.status);
      };
    

  return (
    <div className=''  style={{
        marginTop:'0',
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundImage:
          "url(https://i.pinimg.com/originals/8e/98/fa/8e98fa3bd6dd622dc3310e7a9a608faf.jpg)"
      }}>
        <h2 className='text-center pt-1'>Sell your old furnitures here</h2>
     <div className="form-container mt-3 bg-light">
            <h2>Product Form</h2>
            <form action="#" onSubmit={productForm.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={productForm.handleChange}  
                        value={productForm.values.title}
                        className="form-input w-100"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        onChange={productForm.handleChange}  
                        value={productForm.values.description}
                        className="form-input w-100"
                        required=""
                        defaultValue={""}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-label">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={productForm.handleChange}  
                        value={productForm.values.price}
                        className="form-input w-100"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={productForm.handleChange}  
                        value={productForm.values.category}
                        className="form-input w-100"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={productForm.handleChange}  
                        value={productForm.values.address}
                        className="form-input w-100"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form-label">
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={uploadFile}
                        
                        className="form-input w-100"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="form-button w-100">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Sell
