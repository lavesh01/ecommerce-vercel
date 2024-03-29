import CategoryItem from './CategoryItem';
import React from 'react';
import { categories } from '../data';
import { mobile } from '../responsive';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding: "0px;",flexDirection:"column"})}
`

const Categories = () => {
  return (
    <Container>

      {categories?.map((item) => (
              <CategoryItem item={item} key={item.id} />
      ))}

    </Container>
  )
}

export default Categories