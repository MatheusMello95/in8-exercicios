import React from 'react';
import { Container, Content, TopContent, BottomContent } from "./styles";

const Header = () => (
    <Container>
        <Content>
            <TopContent>
                logo e menu
            </TopContent>
            <BottomContent>
                <h1>Estágio</h1>
                <h2>Prova de seleção</h2>
            </BottomContent>
        </Content>
    </Container>
    
);

export default Header;