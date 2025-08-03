import tw from '@/twrnc';
import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Alert, FlatList, Text } from 'react-native';

import PostCard from '@/components/PostCard';
import { post_type } from '@/constants/types';
import { deletePost, getPosts } from '@/utils/storage';


export default function HomeScreen() {
  const { toRefresh } = useLocalSearchParams();
  const [posts, setPosts] = useState<post_type[]>([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const fetcher = async () => {
    const allPosts = await getPosts();
    setPosts(allPosts);
  };

  useEffect(() => {
    fetcher();
  }, [toRefresh]);

  useEffect(() => {
    if (shouldRefresh) {
      fetcher();
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);


  const onDelete = async (id: string) => {
    try {
      await deletePost(id);
      setShouldRefresh(true);
    } catch (error) {
      Alert.alert('Error', "Error deleting post.");
      console.log("Error deleting post", error);
    }
  }

  

  return (
      <FlatList
        data={posts}
        contentContainerStyle={tw`flex justify-start items-center mt-8 mb-20 p-4 w-full`}
        ListHeaderComponent={<Text style={tw`text-white text-2xl font-semibold mb-8`}>AI News</Text>}
        renderItem={({ item }) => <PostCard post={item} onDelete={onDelete} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={tw`text-gray-400 text-base mt-10`}>No posts available.</Text>
        }
      />
  );
}
