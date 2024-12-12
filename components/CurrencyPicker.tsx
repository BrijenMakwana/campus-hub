import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Label } from './ui/label';

import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Text } from '~/components/ui/text';
import useCurrencyStore from '~/store';

export const countriesAndCurrencies = [
  { country: 'United States', currency: 'USD', symbol: '$' },
  { country: 'Eurozone', currency: 'EUR', symbol: '€' },
  { country: 'United Kingdom', currency: 'GBP', symbol: '£' },
  { country: 'India', currency: 'INR', symbol: '₹' },
  { country: 'Japan', currency: 'JPY', symbol: '¥' },
  { country: 'Canada', currency: 'CAD', symbol: '$' },
  { country: 'Australia', currency: 'AUD', symbol: '$' },
  { country: 'China', currency: 'CNY', symbol: '¥' },
  { country: 'Switzerland', currency: 'CHF', symbol: 'CHF' },
  { country: 'Russia', currency: 'RUB', symbol: '₽' },
  { country: 'Brazil', currency: 'BRL', symbol: 'R$' },
  { country: 'South Africa', currency: 'ZAR', symbol: 'R' },
  { country: 'Mexico', currency: 'MXN', symbol: '$' },
  { country: 'South Korea', currency: 'KRW', symbol: '₩' },
  { country: 'Singapore', currency: 'SGD', symbol: '$' },
  { country: 'Turkey', currency: 'TRY', symbol: '₺' },
  { country: 'Saudi Arabia', currency: 'SAR', symbol: '﷼' },
  { country: 'Nigeria', currency: 'NGN', symbol: '₦' },
  { country: 'Argentina', currency: 'ARS', symbol: '$' },
  { country: 'United Arab Emirates', currency: 'AED', symbol: 'د.إ' },
];

const CurrencyPicker = () => {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  const { setCurrency, currency } = useCurrencyStore();

  return (
    <DropdownMenu className="w-64">
      <Label className="mb-2">Select Currency</Label>

      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Text>
            {currency.country} ({currency.currency})
          </Text>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="native:w-72 h-96" insets={contentInsets}>
        <ScrollView>
          {countriesAndCurrencies.map((item) => (
            <DropdownMenuItem key={item.country} onPress={() => setCurrency(item)}>
              <Text>
                {item.country} ({item.currency})
              </Text>
            </DropdownMenuItem>
          ))}
        </ScrollView>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyPicker;
