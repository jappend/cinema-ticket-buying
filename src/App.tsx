import './global.css'
import Main from './pages/Main'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router";
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import MovieDummy from './pages/MovieDummy';
import Tickets from './pages/Tickets';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:slug" element={<MovieDummy />} />
            <Route path="tickets" element={<Tickets />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
