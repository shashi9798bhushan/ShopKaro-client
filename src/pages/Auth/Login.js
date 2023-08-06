import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
import toast from 'react-hot-toast';
import {axios} from '../../utils/axiosClient'
import { useNavigate,useLocation } from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/auth';


const Login = () => {
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const navigate = useNavigate()
    const location=useLocation()
    const [auth,setAuth]=useAuth();
    //form function 
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(
                "/api/v1/auth/login",
                {email,password}
            );
            if(res && res.data.success){
                toast.success( res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                })
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate(location.state||"/") 
            }
            else { 
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Spmething went wrong')
        }
    }

  return (
    <Layout title={"Register - Ecommerce App"}>
        <div className="register form-container ">
           
            <form onSubmit={handleSubmit} >
            <h4 className="title">LOGIN FORM</h4>
                <div className="mb-3">
                    
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email'  required/>
                    
                </div>
                <div className="mb-3">
                  
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' required/>
                </div>
                <div className="div mb-3">
                    <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>    
                </div>
                <button type="submit" className="btn btn-primary">LOGIN</button>
            </form>
        </div>
    </Layout>
  )
}

export default Login