import { Link, router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ReadingSvg from '../../assets/reading.svg';

import BackgroundShape from '~/components/BackgroundShape';
import CustomInput from '~/components/CustomInput';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { ArrowRight } from '~/lib/icons/ArrowRight';
import { supabase } from '~/supabase';

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

  const onSubmit = async (data) => {
    const { email, password } = data;

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(user);

    console.log(error);
    if (!error) router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <BackgroundShape />

      <ReadingSvg
        width={300}
        height={170}
        style={{
          alignSelf: 'center',
        }}
      />

      <View className="mt-20 gap-2">
        <Text className="text-2xl font-semibold">Welcome back, bookworm!</Text>
        <Text className="text-gray-400">Login to find your next semester's books</Text>
      </View>

      <View className="mt-7 gap-5">
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
          <Text>Login</Text>
        </Button>

        <View className="flex flex-row items-center justify-center">
          <Text className="text-center">Don't have an account?</Text>

          <Link href="/sign-up" asChild>
            <Button size="sm" variant="link" className="flex flex-row gap-3">
              <Text>Register</Text>

              <ArrowRight className="text-foreground" size={23} strokeWidth={1.25} />
            </Button>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
