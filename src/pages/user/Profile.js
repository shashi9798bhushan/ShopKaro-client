import React,{useState,useEffect} from 'react'
import Layout from '../../components/layout/Layout'
import { UserMenu } from '../../components/layout/UserMenu'
import { useAuth } from '../../context/auth'
import {axios} from '../../utils/axiosClient'
import toast from 'react-hot-toast'

const Profile = () => {
  //context
  const[auth,setAuth]=useAuth()

  //state
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState()

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

//get user data
useEffect(()=>{
  const {email,name,phone,address}=auth.user
  setName(name)
  setPhone(phone)
  setEmail(email)
  setPhone(phone)
  setAddress(address)
},[auth?.user])

  return (
    <Layout title="Your Profile">
        <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3">
                   <UserMenu/>
                </div>
                <div className="col-md-9">
                   
                    <div className="register form-container ">
           
                        <form onSubmit={handleSubmit} >
                        <h3 className="title">USER PROFILE</h3>
                            <div className="mb-3">                                
                                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' />                                
                            </div>
                            <div className="mb-3">                                
                                <input value={email} disabled onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email'  />                                
                            </div>
                            <div className="mb-3">                  
                               <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
                            </div>
                            <div className="mb-3">                                
                                <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Phone No.'  />                                
                            </div>
                            <div className="mb-3">                                
                                <input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1"  placeholder='Enter Your Address' />                                
                            </div>
                           
                            <button type="submit" className="btn btn-primary">UPDATE</button>
                        </form>
                     </div>
                    
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile