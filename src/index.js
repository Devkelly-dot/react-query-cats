import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Catfact from './pages/Catfact';
import Nav from './partials/Nav';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import FavFacts from './pages/FavFacts';
import TopFact from './partials/TopFact';
import './App.css'
export default function App()
{
  const client = new QueryClient();
  const [theme,setTheme] = useState("light")
  
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <Provider store = {store}>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <Nav/>
            <TopFact/>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="cat" element={<Catfact/>}/>
              <Route path="fav" element={<FavFacts/>}/>
              <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>  
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext(
  {
    theme:"light",
    setTheme: (theme)=>{}
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App/></React.StrictMode>)