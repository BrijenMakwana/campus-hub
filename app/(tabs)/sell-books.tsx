import { useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import SearchBooksScreen from './search-books';

import CustomInput from '~/components/CustomInput';
import WishListBook from '~/components/WishListBook';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import { Clear } from '~/lib/icons/Clear';
import { BookCondition } from '~/types';

const SellBooksScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const [value, setValue] = useState<BookCondition>(BookCondition.USED);

  return (
    <>
      <SearchBooksScreen />

      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 gap-5 bg-background p-5">
          <TouchableOpacity onPress={() => setModalVisible(false)} className="self-end">
            <Clear className="text-foreground" size={25} strokeWidth={1.25} />
          </TouchableOpacity>

          <Label>Book you are selling</Label>
          <WishListBook bookId="hjEFCAAAQBAJ" />

          <Separator />

          <Label>Book condition</Label>

          <ToggleGroup
            type="single"
            value={value}
            onValueChange={setValue}
            className="items-center justify-start gap-3">
            {Object.values(BookCondition).map((item, index) => (
              <ToggleGroupItem value={item} key={index} variant="outline" size="sm">
                <Text className="font-medium">{item}</Text>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <CustomInput label="Price" keyboardType="numeric" className="w-28" />

          <CustomInput label="Remarks (Optional)" multiline />

          <View className="mt-auto gap-3">
            <Button className="bg-primary">
              <Text>List Book for Sale</Text>
            </Button>

            <Button variant="outline">
              <Text>Discard</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SellBooksScreen;
