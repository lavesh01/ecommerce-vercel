import { Facebook, Instagram, MailOutlineOutlined, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'

import { Link } from 'react-router-dom'
import React from 'react'
import {mobile} from "../responsive"
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   ${mobile({ flexDirection: "column"})}
`

const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
   margin: 20px 0px;
`
const SocialContainer = styled.div`
   display: flex;
`
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props => props.color};
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 20px;

`

const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({ display: "none"})}
`

const Title = styled.h3`
   margin-bottom: 30px;
`

const List = styled.ul`
   padding: 0;
   margin: 0;
   list-style: none;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
`
const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`

const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({ backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`

const Payment = styled.img`
   width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Ecomm.</Logo>
            <Desc>Discover the latest fashion trends at our online women's clothing store. We offer a curated selection of stylish and affordable clothing, ensuring you stay in vogue without breaking the bank. Elevate your wardrobe with our collection of on-trend and budget-friendly options.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>

                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem><Link style={{textDecoration: "none",color: "inherit"}} to={'/'}> Home </Link></ListItem>
                <ListItem><Link style={{textDecoration: "none",color: "inherit"}} to={'/cart'}> Cart </Link></ListItem>
                <ListItem><Link style={{textDecoration: "none",color: "inherit"}} to={'/login'}> Login </Link></ListItem>
                <ListItem><Link style={{textDecoration: "none",color: "inherit"}} to={'/register'}> Register </Link></ListItem>
              
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:10}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:10}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutlineOutlined style={{marginRight:10}}/> contact@ecomm.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer