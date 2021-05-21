import React from 'react';
import LogoAsset from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.svg';
import ListIcon from '../../assets/list.svg';
import { 
    Container, 
    Logo, 
    Icon, 
    IconContainer } from './styles';
import { useMediaQuery } from '../../hooks/useMediaQuery'

const Header: React.FC = () => {
    const screenSize = useMediaQuery();

    return <Container>
        <Logo src={LogoAsset} alt="Alura Dev"/>
        
        {
            screenSize === 'mobile' ? 
            (
                <IconContainer>
                    <Icon src={SearchIcon} alt="Buscar" />
                    <Icon src={ListIcon} alt="Listar" />
                </IconContainer>
            ) :
            (
                <>{ /* TODO */}</>
            )
        }

    </Container>;
}

export default Header;