import { useState } from 'react';
import Navbar from './components/navbar/Navbar.tsx';
import Home from './pages/home/Home.tsx';
import Work from './pages/work/Work.tsx';
import About from './pages/about/About.tsx';

function App() {
  const [selectedPage, setSelectedPage] = useState('Home');
  const [previous, setPrevious] = useState('Home');

  const handlePageChange = (page: string) => {
    setPrevious(selectedPage);
    setSelectedPage(page);
  };


  const renderPage = () => {
    switch (selectedPage) {
      case 'Home':
        return <Home />;
      case 'Work':
        return <Work previous={previous} />;
      case 'About':
        return <About previous={previous} />;
      default:
        return <Home />;
    }
  };


  return (
    <>
      <Navbar setSelectedPage={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default App;
