import tw from '@/twrnc';
import validator from '@/validate';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function NewsForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateAndSubmit = async () => {
    if (!title || !description || !city || !category || !firstName || !phone) {
      Alert.alert('Error', 'Please fill all fields (image is optional).');
      return;
    }
    if (description.length < 50) {
      Alert.alert('Error', 'Description must be at least 50 characters.');
      return;
    }
    if (phone.length !== 10) {
      Alert.alert('Error', 'Contact number must have 10 digits.');
      return;
    }

    const news_object = {
      title,
      description,
      city,
      category,
      firstName,
      phone,
      imageUri
    };

    const verificationResponse = await validator({
      title,
      description
    });

    console.log(verificationResponse);
    




    Alert.alert('Success', 'News submitted successfully!');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <ScrollView horizontal={false} style={tw`w-full h-auto`}>
      <View style={tw`flex flex-col justify-start items-center min-h-full mt-8 mb-20 p-4 pt-12`}>
        <Text style={tw`text-2xl font-bold mb-12 text-white`}>Upload News</Text>

        <TextInput
          placeholderTextColor="#717a7aff"
          placeholder="News Title"
          value={title}
          onChangeText={setTitle}
          style={tw`border border-gray-300 w-[85%] max-w-[500px] p-2 mb-3 rounded text-white`}
        />

        <TextInput
          placeholderTextColor="#717a7aff"
          placeholder="Description (min 50 chars)"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          textAlignVertical="top" 
          style={tw`border border-gray-300 w-[85%] max-w-[500px] p-2 mb-3 rounded h-28 text-left text-white`}
        />

        <TextInput
          placeholderTextColor="#717a7aff"
          placeholder="City"
          value={city}
          onChangeText={setCity}
          style={tw`border border-gray-300 w-[85%] max-w-[500px] p-2 mb-3 rounded text-white`}
        />

        <TextInput
          placeholderTextColor="#717a7aff"
          placeholder="Category (e.g., Accident, Festival)"
          value={category}
          onChangeText={setCategory}
          style={tw`border border-gray-300 w-[85%] max-w-[500px] p-2 mb-3 rounded text-white`}
        />

        <TextInput
          placeholderTextColor="#717a7aff"
          placeholder="Publisher's First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={tw`border border-gray-300 w-[85%] max-w-[500px] p-2 mb-3 rounded text-white`}
        />

        <TextInput
          placeholderTextColor="#717a7aff"
          placeholder="Publisher's Phone Number"
          value={phone}
          keyboardType="phone-pad"
          onChangeText={setPhone}
          style={tw`border border-gray-300 w-[85%] max-w-[500px] p-2 mb-3 rounded text-white`}
        />

        <Pressable onPress={pickImage} style={tw`bg-blue-500 p-3 rounded mb-3 w-[85%] max-w-[500px]`}>
          <Text style={tw`text-white text-center`}>Upload Image (Optional)</Text>
        </Pressable>

        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={tw`w-[85%] max-w-[500px] h-40 mb-3 rounded`}
            resizeMode="cover"
          />
        )}

        {loading ?
          <View style={tw`bg-blue-500 p-2 px-3 mt-8 rounded mb-3`}>
            <ActivityIndicator  />
          </View>
          :
          <Pressable disabled={loading} onPress={validateAndSubmit} style={tw`bg-blue-500 p-2 px-3 mt-8 rounded mb-3`}>
            <Text style={tw`text-white text-center`}>Upload</Text>
          </Pressable>
        }
      </View>
    </ScrollView>
  );
}
