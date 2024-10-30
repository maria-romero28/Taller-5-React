import React from 'react';
import styled from 'styled-components';
import './tailwind.css'; // Para estilos de Tailwind

// PUNTO 1: ProfileCard
const ProfileCard = ({ name, description }) => (
  <div style={{ border: '1px solid morado', padding: '20px', margin: '10px', borderRadius: '8px' }}>
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

// PUNTO 2: ProductCard
const ProductCard = ({ productName, onBuyClick }) => (
  <div style={{ border: '1px solid pink', padding: '20px', margin: '10px', borderRadius: '8px' }}>
    <h2>{productName}</h2>
    <button onClick={onBuyClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>Comprar</button>
  </div>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(124, 199, 182);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 38px;
  color: #ccc;
  text-align: center;
  font-family: 'Times New Roman';
`;

// PUNTO 3: Card
const Card = ({ title, description, onButtonClick }) => (
  <div style={{ border: '1px solid #444', padding: '20px', margin: '10px', borderRadius: '8px' }}>
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={onButtonClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>Click</button>
  </div>
);

// PUNTO EXTRA: Header con Tailwind
const Header = () => (
  <header className="bg-blue-500 p-4 text-white text-center">
    <h1>Header con Tailwind</h1>
  </header>
);

// App Principal
function App() {
  const handleBuyClick = () => {
    alert('¡Producto comprado!');
  };

  const handleButtonClick = () => {
    alert('¡Sate Sate clicked!');
  };

  return (
    <div>
      {/* Usamos Tailwind en el header */}
      <Header />
      
      {/* ProfileCard */}
      <div className="p-4">
        <h1>ProfileCard</h1>
        <ProfileCard 
          name="Maria Romero" 
          description="Desarrolladora frontend apasionada por la tecnología." 
        />
      </div>

      {/* ProductCard */}
      <Container>
        <Title>Productos</Title>
        <ProductCard 
          productName="Fresa" 
          onBuyClick={handleBuyClick} 
        />
      </Container>

      {/* Card */}
      <div style={{ padding: '20px' }}>
        <h1>Card</h1>
        <Card 
          title="Meliodas" 
          description="Personaje de un anime de magia, donde se tiene que enfrentar a su familia para salvaer a Elisabeth." 
          onButtonClick={handleButtonClick} 
        />
      </div>
    </div>
  );
}

export default App;







