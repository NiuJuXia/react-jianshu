import React from 'react';
// import styled from 'styled-components'
import { GlobalStyle } from './style';
import Header from './common/header/index.js';
import { GlobalStyleFont } from './statics/icon-fonts/iconfont.js';
import { Provider } from 'react-redux';
import  store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'


function App() {
  return (
    
    <div className="App">
    <Provider store={store}>
    <GlobalStyleFont/>
    <GlobalStyle/>
    <Header/>
    <BrowserRouter>
      <div>
        <Route path='/' exact component={Home}/>
        <Route path='/detail' exact component={Detail}/>
      </div>
    </BrowserRouter>
    </Provider>
    </div>
    
  );
}

export default App;
