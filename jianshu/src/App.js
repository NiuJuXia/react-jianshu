import React from 'react';
// import styled from 'styled-components'
import { GlobalStyle } from './style';
import Header from './common/header/index.js';
import { GlobalStyleFont } from './statics/icon-fonts/iconfont.js';
import { Provider } from 'react-redux';
import  store from './store/index.js'

function App() {
  return (
    
    <div className="App">
    <Provider store={store}>
    <GlobalStyleFont/>
    <GlobalStyle/>
    <Header/>
    </Provider>
    </div>
    
  );
}

export default App;
