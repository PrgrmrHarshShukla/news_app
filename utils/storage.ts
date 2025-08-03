import { post_type } from '@/constants/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const POSTS_KEY = 'news_posts';

// Save a new post
export async function savePost(post: post_type) {
  const existing = await getPosts();
  const updated = [post, ...existing]; // latest first
  await AsyncStorage.setItem(POSTS_KEY, JSON.stringify(updated));
}

// Get all posts
export async function getPosts(): Promise<post_type[]> {
  const data = await AsyncStorage.getItem(POSTS_KEY);
  return data ? JSON.parse(data) : [];
}

// Clear all posts
export async function clearPosts() {
  await AsyncStorage.removeItem(POSTS_KEY);
}

export async function deletePost(id: string) {
  try {
    const posts = await getPosts();
    const updatedPosts = posts.filter(post => post.id !== id);
    
    await AsyncStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  } catch (error) {
    console.error('Failed to delete post:', error);
    throw new Error('Unable to delete post at this time.');
  }
}