import { create } from 'zustand';

import { countriesAndCurrencies } from '~/components/CurrencyPicker';

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
  currency: countriesAndCurrencies[0],
  setCurrency: (newCurrency) => set({ currency: newCurrency }),
}));

export default useCurrencyStore;
