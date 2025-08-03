import tw from '@/twrnc';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

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
    <ScrollView horizontal={false} style={tw`w-full h-auto`}>
      <View style={tw`flex flex-col justify-start items-center min-h-full mt-8 mb-20 p-4`}>
        <Text style={tw`text-white text-2xl font-semibold mt-4`}>AI News</Text>
        <View style={tw`mb-4 mt-4`}></View>
        {
          posts.map((post, index) => <PostCard key={index} post={post} onDelete={onDelete} />)
        }
      </View>
    </ScrollView>
  );
}
