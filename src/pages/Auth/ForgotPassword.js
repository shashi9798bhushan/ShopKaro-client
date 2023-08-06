import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
import toast from 'react-hot-toast';
import {axios} from '../../utils/axiosClient'
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';

const ForgotPassword = () => {
    const [email,setEmail] =useState("")
    const [newPassword,setNewPassword] =useState("")
    const [answer,setAnswer]=useState("")
    
    const navigate=useNavigate();
    //form function 
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(
                "/api/v1/auth/forgot-password",
                {email,newPassword,answer}
            );
            if(res && res.data.success){
                toast.success( res.data && res.data.message);
              
                navigate("/login") 
            }
            else { 
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout title={'Forgot Password - Ecommerce App'}>
        <div className="register form-container ">
           
           <form onSubmit={handleSubmit} >
           <h4 className="title">RESET PASSWORD</h4>
               <div className="mb-3">
                   
                   <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email'  required/>
                   
               </div>
               <div className="mb-3">
                   
                   <input value={answer} onChange={(e)=>{setAnswer(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your First School's Name"  required/>
                   
               </div>
               <div className="mb-3">
                 
                   <input value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required/>
               </div>
               <button type="submit" className="btn btn-primary">RESET</button>
           </form>
       </div>
    </Layout>
  )
}

export default ForgotPassword