import React from 'react';

import { Container, Logo } from './styles';
import LogoAsset from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
  <Container>
      <Logo src={LogoAsset} alt="Alura Dev"/>
      <p>Mandioca Frita!</p>
  </Container>
  );
}

export default Home;