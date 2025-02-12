import { useEffect, useState } from 'react';
import { fetchBankAccounts, BankAccount } from '../api/bankAccountApi'; 
import '../styles/BankAccountTable.css';

const BankAccountTable = () => {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const data = await fetchBankAccounts();
        setAccounts(data);
      } catch (err) {
        setError("Failed to load accounts");
      }
    };
    loadAccounts();
  }, []);

  return (
    <div className="table-wrapper">
      <h2 className="title">Bank Accounts</h2>
      
      <div className="table-container">
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <table className="account-table">
            <thead>
              <tr>
                <th>Account Number</th>
                <th>Account Holder</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.accountNumber}</td>
                  <td>{account.accountHolderName}</td>
                  <td>${account.balance.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BankAccountTable;
