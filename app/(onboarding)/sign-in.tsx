import { Link } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ReadingSvg from '../../assets/reading.svg';

import CustomInput from '~/components/CustomInput';
import Loading from '~/components/Loading';
import SVG1 from '~/components/svgs/SVG1';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { useSignIn } from '~/hooks';
import { ArrowRight } from '~/lib/icons/ArrowRight';

interface ISignInForm {
  email: string;
  password: string;
}

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate: signIn, isPending } = useSignIn();

  const onSubmit = async (data: ISignInForm) => {
    signIn(data);
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <SVG1 />

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
              keyboardType="email-address"
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
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
          name="password"
        />
      </View>

      <View className="mt-auto gap-3">
        {isPending ? (
          <Loading />
        ) : (
          <Button size="lg" onPress={handleSubmit(onSubmit)} className="bg-primary">
            <Text> {isPending ? 'Wait' : 'Login'}</Text>
          </Button>
        )}

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
