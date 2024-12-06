import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Modal, TouchableOpacity, View } from 'react-native';

import SearchBooksScreen from './search-books';
import { useListBookForSale } from '../../hooks';

import CustomInput from '~/components/CustomInput';
import Loading from '~/components/Loading';
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bookCondition: BookCondition.USED,
      price: 0,
      remarks: '',
    },
  });
  const { mutate: listBookForSale, isPending } = useListBookForSale();

  const onSubmit = async (data) => {
    listBookForSale({ bookId: 'qBfRDQAAQBAJ', ...data });
  };

  return (
    <>
      <SearchBooksScreen />

      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 gap-5 bg-background p-5">
          <TouchableOpacity onPress={() => setModalVisible(false)} className="self-end">
            <Clear className="text-foreground" size={25} strokeWidth={1.25} />
          </TouchableOpacity>

          <Label>Book you are selling</Label>
          <WishListBook bookId="qBfRDQAAQBAJ" />

          <Separator />

          <Label>Book condition</Label>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <ToggleGroup
                type="single"
                value={value}
                onValueChange={onChange}
                className="items-center justify-start gap-3">
                {Object.values(BookCondition).map((item, index) => (
                  <ToggleGroupItem value={item} key={index} variant="outline" size="sm">
                    <Text className="font-medium">{item}</Text>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
            name="bookCondition"
          />

          <Controller
            control={control}
            rules={{
              required: 'Price is required.',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label="Price"
                placeholder="e.g., 5"
                keyboardType="numeric"
                className="w-28"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.price?.message}
              />
            )}
            name="price"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label="Remarks (Optional)"
                placeholder="e.g., 5"
                multiline
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.remarks?.message}
              />
            )}
            name="remarks"
          />

          <View className="mt-auto gap-3">
            {isPending ? (
              <Loading />
            ) : (
              <Button className="bg-primary" onPress={handleSubmit(onSubmit)}>
                <Text>List Book for Sale</Text>
              </Button>
            )}

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
