import { Session } from '@supabase/supabase-js';
import { Redirect } from 'expo-router';
import { useState, useEffect } from 'react';

import Loading from '~/components/Loading';
import { useFirstLaunch } from '~/hooks';
import { supabase } from '~/supabase';

const Index = () => {
  const { data: isFirstLaunch, isPending, error } = useFirstLaunch();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  if (isPending) return <Loading />;

  if (error) return <Redirect href="/getting-started" />;

  if (isFirstLaunch) return <Redirect href="/getting-started" />;

  if (session === null) return <Redirect href="/(onboarding)/sign-in" />;

  return session?.user ? <Redirect href="/(tabs)" /> : <Redirect href="/(onboarding)/sign-in" />;
};

export default Index;
