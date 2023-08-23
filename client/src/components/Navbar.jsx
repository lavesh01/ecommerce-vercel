import { useDispatch, useSelector } from 'react-redux';

import { Badge } from '@mui/material';
import { Link } from "react-router-dom";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { clearCart } from '../redux/cartRedux';
import { logoutUser } from '../redux/userRedux';
import { mobile } from '../responsive';
import styled from 'styled-components'

const Container = styled.div`
   height: 60px;
   ${mobile({height: "50px"})};
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${mobile({padding: "10px 0px"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})};
`
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: none;
    ${mobile({fontSize: "24px"})};
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({flex:2,justifyContent: "center"})};
    
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft:"10px"})};
`
const Navbar = () => {
    const user = useSelector((state) => state.user.currentUser);
    const quantity = useSelector( state => state.cart.quantity);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        dispatch(clearCart());
    }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                
                <SearchContainer>
                    <Input placeholder="search" />
                    <SearchIcon style={{color:"gray", fontSize: 16}}/>
                </SearchContainer>
                
            </Left>
            <Center>
                <Link style={{textDecoration:"none",color:"inherit"}} to="/">
                    <Logo>Ecom.</Logo>
                </Link>
            </Center>
            <Right>
                {user ? 
                <>
                    <MenuItem>Hello {user.username}!</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
                :
                <>
                    <Link style={{textDecoration:"none",color:"inherit"}} to={'/register'} >
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link style={{textDecoration:"none",color:"inherit"}} to={'/login'} >
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                </>
                    
                }
                <Link style={{textDecoration:"none",color:"inherit"}} to="/cart">
                    <MenuItem>
                    <Badge 
                        badgeContent={quantity} 
                        color="primary"
                        >
                        <ShoppingCartOutlined />
                    </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;