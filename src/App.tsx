import './global.css'
import Main from './pages/Main'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
