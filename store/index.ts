import { create } from 'zustand';

interface Currency {
  country: string;
  currency: string;
  symbol: string;
}

interface CurrencyStore {
  currency: Currency;
  setCurrency: (newCurrency: Currency) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
  currency: { country: 'United States', currency: 'USD', symbol: '$' },

  setCurrency: (newCurrency) => set({ currency: newCurrency }),
}));

export default useCurrencyStore;
