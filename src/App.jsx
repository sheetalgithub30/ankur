import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/index.jsx';
import ServicePage from './pages/service/index.jsx';
import TermsOfUse from './pages/termsOfUse/index.jsx';
import PrivacyPolicy from './pages/privacyPolicy/index.jsx';
import { Analytics } from '@vercel/analytics/react'; // Import Vercel Analytics
import './index.css';
import ContactUs from './pages/contactUs/index.jsx';
import CancellationPolicy from './pages/cancellationPolicy/index.jsx';
import Gemstone from './pages/gemstone/index.jsx';
// import Webinar from './pages/webinar/index.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/get-in-touch" element={<ContactUs/>}/>
        <Route path="/cancellation-policy" element={<CancellationPolicy/>}/>
        <Route path="/gemstones" element={<Gemstone/>}/>
        {/* <Route path="/webinar" element={<Webinar/>}/> */}
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
