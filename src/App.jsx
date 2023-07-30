import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Navbar from './components/navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/page/:page' element={<Main />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default React.memo(App);
