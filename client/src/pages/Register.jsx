import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import { mobile } from "../responsive"
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(225,225,225,0.5)), url(https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?w=900&t=st=1676981007~exp=1676981607~hmac=1bf562d0413f817561bf7883e492f95407380ba63495e772e61ef541e);
  background-size: cover;
`
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%"})}
`
const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 20px 10px 10px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: auto;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  text-decoration: none;
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`

const Register = () => {
  const [ username, setUsername ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    
    axios.post("/auth/register", {
      username, email, password
    }).then((res) => {
      console.log(res.data);
      alert("Account created Successfully!")
    }).catch(err => alert("Error, check whether all fields are filled or try again later!"));

  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="username*" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <Input placeholder="email*" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input placeholder="password*" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <ButtonWrapper>
            <Button onClick={handleRegister}>CREATE</Button>
            <Link to="/login"><Button>Login</Button></Link>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register