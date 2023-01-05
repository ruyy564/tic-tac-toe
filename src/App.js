import { Routes, Route } from 'react-router-dom';

import ThemeProvider from './containers/ThemeProvider';
import MenuPage from './pages/MenuPage';
import TwoPlayerGamePage from './pages/TwoPlayerGamePage';

function App() {
  return (
    <ThemeProvider value="dark">
      <Routes>
        <Route path="*" element={<MenuPage />} />
        <Route path="/twoplayer" element={<TwoPlayerGamePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
