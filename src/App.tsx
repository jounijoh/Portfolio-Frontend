
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import { GlobalStyle } from './global/GlobalStyle';
import { Layout } from './components/Layout/Layout';
import Homepage from './components/Homepage/Homepage';
import { SkillsSection } from './components/SkillsSection/SkillsSection';


function App() {

  return (
    <>
      <Router>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/skills' element={<SkillsSection />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
