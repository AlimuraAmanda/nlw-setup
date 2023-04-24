import { ScrollView, TouchableOpacity, Text, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';

export function CheckBox(){
    return (
        <TouchableOpacity
        activeOpacity={0.7}
        className=" flex-row mb-2 items-center"
        >
            <View className="h-8 bg-green-500 rounded-lg items-center justify-center">

            </View>
        </TouchableOpacity>
    )
}