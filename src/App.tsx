
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

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleDataLoaded = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);  // 2 seconds delay for demonstration

    return () => clearTimeout(timer); // Cleanup the timeout if component unmounts
  }, []);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isLoading ? (
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
            <Layout>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/about' element={<AboutMe onDataLoaded={handleDataLoaded} />} />
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
