import { Linking } from 'react-native';

import { Button } from './ui/button';
import { Text } from './ui/text';

import { Phone } from '~/lib/icons/Phone';

interface IConnectCall {
  phone: number;
}

const ConnectCall = (props: IConnectCall) => {
  const { phone } = props;

  const openDialer = () => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <Button
      size="sm"
      className="flex flex-row items-center gap-3 bg-secondary"
      onPress={openDialer}>
      <Phone size={18} strokeWidth={1.2} className="text-background" />
      <Text>Connect</Text>
    </Button>
  );
};

export default ConnectCall;
