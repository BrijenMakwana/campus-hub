import { create } from 'zustand';

export const countriesAndCurrencies = [
  { country: 'United States', currency: 'USD', symbol: '$', exchangeRate: 1 },
  { country: 'Eurozone', currency: 'EUR', symbol: '€', exchangeRate: 0.91 },
  { country: 'United Kingdom', currency: 'GBP', symbol: '£', exchangeRate: 0.73 },
  { country: 'India', currency: 'INR', symbol: '₹', exchangeRate: 82.5 },
  { country: 'Japan', currency: 'JPY', symbol: '¥', exchangeRate: 141 },
  { country: 'Canada', currency: 'CAD', symbol: '$', exchangeRate: 1.34 },
  { country: 'Australia', currency: 'AUD', symbol: '$', exchangeRate: 1.55 },
  { country: 'China', currency: 'CNY', symbol: '¥', exchangeRate: 7.15 },
  { country: 'Switzerland', currency: 'CHF', symbol: 'CHF', exchangeRate: 0.89 },
  { country: 'Russia', currency: 'RUB', symbol: '₽', exchangeRate: 93 },
  { country: 'Brazil', currency: 'BRL', symbol: 'R$', exchangeRate: 5 },
  { country: 'South Africa', currency: 'ZAR', symbol: 'R', exchangeRate: 19 },
  { country: 'Mexico', currency: 'MXN', symbol: '$', exchangeRate: 17.2 },
  { country: 'South Korea', currency: 'KRW', symbol: '₩', exchangeRate: 1315 },
  { country: 'Singapore', currency: 'SGD', symbol: '$', exchangeRate: 1.36 },
  { country: 'Turkey', currency: 'TRY', symbol: '₺', exchangeRate: 26.5 },
  { country: 'Saudi Arabia', currency: 'SAR', symbol: '﷼', exchangeRate: 3.75 },
  { country: 'Nigeria', currency: 'NGN', symbol: '₦', exchangeRate: 765 },
  { country: 'Argentina', currency: 'ARS', symbol: '$', exchangeRate: 350 },
  { country: 'United Arab Emirates', currency: 'AED', symbol: 'د.إ', exchangeRate: 3.67 },
];

interface Currency {
  country: string;
  currency: string;
  symbol: string;
  exchangeRate: number;
}

interface CurrencyStore {
  currency: Currency;
  setCurrency: (newCurrency: Currency) => void;
  getExchangeRate: (price: number) => number;
  convertToUSD: (price: number) => number;
}

const useCurrencyStore = create<CurrencyStore>((set, get) => ({
  currency: countriesAndCurrencies[0],

  setCurrency: (newCurrency) => set({ currency: newCurrency }),
  getExchangeRate: (price: number) => {
    const { exchangeRate } = get().currency;
    const convertedPrice = price * exchangeRate;

    return Math.round(convertedPrice * 100) / 100;
  },

  convertToUSD: (price: number) => {
    const { exchangeRate } = get().currency;
    const convertedPrice = price / exchangeRate;

    return Math.round(convertedPrice * 100) / 100;
  },
}));

export default useCurrencyStore;
