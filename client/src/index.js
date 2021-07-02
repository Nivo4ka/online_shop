import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BouquetStore from './store/BouquetStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    bouquet: new BouquetStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

