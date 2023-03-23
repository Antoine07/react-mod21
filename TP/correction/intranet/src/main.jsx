import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home'
import CollabList from './components/CollabList'
import './css/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/userSlice";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<Home />} />
        <Route path="/list" element={<CollabList />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)



/* Arborescence site
*   - Login
*       - home (say hello)
*       - list
*       - profil
*       - Add collab (ADMIN)
*       - Delete collab (ADMIN)
*/
