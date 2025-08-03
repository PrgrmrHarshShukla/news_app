import tw from '@/twrnc';
import { ScrollView, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView horizontal={false} style={tw`w-full h-auto`}>
      <View style={tw`flex flex-col justify-start items-center min-h-full mt-8 mb-20 p-4`}>
        <Text style={tw`text-white text-2xl font-semibold`}>AI News</Text>
        <View style={tw`w-40 mb-2 h-40 mt-12 border border-red-500`}></View>
        <View style={tw`w-40 mb-2 h-40 border border-red-500`}></View>
        <View style={tw`w-40 mb-2 h-40 border border-red-500`}></View>
        <View style={tw`w-40 mb-2 h-40 border border-red-500`}></View>
        <View style={tw`w-40 mb-2 h-40 border border-red-500`}></View>
        <View style={tw`w-40 mb-2 h-40 border border-red-500`}></View>
        <View style={tw`w-40 mb-2 h-40 border border-red-500`}></View>
      </View>
    </ScrollView>
  );
}
