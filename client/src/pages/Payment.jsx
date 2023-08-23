import { Navigate } from "react-router-dom"
import { clearCart } from "../redux/cartRedux"
import { logoutUser } from "../redux/userRedux"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
`
const Para = styled.p`
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
`
const Button = styled.button`
    width: fit-content;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`


const Payment = () => {
    const [ redirect , setRedirect ] = useState(false);
    const dispatch = useDispatch();
    
    const navigateHome = () => {
        dispatch(logoutUser());
        dispatch(clearCart());
        
        setRedirect(true);
    }

    if(redirect){
        return <Navigate to={'/'} />
    }
  return (
    <Container>
       <Wrapper>
        <Title>Thankyou for Shopping With us!</Title>
        <Para>Payment gateway under construction...</Para>
        <Button onClick={navigateHome}>Go Home</Button>
       </Wrapper>
    </Container>
  )
}

export default Payment;