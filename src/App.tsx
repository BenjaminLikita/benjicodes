import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import ErrorPage from './pages/ErrorPage'
import Footer from './components/footer'
import {Toaster} from "sonner"
function App() {

  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
