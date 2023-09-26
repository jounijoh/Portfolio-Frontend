
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import { GlobalStyle } from './global/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { Layout } from './components/Layout/Layout';
import Homepage from './components/Homepage/Homepage';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { ContactSection } from './components/Contact/Contact';
import { RotatingTriangles } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { StyledSpinnerContainer } from './styles';
import { colors } from './global/Colors';
import { AboutType } from './types';
import axios from 'axios';

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [aboutData, setAboutData] = useState<AboutType[]>([]);
  const [minSpinnerTimeElapsed, setMinSpinnerTimeElapsed] = useState(false);

  // Set minimum time for spinner to be visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinSpinnerTimeElapsed(true);
    }, 1000); // 1 seconds

    return () => clearTimeout(timer); // Cleanup the timer if component unmounts
  }, []);

  // Fetch data for About section to time spinner when it's done
  useEffect(() => {
    const fetchContext = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_VERCEL_FETCH_URL}/about`);
        setAboutData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching content for about section:', err);
        setIsLoading(false);
      }
    };

    fetchContext();
  }, []);



  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isLoading || !minSpinnerTimeElapsed ? (
            <StyledSpinnerContainer>
              <RotatingTriangles
                visible={true}
                height="150"
                width="150"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-triangels-wrapper"
                colors={[colors.secondary.cyan, '#e1306c', colors.text.lightPurple]}
              />
            </StyledSpinnerContainer>
          ) : (
            <Layout aboutData={aboutData}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/about' element={<AboutMe />} />
                <Route path='/skills' element={<SkillsSection />} />
                <Route path='/contact' element={<ContactSection />} />
                <Route path='*' element={<h1>404</h1>} />
              </Routes>
            </Layout>
          )}
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
