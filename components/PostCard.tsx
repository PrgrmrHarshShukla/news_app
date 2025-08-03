import { post_type } from "@/constants/types";
import tw from "@/twrnc";
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function PostCard({
  post,
  onDelete
}: {
  post: post_type;
  onDelete: (id: string) => void;
}) {
  const {
    id,
    title,
    description,
    city,
    category,
    firstName,
    phone,
    imageUri,
    isBookMarked,
  } = post;


  return (
    <View style={tw`bg-white rounded-2xl shadow-md p-4 mb-4 w-[95%] h-auto max-w-[500px] self-center`}>
      {/* Top Section */}
      <View style={tw`flex-row justify-between items-start mb-2`}>
        <View style={tw`flex-1 pr-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 dark:text-white`}>{title}</Text>
          <Text style={tw`text-sm text-gray-500`}>{category} | {city}</Text>
        </View>
        <View style={tw`flex-row items-center gap-2`}>
          {isBookMarked && (
            <MaterialIcons name="bookmark" size={22} color="#facc15" style={tw`mr-2`} />
          )}
          <TouchableOpacity onPress={() => onDelete(id)}>
            <MaterialIcons name="close" size={22} color="#544d4cf5" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Image */}
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={tw`h-48 rounded-md border border-gray-300 mb-3`}
          resizeMode="contain"
        />
      )}

      {/* Description */}
      <Text style={tw`text-sm text-gray-800 dark:text-gray-200 mb-3`}>
        {description}
      </Text>

      {/* Footer */}
      <View style={tw`border-t border-gray-300 dark:border-gray-700 pt-2 mt-2`}>
        <Text style={tw`text-xs text-gray-600 dark:text-gray-400`}>
          {firstName} ({phone.slice(0, 3)}*****{phone.slice(-2)})
        </Text>
      </View>
    </View>
  );
}
