import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className=" font-bold text-blue-500 text-2xl">Home screen</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen;

