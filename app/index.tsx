import { Redirect } from 'expo-router';

import { useFirstLaunch } from '~/hooks';

const Index = () => {
  const { data: isFirstLaunch, isPending, error } = useFirstLaunch();

  if (isPending) return null;

  if (error) return <Redirect href="/getting-started" />;

  return isFirstLaunch ? (
    <Redirect href="/getting-started" />
  ) : (
    <Redirect href="/(onboarding)/sign-in" />
  );
};

export default Index;
