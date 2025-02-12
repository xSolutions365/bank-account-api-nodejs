import Header from '../components/Header';
import Footer from '../components/Footer';
import BankAccountTable from '../components/BankAccountTable';

const BankAccountsPage = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <BankAccountTable />
      </div>
      <Footer />
    </div>
  );
};

export default BankAccountsPage;
