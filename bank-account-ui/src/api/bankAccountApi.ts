export interface BankAccount {
    id: number;
    accountNumber: string;
    accountHolderName: string;
    balance: number;
  }
  
  const API_BASE_URL = "http://localhost:3000/api/BankAccount"; 
  
  export const fetchBankAccounts = async (): Promise<BankAccount[]> => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch bank accounts");
    }
    return response.json();
  };
  