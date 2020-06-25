import React from 'react';
import {Container, Content, TopContent, BottomContent, FormControl, Button , FormAction} from './style.js';

const Cadastro =() =>(
        <Container>
            <Content>
                <TopContent>
                    <h1>Cadastro</h1>
                </TopContent>
                <BottomContent>
                    <FormControl>
                        <label>Nome:</label>
                        <input type='text'></input>
                    </FormControl>
                    <FormControl>
                        <label>E-mail:</label>
                        <input type='email'></input>
                    </FormControl>
                    <FormControl>
                        <label>Nascimento:</label>
                        <input type='date'></input>
                    </FormControl>
                    <FormControl>
                        <label>Telefone:</label>
                        <input type='tel'></input>
                    </FormControl>
                    <FormAction>
                        <Button>
                            CADASTRAR
                        </Button>
                    </FormAction>
                </BottomContent>
            </Content>
        </Container>
);

export default Cadastro;