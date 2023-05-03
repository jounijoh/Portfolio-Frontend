
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import { GlobalStyle } from './global/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { Layout } from './components/Layout/Layout';
import Homepage from './components/Homepage/Homepage';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { ContactSection } from './components/Contact/Contact';


function App() {

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/skills' element={<SkillsSection />} />
            <Route path='/contact' element={<ContactSection />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </Layout>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
