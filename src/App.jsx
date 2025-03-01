import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UnderMaintanence from './pages/UnderMaintanence'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import ContactUs from './pages/Contact'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='*' element={<UnderMaintanence />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App