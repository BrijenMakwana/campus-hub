import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SharingSvg from '../../assets/sharing.svg';

import BackgroundShape from '~/components/BackgroundShape';
import CustomInput from '~/components/CustomInput';
import Loading from '~/components/Loading';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { useSignUp } from '~/hooks';
import { ArrowLeft } from '~/lib/icons/ArrowLeft';

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: 0,
      password: '',
    },
  });

  const { mutate: signUp, isPending, error } = useSignUp();

  const onSubmit = async (data) => {
    signUp(data);
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <BackgroundShape />

      <SharingSvg
        width={200}
        height={170}
        style={{
          alignSelf: 'center',
        }}
      />

      <View className="mt-14 gap-2">
        <Text className="text-2xl font-semibold">Welcome aboard, book lover!</Text>
        <Text className="text-gray-400">Create an account to unlock your next reads</Text>
      </View>

      <View className="mt-5 gap-5">
        <Controller
          control={control}
          rules={{
            required: 'Full Name is required.',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="full name"
              placeholder="e.g., John Doe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.fullName?.message}
            />
          )}
          name="fullName"
        />

        <Controller
          control={control}
          rules={{
            required: 'Email is required.',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Enter a valid email address.',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="email"
              placeholder="e.g., johndoe@example.com"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.email?.message}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: 'Phone number is required.',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Enter a valid 10-digit phone number.',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="phone"
              placeholder="e.g., 9876543210"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.phone?.message}
              keyboardType="decimal-pad"
            />
          )}
          name="phone"
        />

        <Controller
          control={control}
          rules={{
            required: 'Password is required.',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long.',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              label="password"
              placeholder="Enter a strong password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
              secureTextEntry
            />
          )}
          name="password"
        />

        {error && <Text className="text-red-500">{error.message}</Text>}
      </View>

      <View className="mt-auto gap-3">
        {isPending ? (
          <Loading />
        ) : (
          <Button size="lg" onPress={handleSubmit(onSubmit)} className="bg-primary">
            <Text>Register</Text>
          </Button>
        )}

        <Button
          size="sm"
          onPress={() => router.back()}
          variant="link"
          className="flex flex-row gap-3">
          <ArrowLeft className="text-foreground" size={23} strokeWidth={1.25} />

          <Text>back to login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
