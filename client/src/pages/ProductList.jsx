import React, { useState } from 'react'

import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from "../responsive"
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px"})}
`
const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters =(e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>{cat === 'all' ? "All Products" : cat.toUpperCase()}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled selected>Color</Option>
                    <Option>Beige</Option>
                    <Option>Red</Option>
                    <Option>Purple</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Black</Option>
                </Select>

                <Select name="size" onChange={handleFilters}>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                </Select>
            </Filter>
            

            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={ (e) => setSort(e.target.value) } >
                    <option value="newest" >Newest</option>
                    <option value="asc" >Price (asc)</option>
                    <option value="desc" >Price (desc)</option>
                </Select>
            </Filter>
           
        </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList