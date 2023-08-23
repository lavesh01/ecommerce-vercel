import { Add, Remove } from '@mui/icons-material'
import React , { useEffect, useState } from 'react'

import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { addProduct } from "../redux/cartRedux";
import axios from 'axios'
import {mobile} from "../responsive"
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height : "40vh"})}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "10px"})}

`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0px; 
    display: flex;
    gap: 4rem;
    ${mobile({ width: "100%"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: ${props => props.isSelected ? '2px solid black' : 'none'};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    padding: 8px;
`

const Button = styled.button`
    width: 100%;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    margin-left: 20px;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]; 
    const dispatch = useDispatch();

    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState('');
    const [size,setSize] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await axios.get(`/products/find/${id}`);
                setProduct(res.data);
                setColor(res.data.color[0]);
                setSize(res.data.size[0]);
            } catch {}
        };
        getProduct();
    },[id])

    const handleQuantity = (type) => {
        if(type === "desc"){
            quantity > 1 && setQuantity(quantity -1 );
        } else{
            setQuantity(quantity + 1);
        }
    };

  const handleClick = () => {
    dispatch(
        addProduct({ ...product ,quantity , color, size })
    );
  };


  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={product?.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product?.title}</Title>
                <Desc>{product?.desc}</Desc>
                <Price>Rs {product.price}</Price>

                <FilterContainer>
                    <Filter>

                        <FilterTitle>Color</FilterTitle>
                        {product?.color?.map((c) => (
                            <FilterColor color={c} isSelected={color === c} key={c} onClick={() => setColor(c)} />
                        ))}
                    
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onClick={(e) => setSize(e.target.value)}>
                        {product?.size?.map((s) => (
                            <FilterSizeOption key={s} value={size}>{s}</FilterSizeOption>
                        ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor:"pointer"}} onClick={() => handleQuantity("desc")} />
                            <Amount>{quantity}</Amount>
                        <Add style={{cursor:"pointer"}} onClick={() => handleQuantity("asc")} />
                        <Button onClick={handleClick} >ADD TO CART</Button>
                    </AmountContainer>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product