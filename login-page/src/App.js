import React from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import Pictures from './Components/Pictures/Pictures';
import { BrowserRouter, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={LoginForm} />
        <Route path="/Pictures" component={Pictures} />

      </div>
    </BrowserRouter>
  );
}

export default App;
