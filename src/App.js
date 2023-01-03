import { Routes, Route } from 'react-router-dom';

import MenuPage from './pages/MenuPage';
import TwoPlayerGamePage from './pages/TwoPlayerGamePage';

function App() {
  return (
    <Routes>
      <Route path="*" element={<MenuPage />} />
      <Route path="/tic-tac-toe/twoplayer" element={<TwoPlayerGamePage />} />
    </Routes>
  );
}

export default App;
