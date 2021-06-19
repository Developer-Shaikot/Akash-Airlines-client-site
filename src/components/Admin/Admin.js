import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Admin.css'
import Navbar from '../Navbar/Navbar';
const Admin = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);

    useEffect(()=> {
        fetch('https://peaceful-woodland-82349.herokuapp.com/isAdmin', {
             method: 'POST',
            headers: {'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
         })
         .then(res => res.json())
         .then(data => setAdmin(data))
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const airlineData = {
            name: data.name,
            imageURL: imageURL
        }
        const url = `https://peaceful-woodland-82349.herokuapp.com/addAirline`
       
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(airlineData)
        })
        .then(res => console.log('server side responded',res))
    };

   

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c0ff542b5a259d5519c36fdec59edd85');
        imageData.append('image',event.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    
    
      }

    
    
    return (
    <div className="back">
        <Navbar></Navbar>
        <div className="row d-flex " style={{textAlign: 'center'}} class="side-container">
        
        <div  className="bar-container">
        <h1 className="title">
            Airlines
        </h1>
     
        
        <div className="manage-side">

        </div>
        </div>
        <div className="orders-container">
        <h1 className="text-white">Add Airlines here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
     
             <input className="form-control"  defaultValue="" {...register("name")} />
            <br/>
      
            <input className="form-control"  name="exampleRequired" type="file" onChange={handleImageUpload} />
            <br/>
          { isAdmin &&  <input className="form-control bg-success"  type="submit" />}
          
     </form>
     <button  className="btn btn-primary" > <b> You can't change Airlines. <br/> Only admin can change this and this is conditionally fixed </b></button>
     </div>
     </div>
    </div>
    );
};

export default Admin;