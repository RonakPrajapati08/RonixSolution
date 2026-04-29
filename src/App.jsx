import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import CaseStudy from './pages/CaseStudy'

export default function App() {
  return (
    <BrowserRouter basename="/RonixSolution">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<SingleBlog />} />
          <Route path="case-study/:slug" element={<CaseStudy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
}
