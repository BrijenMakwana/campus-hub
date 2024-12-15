import { useForm, Controller } from 'react-hook-form';
import { Modal, TouchableOpacity, View } from 'react-native';

import BookItem from './BookItem';

import CustomInput from '~/components/CustomInput';
import Loading from '~/components/Loading';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Separator } from '~/components/ui/separator';
import { Text } from '~/components/ui/text';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import { useBook, useListBookForSale } from '~/hooks';
import { Clear } from '~/lib/icons/Clear';
import { BookCondition } from '~/types';

interface ISellBookModal {
  bookId: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISellBookForm {
  bookCondition: BookCondition;
  price: string;
  remarks: string;
}

const SellBookModal = (props: ISellBookModal) => {
  const { bookId, modalVisible, setModalVisible } = props;

  const { data: book, isPending: bookIsPending } = useBook(bookId);

  const { mutate: listBookForSale, isPending } = useListBookForSale();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISellBookForm>({
    defaultValues: {
      bookCondition: BookCondition.USED,
      price: '',
      remarks: '',
    },
  });

  const onSubmit = async (data: ISellBookForm) => {
    listBookForSale({ bookId, ...data });
  };

  return (
    <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <View className="flex-1 gap-5 bg-background p-5">
        <TouchableOpacity onPress={() => setModalVisible(false)} className="self-end">
          <Clear className="text-foreground" size={25} strokeWidth={1.25} />
        </TouchableOpacity>

        <Label>Book you are selling</Label>

        {bookIsPending ? <Loading /> : <BookItem {...book} />}

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
          rules={{
            maxLength: {
              value: 150,
              message: 'Remarks cannot exceed 150 characters',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="Remarks (Optional)"
              placeholder="e.g., Slightly worn, good condition"
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

          <Button variant="outline" onPress={() => setModalVisible(false)}>
            <Text>Discard</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default SellBookModal;
