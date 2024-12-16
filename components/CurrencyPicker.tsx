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
import useCurrencyStore, { countriesAndCurrencies } from '~/store';

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
      <Label className="mb-3">Select Currency</Label>

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
