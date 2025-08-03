import PostCard from '@/components/PostCard';
import { post_type } from '@/constants/types';
import tw from '@/twrnc';
import { deletePost, getPosts } from '@/utils/storage';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';


export default function HomeScreen() {
  const { toRefresh } = useLocalSearchParams();
  const [posts, setPosts] = useState<post_type[]>([]);

  const fetcher = async () => {
    const allPosts = await getPosts();
    setPosts(allPosts);
  };

  useEffect(() => {
    if (toRefresh === '1' || posts.length === 0) {
      fetcher();
    }
  }, []);
  useEffect(() => {
    // if (String(toRefresh) === '1' || posts.length === 0) {
      fetcher();
    // }
  }, []);

  const onDelete = async (id: string) => {
    try {
      await deletePost(id);
      await fetcher();
    } catch (error) {
      Alert.alert('Error', "Error deleting post.");
      console.log("Error deleting post", error);
    }
  }

  

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard post={item} onDelete={onDelete} />}
      contentContainerStyle={tw`items-center mt-8 mb-20 p-4`}
      ListHeaderComponent={<Text style={tw`text-white text-2xl font-semibold mb-8`}>AI News</Text>}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <Text style={tw`text-gray-400 text-base mt-10`}>No posts available.</Text>
      }
    />
  );
}
