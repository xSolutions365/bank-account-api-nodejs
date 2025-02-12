import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  CssBaseline,
} from '@mui/material';

interface BankAccount {
  id: number;
  accountNumber: string;
  accountHolderName: string;
  balance: number;
}

const App: React.FC = () => {
  const [accounts, setAccounts] = useState<BankAccount[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/BankAccount')
      .then(response => setAccounts(response.data))
      .catch(error => console.error('Error fetching accounts:', error));
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#24004C' }}>
            BankAccountUI
          </Typography>
          <div>
            <Link href="#" sx={{ mx: 2, color: 'black', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
            <Link href="#" sx={{ mx: 2, color: 'black', textDecoration: 'none', fontWeight: '500' }}>Privacy</Link>
          </div>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#24004C', mb: 2 }}>
          Bank Accounts
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2, borderRadius: '8px', overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#24004C' }}> {/* Correct purple */}
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Account Number</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Account Holder</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map(account => (
                <TableRow key={account.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#F2F2F2' } }}>
                  <TableCell>{account.accountNumber}</TableCell>
                  <TableCell>{account.accountHolderName}</TableCell>
                  <TableCell>${account.balance.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center', color: 'gray', pb: 2 }}>
          © 2025 - BankAccountUI - <Link href="#" sx={{ color: '#24004C', textDecoration: 'none', fontWeight: '500' }}>Privacy</Link>
        </Typography>
      </Container>
    </>
  );
};

export default App;
