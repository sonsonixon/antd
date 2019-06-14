import React, { Component } from 'react';
import { Button as AntButton } from 'antd';
import styled from 'styled-components'

/**
function App() {
  return (
    <div>
      
    </div>
  );
}
**/



class App extends Component {
  render() {
  
    const StyledButton = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;
    `
    return (
      <div>
        <center>Sonson Ixon</center>
        <StyledButton type="primary" icon="search" shape="round" size="large">Sample Button</StyledButton>
      </div>
    );
  }
}

export default App;
