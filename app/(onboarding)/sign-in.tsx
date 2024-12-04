import { Link, router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomInput from '~/components/CustomInput';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { ArrowRight } from '~/lib/icons/ArrowRight';

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="gap-5">
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
      </View>

      <View className="mt-auto gap-3">
        <Button size="lg" onPress={handleSubmit(onSubmit)} className="bg-primary">
          <Text>Sign In</Text>
        </Button>

        <Link href="/sign-up" asChild>
          <Button size="sm" variant="link" className="flex flex-row gap-3">
            <Text>new? sign up</Text>

            <ArrowRight className="text-foreground" size={23} strokeWidth={1.25} />
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
