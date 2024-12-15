import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View, Image, TouchableOpacity, Linking } from 'react-native';

import Loading from './Loading';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Text } from './ui/text';

import { useGitRepo, useContributors } from '~/hooks';
import { THEME } from '~/lib/constants';

const GithubCard = ({ repoUrl }: { repoUrl: string }) => {
  const { data: repo, isPending, error } = useGitRepo(repoUrl);

  const { data: contributors } = useContributors(repoUrl);

  if (isPending) return <Loading />;

  if (error) return;

  const { name, description, topics, html_url } = repo;

  return (
    <View className="gap-4 rounded-xl border border-input p-5">
      <View className="flex flex-row items-center gap-5">
        <FontAwesome5 name="github" size={35} color={THEME.light.accent} />
        <Text className="text-2xl">{name}</Text>
      </View>

      <Text>{description}</Text>

      <View className="flex flex-row flex-wrap items-center gap-2">
        {topics.map((topic, index) => (
          <Badge key={index} variant="outline">
            <Text>{topic}</Text>
          </Badge>
        ))}
      </View>

      <View className="flex flex-row flex-wrap items-center gap-2">
        {contributors?.map((contributor) => (
          <TouchableOpacity
            key={contributor.id}
            onPress={() => Linking.openURL(contributor.html_url)}>
            <Image
              source={{
                uri: contributor.avatar_url,
              }}
              className="aspect-square w-10 rounded-full"
            />
          </TouchableOpacity>
        ))}
      </View>

      <Button
        onPress={() => Linking.openURL(html_url)}
        className="flex flex-row items-center gap-3 self-end">
        <Text>View Source Code</Text>
        <EvilIcons name="external-link" size={25} color="#fff" />
      </Button>
    </View>
  );
};

export default GithubCard;
