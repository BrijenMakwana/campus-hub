import { useForm, Controller } from 'react-hook-form';
import { View } from 'react-native';

import CustomInput from '~/components/CustomInput';
import Loading from '~/components/Loading';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Text } from '~/components/ui/text';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import useCurrencyStore from '~/store';
import { BookCondition } from '~/types';

interface IBookSaleForm {
  onSubmit: ({
    bookCondition,
    price,
    remarks,
  }: {
    bookCondition: BookCondition;
    price: string;
    remarks?: string;
  }) => void;
  isPending: boolean;
  buttonText: string;
  defaultValues?: IForm;
}

interface IForm {
  bookCondition: BookCondition;
  price: string;
  remarks: string;
}

const BookSaleForm = (props: IBookSaleForm) => {
  const {
    onSubmit,
    isPending,
    buttonText,
    defaultValues = {
      bookCondition: BookCondition.USED,
      price: '',
      remarks: '',
    },
  } = props;

  const { currency } = useCurrencyStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues,
  });

  const onSubmitForm = async (data: IForm) => {
    onSubmit(data);
  };

  return (
    <View className="flex-1 gap-4">
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
            label={`Price (${currency.symbol})`}
            placeholder="e.g., 10"
            keyboardType="numeric"
            className="w-32"
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
          <Button className="bg-primary" onPress={handleSubmit(onSubmitForm)}>
            <Text>{buttonText}</Text>
          </Button>
        )}
      </View>
    </View>
  );
};

export default BookSaleForm;
