import './App.css'
import AboutUs from './components/AboutUs/AboutUs';
import LatestJobs from './components/LatestJobs/LatestJobs'
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/Testimonials/Testimonials';
import LatestInsight from './components/LatestInsight/LatestInsight';
import Footer from './components/Footer/Footer';
import NavHero from './components/NavHero/NavHero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import useLocalStorage from 'use-local-storage';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth';
import { ReactNode } from 'react';
import Register from './components/Login/Register';


function App(): ReactNode {
  const [token, setToken] = useLocalStorage<string | null>("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path='/login' />
          <Route element={<Register />} path='/register' />
          <Route
            element={
              <RequireAuth>
                <NavHero />
                <LatestJobs />
                <AboutUs />
                <Testimonials />
                <LatestInsight />
                <Footer />
              </RequireAuth>
            }
            path='/'
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>


  )
}

export default App
