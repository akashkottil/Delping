import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'



const HomeScreen = () => {



  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  )

  return (
    <View className="flex-1 items-center justify-center bg-white">

      {/*  Flat list demo rendering */}

      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />


      <StatusBar style="auto" />
    </View>
  )
}


export default HomeScreen;


