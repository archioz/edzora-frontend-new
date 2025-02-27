import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UnderMaintanence from './pages/UnderMaintanence'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='*' element={<UnderMaintanence />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App