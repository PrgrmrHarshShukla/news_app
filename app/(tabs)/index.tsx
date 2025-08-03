import tw from '@/twrnc';
import { ScrollView, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <ScrollView horizontal={false} style={tw`w-full h-auto`}>
      <View style={tw`flex flex-col justify-center items-center`}>
        <Text>News feed</Text>
      </View>
    </ScrollView>
  );
}
