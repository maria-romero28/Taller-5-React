import React from 'react';
import styled from 'styled-components';
import productImage from '../assets/Fresas.jpg';

const ProductCardContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(132, 236, 118, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%; 
  height: auto; 
  border-radius: 10px; 
  margin-bottom: 10px; 
`;

const ProductName = styled.h2`
  font-size: 24px;
  color: pink;
  margin-bottom: 10px;
  text-align: center;
`;

const BuyButton = styled.button`
  background-color: pink;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #morado;
  }

  &:active {
    background-color: #pink;
  }
`;

function ProductCard({ productName, onBuyClick }) {
  return (
    <ProductCardContainer>
      <ProductImage src={productImage} alt={productName} /> {/* Usar imagen importada */}
      <ProductName>{productName}</ProductName>
      <BuyButton onClick={onBuyClick}>Comprar</BuyButton>
    </ProductCardContainer>
  );
}

export default ProductCard;
