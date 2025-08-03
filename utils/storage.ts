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

// Add bookmark
export async function addBookMarkAsync(id: string) {
  try {
    const posts = await getPosts();
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, isBookMarked: true } : post
    );
    await AsyncStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  } catch (error) {
    console.error('Error bookmarking post:', error);
    throw new Error('Unable to bookmark post.');
  }
}

// Remove bookmark
export async function removeBookMarkAsync(id: string) {
  try {
    const posts = await getPosts();
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, isBookMarked: false } : post
    );
    await AsyncStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
  } catch (error) {
    console.error('Error removing bookmark:', error);
    throw new Error('Unable to remove bookmark.');
  }
}

// Get only bookmarked posts (optional)
export async function getBookmarkedPosts(): Promise<post_type[]> {
  const posts = await getPosts();
  return posts.filter(post => post.isBookMarked);
}
