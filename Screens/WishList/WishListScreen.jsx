import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimate, useAnimatedStyle, withTiming } from 'react-native-reanimated'

const WishListScreen = () => {

    const position = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(()=>{
        return{
            transform:[{translateX:position.value}],
            height:60,
            width:60,
            backgroundColor:"blue"
        }
    })
    const animate =(index)=>{
        position.value= withTiming(index,{duration:500})
    }

    return (
        <View className="flex-1">
            <View className=" flex-row items-center  gap-12 mt-20">
            <Animated.View style={animatedStyle}/>
            <TouchableOpacity className=" h-12 w-12 rounded-lg bg-gray-400 flex justify-center items-center" onPress={()=>animate(50)}>
                <Text>BT1</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" h-12 w-12 rounded-lg bg-gray-400 flex justify-center items-center" onPress={()=>animate(150)}>
                <Text>BT2</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" h-12 w-12 rounded-lg bg-gray-400 flex justify-center items-center" onPress={()=>animate(270)}>
                <Text>BT3</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default WishListScreen

const styles = StyleSheet.create({})