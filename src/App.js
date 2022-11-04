import React from 'react'; 
import Footer from './components/Khalim/footer/Footer';
import AdvTelegram from './components/Khalim/telegramform/AdvTelegram';
import Testimonials from './components/Khalim/testimonials/Testimonials';
import About from './pages/About';
import Header from './pages/Header';
import Navbar from './pages/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Testimonials />
            <AdvTelegram />
            <Footer />
        </div>
    )
}

export default App
