import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import CampsiteDetailPage from './pages/CampusDetailPage';


function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='signup' element={<SignUpPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route 
                    path='directory/:campsiteId' element={<CampsiteDetailPage />} 
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;