import React, {useState,useEffect} from 'react'
import Layout from '../components/layout/Layout'
import {axios} from '../utils/axiosClient'
import { useParams, useNavigate } from 'react-router-dom'
import "../styles/CategoryProductStyles.css";


const CategoryProduct = () => {
  const [product,setProducts]=useState([])
  const[category,setCategory]=useState([])
  const params=useParams()
  const navigate=useNavigate();
  const getProductsByCat = async()=>{
    try {
      const {data}=await axios.get(`/api/v1/product/product-category/${params.slug}`)
      setProducts(data?.product)
      setCategory(data?.category)

    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    if(params?.slug) getProductsByCat()
  },[params?.slug])  

  return (
    <Layout>
    <div className="container mt-3 category">
      <h4 className="text-center">Category - {category?.name}</h4>
      <h6 className="text-center">{product?.length} result found </h6>
      <div className="row">
        <div className="col-md-9 offset-1">
          <div className="d-flex flex-wrap">
            {product?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
}

export default CategoryProduct