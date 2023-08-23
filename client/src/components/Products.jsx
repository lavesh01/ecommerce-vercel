import React, {useEffect, useState} from 'react'

import Product from "./Product"
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Para = styled.p`
  text-align: center;
  margin-top: 1rem;

`

const Products = ({cat,filters,sort}) => {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `/products/?category=${cat}`: "/products");
        setProducts(res.data);
      } catch(err){
        console.log(err);
      }
    }
    getProducts();
  },[cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key,value]) => 
        item[key].includes(value)
      ) )
    );
  },[products,cat,filters]);

  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if(sort === "asc") {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.price - b.price)
      );
    } else {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => b.price - a.price)
      );
    }
  }, [sort])

  return (
    <Container>
      { filteredProducts.length === 0 && products.length === 0 && <Para>No products to show !</Para>}
        { cat 
          ? filteredProducts.map((item) => <Product item={item} key={item._id} /> )
          : products.slice(0,8).map((item) => <Product item={item} key={item._id} /> )
        }
    </Container>
  )
}

export default Products;