import React from 'react';

import { GlobalStyle } from './styles/global'

import Header from './components/header';
import Footer from './components/footer';
import Cadastro from './components/cad';
import Table from './components/tab';

const App = () => (
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Cadastro />
      <Table />
      <Footer />
    </div>
  );

export default App;
