import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BankAccountsPage from './pages/BankAccountsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BankAccountsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
